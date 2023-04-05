let decrease = document.querySelector(".links__decrease")
let reset = document.querySelector(".links__reset")
let increase = document.querySelector(".links__increase")
let num = document.querySelector("p")

decrease.addEventListener('click', () => {
  num.innerText = parseInt(num.innerText) - 1;
})

reset.addEventListener('click', () => {
  num.innerText = 0;
  
})

increase.addEventListener('click', () => {
  num.innerText = parseInt(num.innerText) + 1;
  
})
