//1. create DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
//2.get element by class name
var divEl = document.getElementsByClassName("add-items");
console.log(divEl);
//3.append element- 1. създавме елемент, слага ме му текст. 2. взимаме елемента, в който да добавим новия елемент 3. апендваме го
divEl[0].append(paragraph);
//remove element
var spanEl = document.getElementsByTagName("span")[0];
spanEl.remove();
//add eventListener on keyboard press
document.addEventListener("keypress", function (event) {
});
// аdd and remove list items (dynamic lists)
var inputEl = document.querySelector("#itemInput"); // само ако сме сигурни, че елемента го има
var buttonEl = document.querySelector("#addButton");
var uLEl = document.querySelector("#list");
paragraph.remove();
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = inputEl.value;
    if (listItemValue !== "" && listItemValue !== " ") {
        listItem.textContent = listItemValue;
        uLEl.append(listItem);
        //clear input value after adding it to the list
        inputEl.value = "";
        inputEl.focus();
        var delButn = document.createElement("button");
        delButn.textContent = "Delete";
        listItem.append(delButn);
        delButn.style.margin = "5px";
        delButn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
buttonEl.addEventListener("click", function () { return addListItem(); });
inputEl.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addListItem();
    }
});
