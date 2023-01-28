const substractBtn = document.querySelector('.substract-btn');
const addBtn = document.querySelector('.add-btn');
const guests = document.querySelector('.guest-number');
const hourItem = document.querySelectorAll('.hour-item');
const days = document.querySelectorAll('td');

let number = guests.innerHTML;

addBtn.addEventListener('click', () => {
    if (number < 20) {
        number++;
        guests.innerHTML = number;
    }
});

substractBtn.addEventListener('click', () => {
    if (number > 0) {
        number--;
        guests.innerHTML = number;
    }
});

days.forEach(day => {
    if (day.children.length != 0) {
        day.addEventListener('click', () => {
            day.children[0].checked = true;
        });
    }
});

hourItem.forEach(hour => {
    hour.addEventListener('click', () => hour.children[0].checked = true);
});