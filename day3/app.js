console.log('It works...');
// let total = document.getElementById('day3demo');
let button = document.querySelector('button');

var hotel = {
     name: 'Quay', // The name of this hotel
     rooms: 40, // Total Number of Rooms in the 'Quay' hotel
     booked: 25, // Rooms booked out of the total number of rooms ()
     gym: true, // This hotel has a gym
     roomsType: ['twin', 'double', 'suite'],
     checkAvailability: function() { // Calculating the number of rooms available
          return this.room - this.booked; 
          // return total;
     }
};

console.log(hotel.checkAvailability);

// button.addEventListener('click', checkAvai);

