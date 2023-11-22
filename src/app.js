import "./style.css";

// window.onload = () => {
//   let generateExcuse = () => {
//     let pronoun = ["A", "The"];
//     let subject = ["dog", "racoon", "turtle", "bird", "comedian"];
//     let action = ["took my", "threw my", "stole my"];
//     let possetion = ["homework", "toe", "car", "shoe"];
//     let where = ["on the street", "in my house", "in my driveway"];

//     let pronounIndex = Math.floor(Math.random() * pronoun.length);
//     let subjectIndex = Math.floor(Math.random() * subject.length);
//     let actionIndex = Math.floor(Math.random() * action.length);
//     let possetionIndex = Math.floor(Math.random() * possetion.length);
//     let whereIndex = Math.floor(Math.random() * where.length);

//     return (
//       pronoun[pronounIndex] +
//       " " +
//       subject[subjectIndex] +
//       " " +
//       action[actionIndex] +
//       " " +
//       possetion[possetionIndex] +
//       " " +
//       where[whereIndex]
//     );
//   };
//   document.querySelector("#BTN").addEventListener("click", () => {
//     document.querySelector("#the-excuse").innerHTML = generateExcuse();
//   });
// };

const pronoun = ["A", "The"];
const subject = ["dog", "racoon", "turtle", "bird", "comedian"];
const action = ["took my", "threw my", "stole my"];
const possetion = ["homework", "toe", "car", "shoe"];
const where = ["on the street", "in my house", "in my driveway"];

const generateExcuse = () => {
  const pronounIndx = Math.floor(Math.random() * pronoun.length);
  const subjectIndx = Math.floor(Math.random() * subject.length);
  const actionIndx = Math.floor(Math.random() * action.length);
  const possetionIndx = Math.floor(Math.random() * possetion.length);
  const whereIndx = Math.floor(Math.random() * where.length);

  return `${pronoun[pronounIndx]} ${subject[subjectIndx]} ${action[actionIndx]} ${possetion[possetionIndx]} ${where[whereIndx]}`;
};

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
});
