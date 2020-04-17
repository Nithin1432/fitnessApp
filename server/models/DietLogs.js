const dietLogs = [
  {
    id: 1,
    user: 1,
    food: "Whey Protein",
    count: 1,
    calories: 500,
    description: "Protein is the necessary item",
  },
  {
    id: 2,
    user: 1,
    food: "Soya Snacks",
    count: 2,
    calories: 220,
    description: "Carbohydrates is the second things required",
  },
];
const getDietLogs = () => {
  return dietLogs;
};
const getExerciseLogDetails = (exercise) => {
  let index = dietLogs.findIndex((obj) => obj.id === exercise);
  if (index != -1) {
    return dietLogs[index];
  }
  return null;
};
const addDietLogs = (exercise) => {
  dietLogs.push(exercise);  
  return true;
};

const deleteDietLogs = (post) => {
  dietLogs = dietLogs.filter((obj) => obj.id === post);
  return true;
};
module.exports = {
  dietLogs,
  getDietLogs,
  getExerciseLogDetails,
  addDietLogs,
  deleteDietLogs,
};
