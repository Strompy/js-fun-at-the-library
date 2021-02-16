class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    if (isMorning) {
      return `Good morning, ${patron}!`;
    } else {
    return `Hello, ${patron}!`;
    }
  }

  findBook(title) {
    for (var genre in this.library.shelves) {
      for (var i = 0; i < this.library.shelves[genre].length; i++) {
        if (this.library.shelves[genre][i].title === title) {
          this.library.shelves[genre].splice(i, 1);
          return `Yes, we have ${title}`;
        }
      }
    }
    return `Sorry, we do not have ${title}`
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * .25)
  }

}

module.exports = Librarian;
