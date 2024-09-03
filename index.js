const express = require("express");
const path = require("path");
const routes = require("./Routes/routes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5005;
const drtPath = path.join(__dirname, "/Views");

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.set("view engine", "ejs");
app.set("Views", drtPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(drtPath));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Your Server Is Running On http://localhost:${PORT}`);
});
