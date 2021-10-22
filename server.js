import "./src/db/firebase.js";
import app from "./src/app.js";
import { config } from "./src/constants/index.js";
import { connectMongo } from "./src/db/mongo.js";

const startServer = async () => {
  try {
    await Promise.all([connectMongo(), app.listen(config.port)]);

    console.log(
      `Server has started on port: ${config.port}, connected to mongo at ${config.mongoUri}`
    );
  } catch (error) {
    console.error(`Could not start the app: `, error);
  }
};

startServer();
