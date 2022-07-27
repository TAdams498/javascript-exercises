const findTheOldest = function(people) {
  const sorted = people.sort(function(a, b) {
    let aDeathYear;
    let bDeathYear;
    if (!a.yearOfDeath) {
      aDeathYear = new Date().getFullYear();
    }
    else {
      aDeathYear = a.yearOfDeath;
    }
    if (!b.yearOfDeath) {
      bDeathYear = new Date().getFullYear();
    }
    else {
      bDeathYear = b.yearOfDeath;
    }
    return (aDeathYear - a.yearOfBirth) < (bDeathYear - b.yearOfBirth) ? 1 : -1;
  });
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
/*const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  }
*/
