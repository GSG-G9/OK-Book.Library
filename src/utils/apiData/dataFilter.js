const filterData = (data) => {
  const newData = [];
  if (!data.items) { return newData; }

  data.items.forEach((item, i) => {
    const { volumeInfo } = item;
    newData[i] = {
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      imageLinks: volumeInfo.imageLinks,
      infoLink: volumeInfo.infoLink,
    };
  });

  return newData;
};

module.exports = filterData;
