const express = require("express");
const router = express.Router();
const Focus = require("./../models/focus");

router.post("/addNewFocusBehaviour", async (req, res, next) => {
  const focus = new Focus();
  focus.type = req.body.type;
  focus.userId = req.body.userId;
  focus
    .save()
    .then((result) => {
      res.status(201).json({
        Message: "Data added successfully !",
        Data: {
          type: focus.type,
          userId: focus.userId,
          createdAt: focus.createdAt,
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
  const focus = await Focus.find().sort({
    createdAt: "desc",
  });
  res.status(200).json(focus);
});

router.get("/:userId", async (req, res) => {
  // to do add check if user exists
  const focus = await Focus.find({ userId: req.params.userId });
  res.status(200).json(focus);
});

module.exports = router;
