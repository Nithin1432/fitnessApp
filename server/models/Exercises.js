const exercises = [
  {
    id: 1,
    name: "Oblique twist",
    video: "https://vimeo.com/178079508",
  },
  {
    id: 2,
    name: "Benchpress",
    video: "https://vimeo.com/178057019",
  },
  {
    id: 3,
    name: "Deadlift",
    video: "https://vimeo.com/178056325",
  },
  {
    id: 4,
    name: "Squat",
    video: "https://vimeo.com/178056008",
  },
  {
    id: 5,
    name: "Tricep pulldown",
    video: "https://vimeo.com/178054967",
  },
  {
    id: 6,
    name: "Pulley crunch",
    video: "https://vimeo.com/178052126",
  },
  {
    id: 7,
    name: "Floor crunch",
    video: "https://vimeo.com/178050912",
  },
  {
    id: 8,
    name: "Overhead tricep extension",
    video: "https://vimeo.com/178050262",
  },
  {
    id: 9,
    name: "Dumbbell press",
    video: "https://vimeo.com/178048727",
  },
  {
    id: 10,
    name: "Forearm curl back (15 reps)",
    video: "https://vimeo.com/178047269",
  },
  {
    id: 11,
    name: "Forearm curl in (15 reps)",
    video: "https://vimeo.com/178047269",
  },
  {
    id: 12,
    name: "Seated pulley row",
    video: "https://vimeo.com/178042607",
  },
  {
    id: 13,
    name: "Shrug",
    video: "https://vimeo.com/177971664",
  },
  {
    id: 14,
    name: "Calf raise",
    video: "https://vimeo.com/177971348",
  },
  {
    id: 15,
    name: "Dumbbell romanian deadlift",
    video: "https://vimeo.com/177971032",
  },
  {
    id: 16,
    name: "Forearm curl up (25 reps)",
    video: "https://vimeo.com/177970644",
  },
  {
    id: 17,
    name: "Dumbbell squat",
    video: "https://vimeo.com/177970342",
  },
  {
    id: 18,
    name: "Front raise",
    video: "https://vimeo.com/177969758",
  },
  {
    id: 19,
    name: "Julian tricep extension",
    video: "https://vimeo.com/177969524",
  },
  {
    id: 20,
    name: "Bicep curl",
    video: "https://vimeo.com/177968823",
  },
];

const getExercises = () => {
  return exercises;
};
const getExerciseDetails = (exercise) => {
  let index = exercises.findIndex((obj) => obj.id === exercise);
  if (index != -1) {
    return exercises[index];
  }
  return null;
};
const addExercise = (exercise) => {
  exercises.push(exercise);
  return true;
};

const deleteExercise = (post) => {
  exercises = exercises.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  exercises,
  getExercises,
  getExerciseDetails,
  addExercise,
  deleteExercise,
};
