// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var addBorderBtnEl = document.querySelector("#add-border-btn");
var sectionElement = document.querySelector(".content");
function resetStyles() {
    sectionElement.style.border = "none",
        sectionElement.style.color = "initial",
        sectionElement.style.background = "initial";
}
addBorderBtnEl.addEventListener("click", function () {
    resetStyles();
    sectionElement.style.border = "2px solid red";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var changeTxtBut = document.querySelector("#change-text-btn");
changeTxtBut.addEventListener("click", function () {
    resetStyles();
    sectionElement.style.color = "blue";
});
// Add event listener when button with id "toggle-bg-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
var toogleTxtBut = document.querySelector("#toggle-bg-btn");
toogleTxtBut.addEventListener("click", function () {
    resetStyles();
    sectionElement.style.background = "gray";
});
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
sectionElement.addEventListener("mouseover", function () {
    sectionElement.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
});
