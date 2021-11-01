function selectAndStrikeThrough() {
  const listItem = document.querySelector("li");
  console.log(listItem);
  listItem.style.textDecoration = "line-through";
}
selectAndStrikeThrough();

function setImage(id, url) {
  const image = document.querySelector(id);
  image.style.height = "250px";
  image.src = url;
}

setImage(
  "#image-1",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Fgallery%2Fthe-most-beautiful-forests-in-the-world&psig=AOvVaw0Pb8LiqbB7zM5ETBF_lLXY&ust=1635828940036000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiW-uiv9vMCFQAAAAAdAAAAABAF"
);
setImage(
  "#image-2",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Fgallery%2Fthe-most-beautiful-forests-in-the-world&psig=AOvVaw0Pb8LiqbB7zM5ETBF_lLXY&ust=1635828940036000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiW-uiv9vMCFQAAAAAdAAAAABAF"
);
setImage(
  "#image-3",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Fgallery%2Fthe-most-beautiful-forests-in-the-world&psig=AOvVaw0Pb8LiqbB7zM5ETBF_lLXY&ust=1635828940036000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiW-uiv9vMCFQAAAAAdAAAAABAF"
);

function removeArgument() {
  const argument = document.querySelector("#arguments li");
  arguments.remove();
}
removeArgument();
removeArgument();

function changeIDFontSize(size, id) {
  const string = document.getElementById(id);
  string.style.fontSize = size;
}

changeIDFontSize("12px", "title");

function addToArguments(domElement) {
  const argumentsU1 = document.querySelector("#arguments");
  argumentsU1.appendChild(domElement);
}

const newElement = document.createElement("li");
newElement.innerText = "hello world";
addToArguments(newElement);

function changeImageSize(imageSize, id) {
  const element = document.getElementById(id);
  element.style.height = `${imageSize}px`;
}
changeImageSize(30, "image-1");
changeImageSize(30, "image-2");
changeImageSize(30, "image-3");

function makeElementInvisible(element) {
  element.className = "invisible";
}

const h1 = document.querySelector("h1");
makeElementInvisible(h1);

function makeLi(text) {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
}

const newLi = makeLi("I am a new LI");
addToArguments(newLi);

function makeHeader(headerSize, text) {
  const tagName = "h" + headerSize;
  const header = document.createElement(tagName);
  header.innerText = text;
  return header;
}

const newHeader = makeHeader(5, "this is our new header");
addToArguments(newHeader);
