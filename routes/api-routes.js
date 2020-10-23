
const express = require("express");
const router = express.Router();

const db = require("../models");

// Find all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then((workouts) => {
      res.json(workouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workouts.",
      });
    });
});


module.exports = router;