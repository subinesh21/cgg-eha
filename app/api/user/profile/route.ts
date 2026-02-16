import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import UserModel from '@/models/User';

// Get user profile
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    const user = await UserModel.findById(userId).select('name email shippingAddress');

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        shippingAddress: user.shippingAddress || {
          fullName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: 'India',
          phone: '',
        },
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { message: 'Failed to fetch profile' },
      { status: 500 }
    );
  }
}

// Update user profile
export async function PATCH(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { userId, shippingAddress } = body;

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Validate shipping address fields if provided
    if (shippingAddress) {
      const requiredFields = ['fullName', 'address', 'city', 'state', 'zipCode', 'phone'];
      for (const field of requiredFields) {
        if (!shippingAddress[field]?.trim()) {
          return NextResponse.json(
            { message: `${field} is required` },
            { status: 400 }
          );
        }
      }

      // Validate phone number (10 digits)
      if (!/^\d{10}$/.test(shippingAddress.phone)) {
        return NextResponse.json(
          { message: 'Phone number must be 10 digits' },
          { status: 400 }
        );
      }
    }

    const updateData: any = {};
    if (shippingAddress) {
      updateData.shippingAddress = {
        fullName: shippingAddress.fullName,
        address: shippingAddress.address,
        city: shippingAddress.city,
        state: shippingAddress.state,
        zipCode: shippingAddress.zipCode,
        country: shippingAddress.country || 'India',
        phone: shippingAddress.phone,
      };
    }

    const user = await UserModel.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    ).select('name email shippingAddress');

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        shippingAddress: user.shippingAddress || {
          fullName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: 'India',
          phone: '',
        },
      },
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { message: 'Failed to update profile' },
      { status: 500 }
    );
  }
}
