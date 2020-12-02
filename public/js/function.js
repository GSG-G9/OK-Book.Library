/* eslint-disable no-restricted-syntax */

const mapObj = (obj, callback) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      callback(key, obj[key]);
    }
  }
};

const createElement = (tagName) => document.createElement(tagName);

const createElementsObj = (obj) => {
  const elementObj = {};
  mapObj(obj, (key, value) => { elementObj[key] = createElement(value); });
  return elementObj;
};

const appendNodes = (elementsObj, obj) => {
  mapObj(obj, (key, value) => {
    value.forEach((node) => {
      elementsObj[key].appendChild(elementsObj[node]);
    });
  });
};

const setClasses = (elementsObj, obj) => {
  mapObj(obj, (key, value) => { elementsObj[key].classList.add(value); });
};

const setTextContents = (elementsObj, obj) => {
  // eslint-disable-next-line no-param-reassign
  mapObj(obj, (key, value) => { elementsObj[key].textContent = value; });
};
