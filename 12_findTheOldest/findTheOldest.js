const members = [
  {
    name: "Carly",
    yearOfBirth: 2018,
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
  },
];

function checkOlder(first, second) {
  return (
    first.yearOfDeath - first.yearOfBirth >
    second.yearOfDeath - second.yearOfBirth
  );
}

const findTheOldest = function (people) {
  let oldest = null;
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    if (oldest === null || checkOlder(person, oldest)) {
      oldest = person;
    }
  }
  return oldest
};
// Do not edit below this line
module.exports = findTheOldest;
