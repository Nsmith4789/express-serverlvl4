import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome To Express Server");
});

app.get /
  ("/about",
  (req, res) => {
    res.send("This page is About BMWs");
  });

app.post("/data", (req, res) => {
  res.type("json");
  res.send(`{
      "make": "BMW",
      "Model": 545i
      "HorsePower": 425HP
      "Price": 97,000
    }`);
});

app.listen(3000, () => {
  console.log("server started on http://localhost:3000");
});
