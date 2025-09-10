import mongoose from 'mongoose';

const dbconnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tasktrackerDB');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default dbconnection;