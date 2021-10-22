import admin from "firebase-admin";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const serviceAccount = require("./after-mongo-firebase-firebase-adminsdk-uzkbq-3db03a0e8e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://after-mongo-firebase.firebaseio.com",
});

export const database = admin.firestore();
