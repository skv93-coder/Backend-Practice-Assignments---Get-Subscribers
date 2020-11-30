const express = require("express");
const data = require("./data");
const dataa = require("./models/subscribers");
const app = express();
app.get("/subscribers", (req, res) => {
  const subcscribers = data.map((sub) => sub.response);
  // console.log(subcscribers);
  res.send(subcscribers);
});
app.get("/subscribers/names", (req, res) => {
  const subcscribers = data.map((sub) => sub.response);
  // console.log(subcscribers);
  res.send(data);
});
app.get("/subscribers/names", (req, res) => {
  const subcscribers = data.map((sub) => sub.response);
  // console.log(subcscribers);
  res.send(data);
});
// Your code goes here
app.get("/subscribers/:id", (req, res) => {
  const id = req.params.id;
  const subcscribers = dataa.findById(id, (error, response) => {
    console.log(error);
    if (error) {
      console.log(72478732);
      res.send({ message: error.message });
    } else {
      // const response = response.find((n) => n.id === id);
      console.log(response);
      if (response) {
        res.json(response);
      } else {
        res.sendStatus(400).send({ message: error.message });
      }
    }
  });
  // console.log(subcscribers);
});

module.exports = app;
