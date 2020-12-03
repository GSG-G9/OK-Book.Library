// onstart
(() => {
  fetchData();
  document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const input = e.currentTarget.value.toLowerCase().trim();
      if (input) {
        fetchData(input);
      }
    }
  });
})();
