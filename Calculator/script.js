const buttons = document.getElementsByTagName("button");
const display = document.getElementById("display");
console.log(buttons);
var str = "";
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    if (event.target.innerHTML === "AC") {
      if (str != "") {
        let val = str.slice(0, str.length - 1);
        str = val;
      }
    } else if (event.target.innerHTML == "DEL") {
      str = "";
    } else if (event.target.innerHTML === "=") {
      try {
        str = eval(str.replace("x", "*")).toFixed(2).toString();
      } catch (error) {
        str = "Error";
      }
    } else {
      str += event.target.innerHTML;
    }
    display.innerHTML = str;
  });
}
