const getTheTitles = function (books) {
  //loop throgh the object list of books
  //add to each book to array by selecting title
  //return array
  let result = [];
  books.forEach((book) => result.push(book.title));
  return result;
};
// Do not edit below this line
module.exports = getTheTitles;
