const text = document.getElementById("textoDescripcion");
const infoBox = document.createElement("div");
infoBox.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt, eos nemo consectetur magnam et cupiditate earum velit dolor reiciendis at sequi temporibus deserunt minima, illo atque, neque ipsum? Libero atque corrupti amet perspiciatis maiores nobis quam fuga quia, enim dolorem, distinctio cumque? Quis sunt distinctio fugit itaque eius optio sit possimus dolor amet quas error accusantium odit, porro voluptatum odio neque iure repudiandae ab at temporibus illo placeat beatae esse! Repellat sunt a quia, iste odio fugiat! Excepturi eos, accusantium tenetur suscipit quas enim ut nihil a earum cum aliquam illum nulla, quisquam perferendis facere id consectetur sapiente? Praesentium sed";
infoBox.classList.add("descripcion-box");

text.addEventListener("click", function() {
    text.appendChild(infoBox);
  });

text.addEventListener("mouseout", function() {
    text.removeChild(infoBox);
  });
  
