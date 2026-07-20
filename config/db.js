import mongoose from "mongoose";
import dns from 'node:dns'; 

const connectDB = async () => {
  try {
    // Overrides local router blocks cleanly
    dns.setServers(['8.8.8.8', '1.1.1.1']);
    dns.setDefaultResultOrder('ipv4first');

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully! 🎉");
  } catch (error) {
    console.log("❌ DB Connection Error: ", error.message);
    process.exit(1);
  }
};

export default connectDB;