// DOM Manipulation:
document.body.append("Appended string.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

pagetitle.innerHTML = "<pre>Document Object Model: DOM</pre>";

// 2. element.innerText
// Rendering text content of a node and its descendants.

pagetitle.innerText = "DOCUMENT OBJECT MODEL".toLowerCase();

// 3. element.style
// Modifying the style of HTML elements

pagetitle.style.height = "2rem";
pagetitle.style.color = "red";

// 4. getElementById
// refer to the example above (line 4)


// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

const spans = document.getElementsByTagName("span");
// spans[0].innerText = "properties of the DOM";
// spans[1].innerText = "methods of the DOM";

const spanInputs = ["Properties of the DOM.", "Methods of the DOM."];

// Using getElementsByTagName method, search for elements that match a tag's index

for (let index = 0; index < spans.length; index++) {
    spans[index].style.display = "block";
    spans[index].style.fontWeight = "bold";
    spans[index].innerText = spanInputs[index];
}

// 6. createElement
// Adding a new HTML element in JavaScript.

const paragraph = document.createElement("p");
paragraph.innerText = "Appended Paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the first instance of h2 tag and adding an innerText

// * h1 - querySelector recognizes a tag
// * . - querySelector recognizes a class
// * # - querySelector recognizes an ID
// * input[type="type_name"] - querySelector recognizes the input(s)

const header2 = document.querySelector("h2");
header2.innerText = "Header 2 - tag selector";

const header3 = document.querySelector(".header3");
header3.innerText = "Header 3 - class selector";

const header4 = document.querySelector("#header4");
header4.innerText = "Header 4 - ID selector";

const inputTxt = document.querySelector(`input[type="text"]`);
inputTxt.value = "Input - input selector";

// Using querySelectorAll method, search for elements that match a tag's class

const updateListItems = document.querySelectorAll(".menuItem");

// Create a horizontal menu
// Each menu item to be a link with specific styles
const ulMenuBar = document.querySelector("ul");
ulMenuBar.classList.add("d-flex", "py-4");
ulMenuBar.setAttribute("name", "menubar");

const menuTitles = ["Home", "About", "Product", "Contact"];

menuTitles.forEach((title, index) => {

    // create a list item to append (as a child) to the unordered list
    const listItem = document.createElement("li");
    listItem.setAttribute("name", `nav-menu-item`);
    listItem.setAttribute("key", `nav-menu-item-${index + 1}`);
    listItem.classList.add("mx-auto", "list-unstyled");
    ulMenuBar.appendChild(listItem);

    // create an anchor tag to insert into each list item
    const anchor = document.createElement("a");
    anchor.innerText = title;
    anchor.setAttribute("name", `navlink`);
    anchor.setAttribute("href", "#");
    anchor.classList.add("btn", "btn-primary");

    listItem.appendChild(anchor);

});

// Learn to target the name of an element
const navElement = document.getElementsByName("menubar");
navElement[0].classList.add("bg-dark");

const navmenuElements = document.getElementsByName("nav-menu-item");

for (let index = 0; index < navmenuElements.length; index++) {
    const element = navmenuElements[index];
    element.classList.add("border", "rounded", "border-2");
}


// 8. element.append()
// Adding a new HTML element inside an existing element.

const headerTwoGreeting = document.createElement("h2");
headerTwoGreeting.innerText = "Welcome to the world of JavaScript";

// append does not return the object after appending
// const amendTitle = document.body.append(headerTwoGreeting);
// console.log("amendTitle: ", amendTitle);

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

const amendTitle = document.body.appendChild(headerTwoGreeting);
console.log("amendTitle: ", amendTitle);
amendTitle.innerText = "Welcome to the world of JavaScript and CSS";


// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
