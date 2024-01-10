import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import formSubmissionRoute from "./formSubmissionRoute.js"; // Adjust the path as necessary
import dotenv from "dotenv";
dotenv.configDotenv();
console.log(process.env); // This will log all the loaded environment variables.

const app = express();

app.use(cors()); // to handle cross-origin requests
app.use(bodyParser.json()); // to handle JSON payloads

// Use your form submission router
app.use("/api", formSubmissionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
