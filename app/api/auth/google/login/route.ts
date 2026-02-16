import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { getSession } from '@/lib/session';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Try to connect to DB
    try {
      await connectDB();
    } catch (dbError) {
      return NextResponse.json(
        { message: 'Database not available for authentication' },
        { status: 503 }
      );
    }
    
    const { idToken, userInfo } = await request.json();
    
    // Validate input
    console.log('Received auth data:', {
      hasIdToken: !!idToken,
      hasUserInfo: !!userInfo,
      userInfoKeys: userInfo ? Object.keys(userInfo) : []
    });
    
    if (!idToken || !userInfo) {
      return NextResponse.json(
        { message: 'ID token and user info are required' },
        { status: 400 }
      );
    }
    
    const { uid: googleId, email, displayName: name, photoURL: picture } = userInfo;
    
    // Validate required fields
    if (!email || !name) {
      return NextResponse.json(
        { message: 'Email and name are required' },
        { status: 400 }
      );
    }
    
    // Check if user already exists with this Google ID
    let user = await User.findOne({ googleId });
    
    if (!user) {
      // Check if user exists with this email (existing email/password user)
      user = await User.findOne({ email });
      
      if (user) {
        // Link Google account to existing user
        user.googleId = googleId;
        user.name = name;
        // Remove password requirement for Google users
        if (user.password) {
          user.password = undefined;
        }
      } else {
        // Create new user
        user = new User({
          name,
          email,
          googleId,
          role: 'user',
          isActive: true
        });
      }
    }
    
    // Update user information
    user.lastLogin = new Date();
    user.isActive = true;
    
    await user.save();
    
    // Create session
    const response = NextResponse.json({
      message: 'Google authentication successful',
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        role: user.role,
        createdAt: user.createdAt,
      }
    });
    
    // Set session cookie
    const session = await getSession(request, response);
    session.userId = user._id.toString();
    session.email = user.email;
    session.isLoggedIn = true;
    await session.save();
    
    return response;
  } catch (error) {
    console.error('Google authentication error:', error);
    return NextResponse.json(
      { message: 'Internal server error during Google authentication' },
      { status: 500 }
    );
  }
}