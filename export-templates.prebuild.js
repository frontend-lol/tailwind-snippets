// move files from ./data/templates to ./public/templates

const fs = require("fs-extra");
const path = require("path");

const src = path.join(__dirname, "data", "templates");
const dest = path.join(__dirname, "public", "templates");

fs.copy(src, dest, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});
