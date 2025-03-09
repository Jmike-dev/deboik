// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}


declare global {
    var mongoose:
        | {
              conn: mongoose.Mongoose | null;
              promise: Promise<mongoose.Mongoose> | null;
          }
        | undefined;
}

// Use global cache if available, otherwise initialize it
let cached = global.mongoose as any;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
