//1.Change the text of the h1 tag.
var headerText = document.getElementById("title");
if (headerText) {
    headerText.textContent = "Welcome to TypeScript DOM Manipulation Homework";
}
//2.Change the color of the paragraph inside div.content.
var paragraphEl = document.querySelector(".content p");
if (paragraphEl) {
    paragraphEl.style.color = "red";
}
//3.Change the list items textContent for example to be list of fruits.
var liElements = document.querySelectorAll("li");
liElements[0].textContent = "Banana";
liElements[1].textContent = "Apple";
liElements[2].textContent = "Orange";
//4.Add a button and apply border style "1px solid red" to it.
var button = document.getElementById("contactUSbtn");
if (button) {
    button.style.border = "1px solid red";
}
