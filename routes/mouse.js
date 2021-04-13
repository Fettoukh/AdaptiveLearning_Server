const express = require("express");
const router = express.Router();
const Mouse = require("./../models/mouse");

router.post("/addNewMouseBehaviour", async (req, res, next) => {
  const mouse = new Mouse();
  mouse.type = req.body.type;
  mouse.direction = req.body.direction;
  mouse.action = req.body.action;
  mouse.buttonClicked = req.body.buttonClicked;
  mouse.userId = req.body.userId;
  console.log(mouse);
  mouse
    .save()
    .then((result) => {
      res.status(201).json({
        Message: "Data added successfully !",
        Data: {
          type: mouse.type,
          direction: mouse.direction,
          action: mouse.action,
          buttonClicked: mouse.buttonClicked,
          userId: mouse.userId,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        Message: "Data not added !",
        error: err,
      });
    });
});

router.get("/getAll", async (req, res) => {
  const mouse = await Mouse.find().sort({
    createdAt: "desc",
  });
  res.status(200).json(mouse);
});

router.get("/:userId&:type", async (req, res) => {
  // to do add check if user exists
  const mouse = await Mouse.find({
    userId: req.params.userId,
    type: req.params.type,
  });
  res.status(200).json(mouse);
});

module.exports = router;
