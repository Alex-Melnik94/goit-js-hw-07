const categories = document.querySelectorAll('.item') 

const amountOfCategories = categories.length
console.log(`В списке ${amountOfCategories} категории.`)

categories.forEach(category => {
    const title = category.querySelector('h2').textContent
    const amountOfItems = category.querySelectorAll('li').length
    console.log(`● Категория: ${title} \n● Количество элементов: ${amountOfItems}`)
})
    
        









