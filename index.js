const express = require("express");
const res = require("express/lib/response");

const app = express();

app.get("/books", allBooks, (req, res) => {
  try {
    return res.send("All books");
  } catch (e) {
    console.log(e.message);
  }
});

app.get("/books/:name", singleBook, (req, res) => {
  try {
    return res.send({ bookName: req.name });
  } catch (e) {
    console.log(e.message);
  }
});
function singleBook(req, res, next) {
  req.name = req.params.name;
  next();
}

function allBooks(req, res, next) {
  console.log("Fetching all books");
  next();
}

app.listen(3452, () => {
  console.log("3452 port");
});
