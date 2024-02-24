const express = require("express");
const mongoose = require("mongoose");
const router = require("./route/index");
const bodyParser = require("body-parser");

const app = express();
//   bodypaser midleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// router
app.use("/", router);

let port = 5000;

app.get("*", (req, res) => {
  res.send("page not found");
});

app.listen(port, () => {
  mongoose
    .connect("mongodb://localhost:27017/blognode", {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connect");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`app is listen at ${port}`);
});
