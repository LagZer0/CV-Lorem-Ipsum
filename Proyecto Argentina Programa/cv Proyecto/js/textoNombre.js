const text = document.getElementById("textoNombre");
const infoBox = document.createElement("div");
infoBox.innerHTML = "Naci el año 2100,En Ciudad X";
infoBox.classList.add("nombre-box");

text.addEventListener("click", function() {
    text.appendChild(infoBox);
  });

text.addEventListener("mouseout", function() {
    text.removeChild(infoBox);
  });
  
