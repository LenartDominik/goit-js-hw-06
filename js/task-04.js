// Initialize counter value
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

// Define increment and decrement functions
const counterIncrement => {
  counterValue ++;
  valueElement.textContent = counterValue;
};

const counterDecrement() {
  counterValue --;
  valueElement.textContent = counterValue;
};

// Add click listeners to buttons
decrementButton.addEventListener("click", () => counterDecrement());
incrementButton.addEventListener("click", () => counterIncrement());
