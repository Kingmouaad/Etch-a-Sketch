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
      div.classList.toggle("ye");
      divmain.appendChild(div);
    }
    reset.addEventListener("click", () => {
      for (let i = 0; i < range.value; i++) {
        tableblack.removeChild(divmain);
      }
    });
  }
}

function remove() {
  while (tableblack.firstChild) {
    tableblack.removeChild(tableblack.firstChild);
  }
}
range.addEventListener("mousedown", remove);
range.addEventListener("mouseup", add);

default1.addEventListener("click", () => {
  const alldivs = tableblack.querySelectorAll("div.ye");
  alldivs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "red";
      ball.style.backgroundColor = "red";
    });
  });
});
eraser.addEventListener("click", () => {
  const alldivs = tableblack.querySelectorAll("div.ye");
  alldivs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "black";
      ball.style.backgroundColor = "black";
    });
  });
});
random.addEventListener("click", () => {
  const alldivs = tableblack.querySelectorAll("div.ye");
  alldivs.forEach((div) => {
    div.addEventListener("mouseover", function () {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
});
black.addEventListener("click", () => {
  const alldivs = tableblack.querySelectorAll("div.ye");
  alldivs.forEach((div) => {
    let r = 0.1;
    div.addEventListener("mouseover", function () {
      r += 0.1;

      div.style.backgroundColor = `rgba(0, 0, 0,${r})`;
      ball.style.backgroundColor = `rgba(0, 0, 0,${r})`;
    });
  });
});

range.dispatchEvent(add());
