const filterData = (data) => {
  const newData = [];
  if (!data.items) { return newData; }

  data.items.forEach((item, i) => {
    const { volumeInfo } = item;
    newData[i] = {
      title: volumeInfo.title,
      authors: volumeInfo.authors[0],
      imageLink: volumeInfo.imageLinks.thumbnail,
      infoLink: volumeInfo.infoLink,
      description: volumeInfo.description,
    };
  });

  return newData;
};

module.exports = filterData;
