import express, { json } from "express";
import { PORT } from "./config";

const app = express();

app.use(json());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.status(200).json({ message: "all good" });
});

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
