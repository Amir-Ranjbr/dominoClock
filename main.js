const numberdots = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
];
const dominos = document.querySelectorAll(".domino");
const ampm_el = document.querySelector(".ampm");
const time_el = document.querySelector(".time");

intfunc();
const interval = setInterval(intfunc, 1000);

function intfunc() {
  const [values, ampm, time] = getValues();
  dominos.forEach((domino, domino_index) => {
    const dots = domino.querySelectorAll(".part > *");
    dots.forEach((dot, dot_index) => {
      numberdots[values[domino_index]][dot_index]
        ? dot.classList.add("active")
        : dot.classList.remove("active");
    });
  });
  ampm_el.innerText = ampm;
  time_el.innerText = time;
}

function getValues() {
  const d = new Date();
  const h = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const ampm = h >= 12 ? "pm" : "am";
  const hours = h % 12 || 12;
  const minutesLeft = Math.floor(minutes / 10);
  const minutesRight = minutes % 10;
  const secondsLeft = Math.floor(seconds / 10);
  const secondsRight = seconds % 10;
  const time = d.toLocaleTimeString("en-us");
  return [
    [hours, minutesLeft, minutesRight, secondsLeft, secondsRight],
    ampm,
    time,
  ];
}
