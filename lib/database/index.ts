import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'Collab-E',
    bufferCommands: false,
  });

  try {
    cached.conn = await cached.promise;

    console.log('Connected to MongoDB'); // Print message when connected to the database

    return cached.conn;
  } catch (error) {
    console.error('Error connecting to MongoDB:'); // Print error message if connection fails
    throw error;
  }
}
