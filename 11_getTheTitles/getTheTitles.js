const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];


const getTheTitles = function() {
    return books.map(titles=> titles.title)
};

console.log(getTheTitles());

// Do not edit below this line
module.exports = getTheTitles;
