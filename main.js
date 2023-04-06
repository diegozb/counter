let decrease = document.querySelector(".links__decrease")
let reset = document.querySelector(".links__reset")
let increase = document.querySelector(".links__increase")
let num = document.querySelector("p")


decrease.addEventListener('click', () => {
  num.innerText = parseInt(num.innerText) - 1;
  color()
})

reset.addEventListener('click', () => {
  num.innerText = 0;
  color()
})

increase.addEventListener('click', () => {
  num.innerText = parseInt(num.innerText) + 1;
  color()
})

function color() {
  if (parseInt(num.innerText) > 0) num.style.color = "green"
  else if(parseInt(num.innerText) < 0) num.style.color = "red"
  else num.style.color = "#eee"
}
