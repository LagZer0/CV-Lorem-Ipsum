const text = document.getElementById("textoEstudios");
const infoBox = document.createElement("div");
infoBox.innerHTML = "Me gradue el año 2133 en la universidad de AAA UNIV XXII";
infoBox.classList.add("estudios-box");

text.addEventListener("click", function() {
    text.appendChild(infoBox);
  });

text.addEventListener("mouseout", function() {
    text.removeChild(infoBox);
  });
  
