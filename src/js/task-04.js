let counterValue = 0;
const counter = document.querySelector('#counter');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
const valueElement = counter.querySelector('#value');
function updateCounter() {
    valueElement.textContent = counterValue;
}
decrementButton.addEventListener('click', function() {
    counterValue--;
    updateCounter();
});
incrementButton.addEventListener('click', function() {
    counterValue++;
    updateCounter();
});
updateCounter();