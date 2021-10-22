import "dotenv/config";

export const config = {
  isAdmin: true,
  hostname: process.env.HOSTNAME || "http://localhost",
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGO_URI,
};
