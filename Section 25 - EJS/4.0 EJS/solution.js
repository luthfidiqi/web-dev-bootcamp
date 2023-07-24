import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  let name = "luthfi";

  let fruit = ["Orange", "Watermellon", "Apple", "Banana"];

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent:
      "<em>This is some em text</em>"
    };
  
  res.render("solution.ejs", {
    dayType: type,
    advice: adv,
    myName: name,
    isFruit: fruit,
    data
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
