const router = require("express").Router();
const Workout = require("../../models/workout");

// Get all workouts from the database
router.get("/", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Create a workout
router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then((data) => {
      res.status(200).json({ message: "Workout created", data });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Update a workout
router.put("/:id", ({ body, params }, res) => {
  Workout.updateOne({_id: params.id}, body)
    .then((data) => {
      res.status(200).json({ message: "Workout updated", data });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Gets workouts within a range
router.get("/range", (req, res) => {});

module.exports = router;
