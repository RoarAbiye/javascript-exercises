const removeFromArray = function(theArray, itemToBeRemoved) {
  return theArray.filter((item) => {
    return item !== itemToBeRemoved
  })
};
console.log(removeFromArray([1,2,3], 2))
// Do not edit below this line
module.exports = removeFromArray;
