import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let list = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    list,
  });
});

app.post("/submit", (req, res) => {
  list.push(req.body["newList"]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
