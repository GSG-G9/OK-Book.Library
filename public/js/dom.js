const createCard = (obj) => {
  const elementsObj = createElementsObj({
    bookCard: 'div',
    bookContent: 'div',
    imageCard: 'img',
    cardContent: 'div',
    bookName: 'div',
    bookBy: 'div',
    bookDes: 'div',
  });

  appendNodes(elementsObj, {
    bookCard: ['bookContent'],
    bookContent: ['imageCard', 'cardContent'],
    cardContent: ['bookName', 'bookBy', 'bookDes'],
  });

  setClasses(elementsObj, {
    bookCard: 'book-card',
    bookContent: 'content-wrapper',
    imageCard: 'book-card-img',
    cardContent: 'card-content',
    bookName: 'book-name',
    bookBy: 'book-by',
    bookDes: 'book-sum',
    // eslint-disable-next-line no-dupe-keys
    bookDes: 'card-sum',

  });

  setTextContents(elementsObj, {
    bookName: obj.title,
    bookBy: (obj.authors) ? `by ${obj.authors[0]}` : 'unknown authors',
    bookDes: (obj.description) ? `${obj.description.substr(0, 250)} ...` : 'no description',
  });

  elementsObj.imageCard.src = obj.imageLink;
  elementsObj.bookCard.herf = obj.infoLink;
  return elementsObj.bookCard;
};

const clearCards = () => {
  const bookCards = document.querySelector('.book-cards');
  const popularBooks = document.querySelector('.popular-books');
  popularBooks.removeChild(bookCards);

  const newBookCards = document.createElement('div');
  newBookCards.classList.add('book-cards');
  popularBooks.appendChild(newBookCards);
};
