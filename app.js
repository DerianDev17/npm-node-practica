const promesaCumplida = false

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('promesa cumplida');
        }else{
            reject('promesa rechazada..');
        }
    },3000)
});

// manejar la promesa 
const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazar) =>{
    console.log(razonRechazar);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada)



// miPromesa.then((valor)=>{
//     console.log(valor);
// })
