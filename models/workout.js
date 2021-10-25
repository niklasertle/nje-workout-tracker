const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
      },
      distance: Number,
      weight: Number,
      sets: Number,
      reps: Number,
      date: {
        type: Date,
        default: Date.now,
      },
    }
  ],
  totalDuration: {
    type: Number,
    default: 0
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
