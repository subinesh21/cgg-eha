import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  console.warn('MONGODB_URI is not set. MongoDB features will be disabled.');
}

declare global {
  // eslint-disable-next-line no-var -- global augmentation
  var _mongooseCache: { conn: Mongoose | null; promise: Promise<Mongoose> | null } | undefined;
}

const cached = globalThis._mongooseCache ?? { conn: null, promise: null };
if (process.env.NODE_ENV !== 'production') globalThis._mongooseCache = cached;

export async function connectDB(): Promise<Mongoose> {
  if (!MONGODB_URI) {
    console.warn('MONGODB_URI is not set. MongoDB features will be disabled.');
    throw new Error('MONGODB_URI is required to connect.');
  }
  
  console.log('Attempting to connect to MongoDB...');
  
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }
  
  if (!cached.promise) {
    console.log('Creating new MongoDB connection promise');
    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 second timeout
      socketTimeoutMS: 45000, // 45 second timeout
    }).then(conn => {
      console.log('MongoDB connected successfully!');
      return conn;
    }).catch(err => {
      console.error('MongoDB connection error:', err);
      throw err;
    });
  }
  
  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Failed to establish MongoDB connection:', error);
    cached.promise = null; // Reset promise on failure
    throw error;
  }
}

export default connectDB;
