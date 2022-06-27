console.log("It works...");
let btn = document.getElementById('clickBtn');

let width, height, area, local;

width = 4;
height = 5;
local = 5;

area = (2 + 4) * 10; // 60

document.getElementById('demo').innerHTML = area;




// Arrays
let cars = new Array(
     'BMW',
     'Tesla',
     'Honda',
     'Toyota',
     'Range Rover',
     'Acura',
     'Audi',
     'Ford'
);

function displCars() {
     let randomCar = document.querySelector('#displayCars');
     randomCar.textContent = cars[Math.floor((Math.random() * cars.length))].toUpperCase();
}

btn.addEventListener('click', displCars);



// Function and Methods ( Page: #90 )
function getArea(width, height) {
    return width * height; 
}

// getArea(3, 5);

let wallOne = getArea(3, 7); // 21
let el = document.getElementById('message1');
el.textContent = wallOne;
let wallTwo = getArea(6, 5); // 30
let el2 = document.getElementById('message2');
el2.textContent = wallTwo;




