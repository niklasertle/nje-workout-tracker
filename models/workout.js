const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a workout name",
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  distance: Number,
  weight: Number,
  sets: Number,
  reps: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
