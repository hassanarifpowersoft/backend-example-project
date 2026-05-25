//require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is Running on PORT ${process.env.PORT}`);
      app.on("error", (error) => {
        console.error("ERROR", error);
        throw error;
      });
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed !!", error);
  });


