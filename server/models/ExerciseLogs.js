const exerciseLogs = [
  {
    id: 1,
    user: 1,
    exercise: "Flat Barbell Bench Press",
    weight: 40,
    reps: 15,
    sets: [
      {
        set: 1,
        reps: 15,
        weight: "40 kg",
      },
      {
        set: 2,
        reps: 10,
        weight: "35 kg",
      },
      {
        set: 3,
        reps: 8,
        weight: "30 kg",
      },
    ],
    calories_burned: 50,
    description: "Chest buildup ",
  },
  {
    id: 2,
    user: 1,
    exercise: "Shoulder Press",
    weight: 120,
    reps: 20,
    sets: [
      {
        set: 1,
        reps: 20,
        weight: "80 kg",
      },
      {
        set: 2,
        reps: 15,
        weight: "100 kg",
      },
      {
        set: 3,
        reps: 12,
        weight: "120 kg",
      },
    ],
    calories_burned: 90,
    description: "Shoulder in shape ",
  },
];
const getExerciseLogs = () => {
  return exerciseLogs;
};
const getExerciseLogDetails = (exercise) => {
  let index = exerciseLogs.findIndex((obj) => obj.id === exercise);
  if (index != -1) {
    return exerciseLogs[index];
  }
  return null;
};
const addExerciseLogs = (exercise) => {
  exerciseLogs.push(exercise);
  return true;
};

const deleteExerciseLogs = (post) => {
  exerciseLogs = exerciseLogs.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  exerciseLogs,
  getExerciseLogs,
  getExerciseLogDetails,
  addExerciseLogs,
  deleteExerciseLogs,
};
