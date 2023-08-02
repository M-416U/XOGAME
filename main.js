let title = document.querySelector(".title");
let player = "x";
let arrOfS = [];
let relod = document.querySelector(".reload");
let arrayOfHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let Color = [];
for (let i = 0; i < 6; i++) {
  Color[i] = arrayOfHex[Math.floor(Math.random() * arrayOfHex.length)];
}
let finalColor = `#${Color.join("")}`;
function check() {
  for (let i = 1; i < 10; i++) {
    arrOfS[i] = document.getElementById("item" + i).innerHTML;
  }
  if (arrOfS[1] == arrOfS[2] && arrOfS[1] == arrOfS[3] && arrOfS[2] != "") {
    winner(1, 2, 3);
  }
  if (arrOfS[4] == arrOfS[5] && arrOfS[5] == arrOfS[6] && arrOfS[5] != "") {
    winner(4, 5, 6);
  }
  if (arrOfS[7] == arrOfS[8] && arrOfS[8] == arrOfS[9] && arrOfS[8] != "") {
    winner(7, 8, 9);
  }
  if (arrOfS[1] == arrOfS[4] && arrOfS[4] == arrOfS[7] && arrOfS[4] != "") {
    winner(1, 4, 7);
  }
  if (arrOfS[2] == arrOfS[5] && arrOfS[5] == arrOfS[8] && arrOfS[5] != "") {
    winner(2, 5, 8);
  }
  if (arrOfS[3] == arrOfS[6] && arrOfS[6] == arrOfS[9] && arrOfS[6] != "") {
    winner(3, 9, 6);
  }
  if (arrOfS[3] == arrOfS[5] && arrOfS[5] == arrOfS[7] && arrOfS[5] != "") {
    winner(3, 5, 7);
  }
  if (arrOfS[1] == arrOfS[5] && arrOfS[5] == arrOfS[9] && arrOfS[5] != "") {
    winner(1, 5, 9);
  }
}
function mainGame(id) {
  let ele = document.getElementById(id);
  if (player === "x" && ele.innerHTML == "") {
    ele.innerHTML = "X";
    title.innerHTML = "O Turn";
    player = "o";
  }
  if (player === "o" && ele.innerHTML == "") {
    ele.innerHTML = "O";
    title.innerHTML = "X Turn";
    player = "x";
  }
  check();
}
function winner(n1, n2, n3) {
  title.innerHTML = `New Game`;
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3500);
  let cont = document.querySelector(".squers-cont");
  cont.style.opacity = "0.4";
  document.getElementById("item" + n1).style.background = "#888";
  document.getElementById("item" + n2).style.background = "#888";
  document.getElementById("item" + n3).style.background = "#888";
  let msg = document.getElementById("msg");
  msg.innerHTML = ` ${arrOfS[n1]}الفائز`;
  msg.style.display = "block";
  msg.style.backgroundColor = finalColor;
}

relod.onclick = () => {
  location.reload();
};
