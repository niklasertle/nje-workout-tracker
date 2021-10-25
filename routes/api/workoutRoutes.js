const router = require("express").Router();
const { Workout } = require("../../models");

// Get all workouts from the database
router.get("/", (req, res) => {
  Workout.find({})
    .then((data) => {
      data.forEach(workout => {
        let totalDuration = 0;

        workout.exercises.forEach(exercise => {
          totalDuration += exercise.duration;
        })

        workout.totalDuration = totalDuration
      });
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
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Update a workout
router.put("/:id", ({ body, params }, res) => {
  Workout.updateOne({_id: params.id}, {$push: {exercises: body}})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Gets workouts within a range
router.get("/range", (req, res) => {
  Workout.find({})
    .then((data) => {
      data.forEach(workout => {
        let totalDuration = 0;

        workout.exercises.forEach(exercise => {
          totalDuration += exercise.duration;
        })

        workout.totalDuration = totalDuration
      });

      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
