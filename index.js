function dwarfRollCall(dwarves) {
  var withNumbers = [];
  for(var x = 0; x < dwarves.length; x++){
    withNumbers.push((x+1) + '. ' + dwarves[x]);
    var dwarfList = withNumbers.join(' ');
  }
  return dwarfList + ' ';
  }

function summonCaptainPlanet(planeteerCalls){
  var newArr = [];
  for(var x = 0; x < planeteerCalls.length; x++) {
    newArr.push(planeteerCalls[x].toUpperCase() + '!')
  }
  return newArr;
}

function longPlaneteerCalls(words) {
  for(var x = 0; x < words.length; x++) {
    if(words[x].length >= 5) {
      return true;
    }
    else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  for(var x = 0; x < foods.length; x++) {
    if (foods[x] === 'cheddar') {
    var result = foods[x];
    break;
    }
    else {
      var result = 'no cheese!';
    }
  }
  return result;
}
