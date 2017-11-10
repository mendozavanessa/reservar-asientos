// declarar un array que representara los asientos de nuestro avion con false indicando que estos estan vacios
var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
// contador que nos ayudara arastrear el nro de asientos ocupados var butySeats = 0;
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  for (var i = 0; i < array.lenght; i++) {
    debugger;
    var seat = document.createElement('div');
    seat.className = 'seats';
    // del primer elemento al cuarto, en nuestro arreglo va ser  Primera clase
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }
};
paintSeats(airlineSeats);
