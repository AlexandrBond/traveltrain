const imgMask = document.getElementById("chimg");
const button = document.getElementById("chbut");
let val = 2;
console.log("imgMask - ", button);
//setAttribute(name, value)
console.log("src", imgMask.src);
button.addEventListener("click", () => {
  console.log("val -", val);
  if (val <= 4) {
    imgMask.setAttribute("src", `img/train-window${val}.png`);
  } else { 
    val = 1;
    imgMask.setAttribute("src", `img/train-window${val}.png`);
  }
  val++; 
});
