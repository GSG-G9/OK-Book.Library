document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    fetch(`/api/v1/search/${e.currentTarget.value.toLowerCase().trim()}`)
      .then((data) => data.json())
      .then((data) => {
        clearCards();
        const bookCards = document.querySelector('.book-cards');
        console.log(data);
        if (data.length === 0) {
          bookCards.textContent = 'Book not found';
        }
        data.forEach((book) => {
          bookCards.appendChild(createCard(book));
        });
      });
  }
});
