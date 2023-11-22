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

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const generateExcuse = () => {
  const whoIndx = Math.floor(Math.random() * who.length);
  const actionIndx = Math.floor(Math.random() * action.length);
  const whatIndx = Math.floor(Math.random() * what.length);
  const whenIndx = Math.floor(Math.random() * when.length);

  return `${who[whoIndx]} ${action[actionIndx]} ${what[whatIndx]} ${when[whenIndx]}`;
};

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
});
