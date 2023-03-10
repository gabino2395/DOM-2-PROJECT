//LAZY section
const isIntersecting = (entry) => {
  return entry.isIntersecting; //true(dentro de la pantalla)
};

const loadImage = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  imagen.src = url;

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const registerImage = (imagen) => {
  observer.observe(imagen);
};

const maxinum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maxinum - minimum)) + minimum;

const createImageNode = () => {
  const container = document.createElement("div");
  container.className = "images";

  const imagen = document.createElement("img");
  imagen.classList = "img-fox";

  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(imagen);
  return container;
};

const deleteAll = () => {
  const imagesContainer = document.getElementById("images");
  imagesContainer.innerHTML = "";
  console.log("limpiar");
};
const nuevaImagen = createImageNode();

const addButton = document.querySelector("#agregar");
const deleteButton = document.getElementById("limpiar");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};
addButton.addEventListener("click", addImage);
deleteButton.addEventListener("click", deleteAll);
const mountNode = document.getElementById("images");
