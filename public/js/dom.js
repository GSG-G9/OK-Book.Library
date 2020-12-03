const createCard = (obj) => {
  const elementsObj = createElementsObj({
    link: 'a',
    bookCard: 'div',
    bookContent: 'div',
    imageCard: 'img',
    cardContent: 'div',
    bookName: 'div',
    bookBy: 'div',
    bookDes: 'div',
  });

  appendNodes(elementsObj, {
    link: ['bookCard'],
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
  elementsObj.link.setAttribute('href', obj.infoLink);
  return elementsObj.link;
};

const clearCards = () => {
  const bookCards = document.querySelector('.book-cards');
  const popularBooks = document.querySelector('.popular-books');
  popularBooks.removeChild(bookCards);

  const newBookCards = document.createElement('div');
  newBookCards.classList.add('book-cards');
  popularBooks.appendChild(newBookCards);
};

const fetchData = (input = 'communication') => {
  fetch(`/api/v1/search?q=${input}`)
    .then((data) => data.json())
    .then((data) => {
      clearCards();
      const bookCards = document.querySelector('.book-cards');
      if (data.length === 0) {
        bookCards.textContent = 'Book not found';
      }
      data.forEach((book) => {
        bookCards.appendChild(createCard(book));
      });
    });
};
