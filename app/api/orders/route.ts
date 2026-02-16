import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import OrderModel from '@/models/Order';

// Get user's orders
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');

    if (!userId) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      );
    }

    // Build query - support both string and ObjectId user IDs
    const query: any = { 
      $or: [
        { 'user.id': userId },
        { 'user.id': userId.toString() }
      ]
    };
    if (status && status !== 'all') {
      query.status = status;
    }

    console.log('Fetching orders for userId:', userId);
    console.log('Query:', JSON.stringify(query));

    // Fetch orders sorted by newest first
    const orders = await OrderModel.find(query)
      .sort({ createdAt: -1 })
      .lean();
    
    console.log('Found orders:', orders.length);

    // Format orders for response
    const formattedOrders = orders.map((order: any) => ({
      id: order._id.toString(),
      orderNumber: order._id.toString().slice(-8).toUpperCase(),
      items: order.items,
      totalAmount: order.totalAmount,
      shippingAddress: order.shippingAddress,
      paymentMethod: order.paymentMethod,
      status: order.status,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
      canCancel: ['pending', 'confirmed'].includes(order.status),
    }));

    return NextResponse.json({
      orders: formattedOrders,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching user orders:', error);
    return NextResponse.json(
      { message: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
