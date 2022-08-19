// * Node elements
const containerNode = document.querySelector(".btn-container");
const counterContainerNode = document.querySelector(".counter-container");
const incrementBtnNode = document.querySelector(".btn-inc-counter");
const clearBtnNode = document.querySelector(".btn-clear-counter");

let counter = 0;

// * Functions
function render() {
  counterContainerNode.textContent = counter;
}

function increment() {
  counter++;
}

function clear() {
  counter = 0;
}

// * Event listners
incrementBtnNode.addEventListener("click", (event) => {
  increment();
  render();
});

clearBtnNode.addEventListener("click", (event) => {
  clear();
  render();
});

render();
