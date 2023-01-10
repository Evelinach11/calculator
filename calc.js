let a = ""; // перше число
let b = ""; // друге число
let sign = ""; // знак операції
let finish = ""; //

const digitals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "=", "X", "/"];

// екран
const out = document.querySelector("calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  // нажата кнопка
  if (!event.target.classlist.contains("btn")) return;
  // не нажата
  if (event.target.classlist.contains("ac")) return;

  out.textContent = "";

  const key = event.target.textContent;

  if (digitals.includes(key)) {
    a += key;
    console.log(a, b, sigh);
    out.textContent = a;
  }
};
