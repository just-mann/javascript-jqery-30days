console.log('It works...');
// let total = document.getElementById('day3demo');
let button = document.querySelector('button');

var hotel = {
     name: 'Quay',
     rooms: 40,
     booked: 25,
     gym: true,
     roomsType: ['twin', 'double', 'suite'],
     checkAvailability: function() {
          return this.room - this.booked;
          // return total;
     }
};
console.log(hotel.checkAvailability);



// button.addEventListener('click', checkAvai);

