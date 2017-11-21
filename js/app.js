// declarar un array que representara los asientos de nuestro avion con false indicando que estos estan vacios
var airlineSeats = [false, false, false, false, false, false, false, false, false, false];
// contador que nos ayudara arastrear el nro de asientos ocupados
var butySeats = 0;
var paintSeats = function(array) {
  var containerSeats = document.getElementById('seats');
  for (var i = 0; i < array.length; i++) {
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
var reserve = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};
var chooseZone = function() {
  debugger;
  var choice = prompt('En que zona prefieres resrvar \n 1. Primera Clase \n 2. Clase Economica \n \n Por ingrese el numero de tu preferencia');
  if (choice = 1) {
    checkFirstClassZone();
  } else if (choice = 2) {
    checkEconomicZone();
  } else {
    alert('por favor ingrese un numero valido');
  }
};
var checkFirstClassZone = function() {
  var zone = 'Primera Clase';
  for (var i = 0; i < 4; i++) {
    if (airlineSeats[i] === false) {
      airlineSeats[i] = true;
      reserveSeats(i);
      paintTicket(i, zone);
      butySeats++;
      // al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo rompemos el ciclo for con break
      break;
    } else if (i === 3 && airlineSeats[i] === true) {
      reasingEconomicZone(zone);
    }
  }
};
var checkEconomicZone = function() {
  var zone = 'Economica';
  for (var i = 4; i < 10; i++) {
    if (airlineSeats[i] === false) {
      airlineSeats[i] = true;
      reserveSeats(i);
      paintTicket(i, zone);
      butySeats++;
      // al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo rompemos el ciclo for con break
      break;
    } else if (i === 9 && airlineSeats[i] === true) {
      reasingFirstClassZone(zone);
    }
  }
};
var reserveSeats = function(indexToPoint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPoint].textContent = 'Ocupado';
};
reasingEconomicZone = function(zone) {
  if (butySeats === 10) {
    noSeats();
    nextFlight();
  } else {
    var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':( \n Quieres reservar en zona  Economica?');
    if (reasing === true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};
reasingFirstClassZone = function(zone) {
  if (butySeats === 10) {
    noSeats();
    nextFlight();
  } else {
    var reasing = confirm('Ya no quedan asientos disponibles en ' + zone + ':( \n Quieres reservar en Primera clase?');
    if (reasing === true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};
var paintTicket = function(index, zone) {
  var containerTickets = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'seats';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE A ABORDAR';
  reservedSeating.textContent = 'N° de asientos : ' + (index + 1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};
var nextFlight = function() {
  alert('Nuestro proximo vuelo sale en 3 horas');
};
var noSeats = function() {
  alert('Ya no quedan asientos disponibles en este avion.');
};
paintSeats(airlineSeats);
reserve();
