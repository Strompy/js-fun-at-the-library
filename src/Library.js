function createLibrary(name) {
  return {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  let success;
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      library.shelves[genre].splice(i, 1)
      success = `You have now checked out ${title} from the ${library.name}`
    }
  }
  if (success) {
    return success;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
