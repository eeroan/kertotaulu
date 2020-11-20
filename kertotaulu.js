const kysymys = document.querySelector('.kysymys')
const lauseke = document.querySelector('.lauseke')
const vastaus = document.querySelector('.vastaus')
const form = document.querySelector('form')
const tulos = document.querySelector('.tulos')
const pisteet = document.querySelector('.pisteet')

function arvo() {
  return Math.floor((Math.random() * 10) + 1)
}

let eka
let toka
let oikea
let count = 0
let score = 0

function alusta() {
  eka = arvo()
  toka = arvo()
  oikea = eka * toka
  lauseke.innerHTML = eka + ' &times; ' + toka
  vastaus.value = ''
}

alusta()

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log('sdf')
  let isCorrect = vastaus.value === String(oikea)
  tulos.innerHTML = isCorrect ? 'Oikein' : `Väärin, ${eka} &times; ${toka} = ${oikea}`
  tulos.classList.toggle('correct', isCorrect)
  count++
  score+= isCorrect ? 1 : 0
  pisteet.innerHTML = score + ' / ' + count
  alusta()
})

