//1. create DOM element
const paragraph:HTMLParagraphElement=document.createElement("p");
paragraph.textContent="This is our created paragraph";

//2.get element by class name
const divEl:HTMLCollectionOf<Element>=document.getElementsByClassName("add-items");
console.log(divEl)

//3.append element- 1. създавме елемент, слага ме му текст. 2. взимаме елемента, в който да добавим новия елемент 3. апендваме го
 divEl[0].append(paragraph)

 //remove element
 const spanEl:HTMLSpanElement=document.getElementsByTagName("span")[0];
 spanEl.remove();

 //add eventListener on keyboard press
  document.addEventListener("keypress", (event)=>{
  })

// аdd and remove list items (dynamic lists)
const inputEl =document.querySelector("#itemInput") as HTMLInputElement// само ако сме сигурни, че елемента го има
const buttonEl=document.querySelector("#addButton") as HTMLButtonElement
const uLEl=document.querySelector("#list") as HTMLUListElement


paragraph.remove()

function addListItem(){
    const listItem:HTMLLIElement=document.createElement("li")
    const listItemValue:string|number=inputEl.value

    if(listItemValue!=="" && listItemValue!==" "){
        listItem.textContent=listItemValue
        uLEl.append(listItem);

        //clear input value after adding it to the list
    inputEl.value="";
    inputEl.focus();

    const delButn:HTMLButtonElement=document.createElement("button");
    delButn.textContent="Delete";
    listItem.append(delButn);
    delButn.style.margin="5px"

    delButn.addEventListener("click", ()=>{
        listItem.remove()
    })
    }

}

buttonEl.addEventListener("click", ()=>addListItem())
inputEl.addEventListener("keypress", (event)=>{
    if(event.key=="Enter"){
        addListItem()
    }
}

)


 
