let countEL = document.getElementById("count-el");
let countSecond = document.getElementById("count-second");
let resetEl = document.getElementById("reset-el");
let count = 0;

function addOnePoint() {
  count += 1;
  countEL.textContent = count;
}
function addTwoPoints() {
  count += 2;
  countEL.textContent = count;
}
function addThreePoints() {
  count += 3;
  countEL.textContent = count;
}

function onePoint() {
  count += 1;
  countSecond.textContent = count;
}
function twoPoints() {
  count += 2;
  countSecond.textContent = count;
}
function threePoints() {
  count += 3;
  countSecond.textContent = count;
}

function resetHomeTeam() {
  countEL.textContent = 0;
  count = 0;
}

function resetGuestTeam() {
  countSecond.textContent = 0;
  count = 0;
}
