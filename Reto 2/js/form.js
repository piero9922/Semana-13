const form = document.getElementById('form')
const btn = document.getElementById('btn')


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    
    const dog = document.createElement('div')
    dog.classList.add('dog')

    const a =document.createElement('a')
    const i = document.createElement('i')
    i.classList.add('far')
    i.classList.add('fa-edit')

    const a2 =document.createElement('a')
    const i2 = document.createElement('i')
    i2.classList.add('fas')
    i2.classList.add('fa-trash-alt')

    const color = document.createElement('div')
    color.style.backgroundColor = 'black'
    color.style.borderRadius = '50%'

    a.appendChild(i)
    a2.appendChild(i2)

    dog.appendChild(a);
    dog.appendChild(color);
    dog.appendChild(a2);
    
    console.log(dog)
})