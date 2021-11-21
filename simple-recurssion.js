// countDown with FOR
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

//CountDown if = 0
function countDown(num) {
  if (num === 0) return;
  console.log(num);
  countDown(num - 1);
}

// Countdown with no exit statement
function countDown(num) {
  countDown(num - 1);
}

countDown(5);
