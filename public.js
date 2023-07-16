function popupCome() {
  // for (let i = 1; i >= 5; i++) {
  //   let input_i = document.getElementById("Inputi").value;
  // }
  let input_1 = document.getElementById("Input1").value;
  let input_2 = document.getElementById("Input2").value;
  let input_3 = document.getElementById("Input3").value;
  let input_4 = document.getElementById("Input4").value;
  let input_5 = document.getElementById("Input5").value;

  localStorage.setItem("Input__3", input_3);

  localStorage.setItem("Input__4", input_4);

  document.getElementById("congo").innerHTML = `${input_1} ${input_2}`;

  if (input_4 === input_5) {
    let popup = document.getElementById("main-popup");
    document.getElementById("sub-container").style.visibility = "hidden";
    popup.classList.add("popup-come");
  } else {
    document.getElementById("incorrect-password").innerHTML =
      "Password doesn't match";
  }
}

function gotoMainPage(e) {
  let Output1 = localStorage.getItem("Input__3");
  let Output2 = localStorage.getItem("Input__4");

  let input_6 = document.getElementById("Input6").value;
  let input_7 = document.getElementById("Input7").value;

  Output1 === input_6 && Output2 === input_7
    ? (window.location.href = "404.html")
    : (document.getElementById("invalidName").innerHTML =
        "Invalid Username or Password.");
  e.preventDefault();
}

function popupHide() {
  popup.classList.remove("popup-come");
}

function addNumber1() {
  let Number = 0;
  Number += 1;
  localStorage.getItem(Number);
  document.getElementById("reactions1").innerHTML = Number + " " + "Like";
}
function addNumber2() {
  let Number = 0;
  Number += 1;
  localStorage.getItem(Number);

  document.getElementById("reactions2").innerHTML = Number + " " + "Like";
}
function addNumber3() {
  let Number = 0;
  Number += 1;
  localStorage.getItem(Number);
  document.getElementById("reactions3").innerHTML = Number + " " + "Like";
}
function addNumber4() {
  let Number = 0;
  Number += 1;
  localStorage.getItem(Number);
  document.getElementById("reactions4").innerHTML = Number + " " + "Like";
}
function addNumber5() {
  let Number = 0;
  Number += 1;
  localStorage.getItem(Number);
  document.getElementById("reactions5").innerHTML = Number + " " + "Like";
}
