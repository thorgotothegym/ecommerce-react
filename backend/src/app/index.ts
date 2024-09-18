import express, { json } from "express";
import { PORT } from "./config";
import usersRouter from "./routes/users";

const app = express();

app.use(json());
app.disable("x-powered-by");

app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
