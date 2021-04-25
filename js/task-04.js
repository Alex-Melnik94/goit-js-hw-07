// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = document.querySelector('#value')

const decrementBtn = document.querySelector('#counter button[data-action="decrement"]')
const incrementBtn = document.querySelector('#counter button[data-action="increment"]')


let click = 0

function onDecrementBtn()  {
    click -= 1
    counterValue.textContent = click
}

function onIncrementBtn()  {
    click += 1
    counterValue.textContent = click
}

decrementBtn.addEventListener('click', onDecrementBtn)
incrementBtn.addEventListener('click', onIncrementBtn)

