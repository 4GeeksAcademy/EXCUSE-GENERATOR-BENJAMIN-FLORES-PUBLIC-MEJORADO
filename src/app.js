import "./style.css";

window.onload = () => {
  let generateExcuse = () => {
    let pronoun = ["A", "The"];
    let subject = ["dog", "racoon", "turtle", "bird", "comedian"];
    let action = ["took my", "threw my", "stole my"];
    let possetion = ["homework", "toe", "car", "show"];
    let where = ["on the street", "in my house", "in my driveway"];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = Math.floor(Math.random() * subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    return (
      pronoun[pronounIndex] +
      " " +
      subject[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      possetion[possetionIndex] +
      " " +
      where[whereIndex]
    );
  };
  document.querySelector("#BTN").addEventListener("click", () => {
    //Excusa random
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};