import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
  
});

app.post("/submit", (req, res) => {
  // const list = req.body["newList"];
  let list = [];
  list.push(req.body["newList"]);
  res.render("index.ejs", {
    list
  })
  console.log(list);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
