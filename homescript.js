modeChange = document.getElementsByClassName(".changemode");
// function changeMode() {
//   console.log("hi im breing called");
//   modeChange.classList.toggle(".mydark");
// }
const changeMode = () => {
  let mybody = document.body;
  mybody.classList.toggle("mydark");
};
