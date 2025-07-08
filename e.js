const ball = document.querySelector("#ball");
const default1 = document.querySelector("#default");
const random = document.querySelector("#random");
const black = document.querySelector("#black");
const eraser = document.querySelector("#Eraser");
const reset = document.querySelector("#reset");
const tableblack = document.querySelector("#tableblack");
const range = document.querySelector("#range");
let x = 1 / range.value;
range.addEventListener("mouseup", () => {
  const pargraph = range.previousElementSibling;
  pargraph.textContent = `${range.value} x ${range.value}`;
  pargraph.classList.toggle("text");
});
function add() {
  for (let i = 0; i < range.value; i++) {
    const divmain = document.createElement("div");
    divmain.setAttribute("style", `display:flex;  flex:1;overflow:hidden;`);
    tableblack.appendChild(divmain);
    for (let j = 0; j < range.value; j++) {
      const div = document.createElement("div");
      div.setAttribute(
        "style",
        `flex:1;border:1px solid white;width:${x}%;height:100%;`
      );
      divmain.appendChild(div);
    }
  }
}
range.addEventListener("mouseup", add);
function remove() {
  for (let i = 0; i < 64 * 64; i++) {
    tableblack.removeChild(div);
  }
}
reset.addEventListener("click", remove);
