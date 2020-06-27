// const hero1 = document.getElementById('hero1')
// const borrar = document.getElementById('borrar')
// const content = document.getElementById('content')

const allTrash = document.querySelectorAll('.fa-trash-alt')
const allcards = document.querySelectorAll('.content')
console.log(allTrash)

allTrash.forEach((trashbtn,key) =>{
    trashbtn.addEventListener('click', (event) => {
        event.preventDefault();
        const cardKey = allcards[key]
        hero1.removeChild(cardKey)
    })
})








