import express from "express";
import formDatarouter from "./routes/formData.router";

const app = express();
const port = 3000;
app.use(express.json()); // This will parse incoming JSON bodies

app.use("/", formDatarouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
