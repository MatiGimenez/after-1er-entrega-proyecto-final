import mongoose from "mongoose";
import { config } from "../constants/index.js";

export const connectMongo = async () => {
  try {
    await mongoose.connect(config.mongoUri);
  } catch (err) {
    console.err(`Error conectandose a mongo: ${err}`);
  }
};
