function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);

  }
}

function unshelfBook(name, shelf) {
  const bookByName = (book) => book.title == name;
  var bookIndex = shelf.findIndex(bookByName);
  shelf.splice(bookIndex, 1);
}

function listTitles(shelf) {
  let titlesArr = [];
  for (let i = 0; i < shelf.length; i++) {
    titlesArr.push(shelf[i].title);
  }
  return titlesArr.join(', ');
}

function searchShelf(shelf, title) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
  }
  return titles.includes(title);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
