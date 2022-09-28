const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, (err) => {
  if (err) console.log(`error listening to port : ${PORT}`, err);
  console.log(`sucessfully listening to PORT:${PORT}`);
});
