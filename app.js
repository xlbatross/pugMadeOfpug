const express = require(`express`); // express 모듈 요청
const fs = require(`fs`);

const app = express();

let rawNavData = fs.readFileSync(`./views/nav.json`);
let navData = JSON.parse(rawNavData);

app.set("view engine", "pug");
app.use(express.static(__dirname + `/`));

app.get("/", (req, res)=> {
  res.redirect("/api/getting-started");
});

app.get("/:category/:article", (req, res)=> {
  var category = req.params.category;
  var article = req.params.article;
  console.log(`/` + category + `/` + article + " load");
  res.render(category + `/` + article, { navData, article });
});

app.listen(3000, () => {
  console.log("running...");
});