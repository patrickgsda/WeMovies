// Menu
const btnGroup = document.querySelector(".btn-group-vertical");
btnGroup.classList.remove("btn-group-vertical");

// Header
const jumbotron = document.querySelector(".jumbotron");
jumbotron.style.textAlign = "right";
jumbotron.style.backgroundColor = "#6c757d";
jumbotron.style.color = "white";

const buttonLearnMore = document.querySelector(".btn-primary");
buttonLearnMore.classList.remove("btn-primary");
buttonLearnMore.classList.add("btn-success");

// Cards
const btnAnimals = document.querySelector(".col-lg-3 .btn");
btnAnimals.classList.remove("btn-primary");
btnAnimals.classList.add("btn-success");

const rows = [].slice.call(document.querySelectorAll(".row"));
const rowCards = rows[2];
const cards = [].slice.call(document.querySelectorAll(".col-lg-3"));
cards.forEach((card) => rowCards.removeChild(card));
rowCards.appendChild(cards[3]);
rowCards.appendChild(cards[0]);
rowCards.appendChild(cards[2]);
rowCards.appendChild(cards[1]);

// List
const list = document.querySelector(".list-group");

const firstItem = document.querySelector(".list-group-item.active");
firstItem.classList.remove("active");

const fourthItem = document.createElement("li");
fourthItem.classList.add("list-group-item", "active");
fourthItem.textContent = "Quarto item";
list.appendChild(fourthItem);

const fifthItem = document.createElement("li");
fifthItem.classList.add("list-group-item");
fifthItem.textContent = "Quinto item";
list.appendChild(fifthItem);
