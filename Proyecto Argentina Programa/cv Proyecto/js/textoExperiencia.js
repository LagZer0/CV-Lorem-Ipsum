// Obtener los elementos de la lista
const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");
const item3 = document.getElementById("item-3");
const item4 = document.getElementById("item-4");
const item5 = document.getElementById("item-5");

// Agregar cuadraditos blancos a los elementos de la lista
const whiteBox1 = document.createElement("div");
whiteBox1.classList.add("experiencia-box");
whiteBox1.innerHTML = item1.getAttribute("data-info");
whiteBox1.style.display = "none";
item1.appendChild(whiteBox1);

const whiteBox2 = document.createElement("div");
whiteBox2.classList.add("experiencia-box");
whiteBox2.innerHTML = item2.getAttribute("data-info");
whiteBox2.style.display = "none";
item2.appendChild(whiteBox2);

const whiteBox3 = document.createElement("div");
whiteBox3.classList.add("experiencia-box");
whiteBox3.innerHTML = item3.getAttribute("data-info");
whiteBox3.style.display = "none";
item3.appendChild(whiteBox3);

const whiteBox4 = document.createElement("div");
whiteBox4.classList.add("experiencia-box");
whiteBox4.innerHTML = item4.getAttribute("data-info");
whiteBox4.style.display = "none";
item4.appendChild(whiteBox4);

const whiteBox5 = document.createElement("div");
whiteBox5.classList.add("experiencia-box");
whiteBox5.innerHTML = item5.getAttribute("data-info");
whiteBox5.style.display = "none";
item5.appendChild(whiteBox5);

// Mostrar cuadraditos al hacer click en el elemento de la lista
item1.addEventListener("click", function() {
  whiteBox1.style.display = "block";
});

item2.addEventListener("click", function() {
  whiteBox2.style.display = "block";
});

item3.addEventListener("click", function() {
    whiteBox3.style.display = "block";
});

item4.addEventListener("click", function() {
    whiteBox4.style.display = "block";
});

item5.addEventListener("click", function() {
    whiteBox5.style.display = "block";
});

// Eliminar cuadraditos al sacar el mouse del elemento de la lista
item1.addEventListener("mouseout", function() {
  whiteBox1.style.display = "none";
});

item2.addEventListener("mouseout", function() {
  whiteBox2.style.display = "none";
});

item3.addEventListener("mouseout", function() {
    whiteBox3.style.display = "none";
});

item4.addEventListener("mouseout", function() {
    whiteBox4.style.display = "none";
});

item5.addEventListener("mouseout", function() {
    whiteBox5.style.display = "none";
});
  