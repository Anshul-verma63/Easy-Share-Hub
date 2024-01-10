import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected successfully ${res.connection.host}`);
  } catch (error) {
    console.log(`error while db connect`);
  }
};
export default dbConnect;
