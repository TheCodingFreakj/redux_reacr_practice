const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const userRoute = require("./server/routes/userRoute");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// var corsOptions = {
//   origin: "http://localhost:8081",
// };

app.use(cors());

// parse requests of content-type - application/json
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", userRoute);
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
