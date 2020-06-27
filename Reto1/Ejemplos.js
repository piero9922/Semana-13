// CAllBACKS

function miNombre(callbacks){
    callbacks('Mi nombre es Piero');
}

miNombre((resultado) => {
    console.log(resultado)
});



// PROMISE

const contraseña = new Promise((resolve,reject) => {
    let contra = true;
    contra ? resolve('Contraseña correcta') : reject('Contraseña Incorrecta')
});

contraseña.then(() => {
    console.log('Contraseña Aceptada')
}).catch((e) => {
    e = new Error
    console.log('Contraseña Incorrecta',e)
})



// CALLBACK HELL

