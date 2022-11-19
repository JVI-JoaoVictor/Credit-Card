let name = document.querySelector('#name-card')
let nameValue = document.querySelector('.card-holder .value')

name.addEventListener('input', e => {
  nameValue.innerText =
    e.target.value.length === 0 ? 'JOÃO COSTA' : e.target.value
})

let number = document.querySelector('#number-card')
let numberValue = document.querySelector('.card-number')

number.addEventListener('input', e => {
  numberValue.innerText =
    e.target.value.length === 0 ? '0000 0000 0000 0000' : e.target.value
})

let cvc = document.querySelector('.security-card')
let cvcValue = document.querySelector('.card-security .value')

cvc.addEventListener('input', e => {
  cvcValue.innerText = e.target.value.length === 0 ? '000' : e.target.value
})

let dateMm = document.querySelector('.expiration-card-mm')
let dateMmValue = document.querySelector(
  '.card-extra .card-expiration-month .value'
)

dateMm.addEventListener('input', e => {
  dateMmValue.innerText = e.target.value.length === 0 ? '00' : e.target.value
})

let dateYy = document.querySelector('.expiration-card-yy')
let dateYyValue = document.querySelector(
  '.card-extra .card-expiration-year .value'
)

dateYy.addEventListener('input', e => {
  dateYyValue.innerText = e.target.value.length === 0 ? '00' : e.target.value
})
