import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello asdfasfsa" });
});

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
