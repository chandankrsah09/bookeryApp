import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book_route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// app.use(express.json());

// connect to mongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
    console.log("Connected to MongoDB");
} catch (error) {
  console.log("error: ", error);
}

// definig routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// listen to port

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
