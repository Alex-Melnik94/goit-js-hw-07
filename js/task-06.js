// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


const inputEl = document.querySelector('#validation-input')
const correctLength = Number(inputEl.dataset.length)

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputEl.value.length === correctLength) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
        
}
