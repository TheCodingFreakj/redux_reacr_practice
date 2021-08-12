const express = require("express");
const mongoose = require("mongoose");
// const path = require('path');

const app = express();
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://pallavi57:pallavi57@cluster0.joavu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
connectDB();
// Connect Database
// connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
 app.use("/api/users", require("./routes/api/users"));
 app.use("/api/auth", require("./routes/api/auth"));


app.get("/", (req, res) => res.send("Api Running"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
