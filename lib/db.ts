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
  if (!MONGODB_URI) throw new Error('MONGODB_URI is required to connect.');
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
