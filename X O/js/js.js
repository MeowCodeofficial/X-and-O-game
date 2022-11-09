window.onload = main;
var tabel;
var tr;
var td;
var con = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var y4 = 0;
var x5 = 0;
var x6 = 0;
var x7 = 0;
var x8 = 0;
var win = document.getElementById("win");
var x9 = 0;
var res1 = "f";

function main() {
  tabel = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    tr = document.createElement("tr");
    for (let g = 0; g < 3; g++) {
      td = document.createElement("td");
      tr.appendChild(td);
      // td.classList.add
    }
    tabel.appendChild(tr);
    document.body.appendChild(tabel);
  }

  var x4 = document.getElementsByTagName("td");
  x4[0].addEventListener("click", function () {
    if (x1 != 0) {
      // alert("You have already chosen this house");
      win.innerText += "You have already chosen this house";
    } else if (con % 2 == 0) {
      con++;
      x4[0].innerText = "X";
    } else {
      x4[0].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";

      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText += "no one wins";
    }
    x1++;
  });
  // khone dovom
  x4[1].addEventListener("click", function () {
    if (x2 != 0) {
      win.innerText += "You have already chosen this house";
    } else if (con % 2 == 0) {
      con++;
      x4[1].innerText = "X";
    } else {
      x4[1].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerHTML += "O is the winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is the winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText += "No one wins";
    }
    x2++;
  });
  // khone sevom

  x4[2].addEventListener("click", function () {
    if (x3 != 0) {
      win.innerText += "You have already chosen this house";
    } else if (con % 2 == 0) {
      con++;
      x4[2].innerText = "X";
    } else {
      x4[2].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x3++;
  });
  // khone charom
  x4[3].addEventListener("click", function () {
    if (y4 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[3].innerText = "X";
    } else {
      x4[3].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    y4++;
  });
  // khone panjom
  x4[4].addEventListener("click", function () {
    if (x5 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[4].innerText = "X";
    } else {
      x4[4].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x5++;
  });
  // khone shishom
  x4[5].addEventListener("click", function () {
    if (x6 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[5].innerText = "X";
    } else {
      x4[5].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x6++;
  });
  // khone haftom
  x4[6].addEventListener("click", function () {
    if (x7 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[6].innerText = "X";
    } else {
      x4[6].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x7++;
  });
  // khone hashtom
  x4[7].addEventListener("click", function () {
    if (x8 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[7].innerText = "X";
    } else {
      x4[7].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x8++;
  });
  // khone nohom
  x4[8].addEventListener("click", function () {
    if (x9 != 0) {
      alert("You have already chosen this house");
    } else if (con % 2 == 0) {
      con++;
      x4[8].innerText = "X";
    } else {
      x4[8].innerText = "O";
      con++;
    }
    if (
      x4[0].innerText == "O" &&
      x4[1].innerText == "O" &&
      x4[2].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[5].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "O" &&
      x4[7].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[3].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[7].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[5].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[8].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "O" &&
      x4[4].innerText == "O" &&
      x4[6].innerText == "O"
    ) {
      win.innerText += "O is winner";
      res1 = "t";
    }
    // shart bord x
    if (
      x4[0].innerText == "X" &&
      x4[1].innerText == "X" &&
      x4[2].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[3].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[5].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[6].innerText == "X" &&
      x4[7].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[3].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[1].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[7].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[5].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[0].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[8].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (
      x4[2].innerText == "X" &&
      x4[4].innerText == "X" &&
      x4[6].innerText == "X"
    ) {
      win.innerText += "X is winner";
      res1 = "t";
    } else if (con == 9 && res1 == "f") {
      win.innerText+="No one wins"
    }
    x9++;
  });
}
