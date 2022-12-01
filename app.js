//* Que es un callback: es una funcion que se le pasa a otra funcion o metodo.

let razasDePerros = ["Chihuaha", "Poodle", "Golden", "Pastor Aleman"];

// const callback = (raza) => raza;

// const nuevasRazas = razasDePerros.map(callback)
// nuevasRazas.push('San Bernardo')

// console.log(nuevasRazas)
//-------------------------------------------------

// const saludar = (array, callback) => {
//     console.log('Buenas tardes!')
//     // Simular la respuesta de un servidor...
//     setTimeout(() => {
//         callback(array)
//     }, 3000) // 3000 ms
// }

// function imprimirArray (array){
//     console.log(`Aqui tienes tus razas ordenadas: ${array.sort()}`)
// }

// saludar(razasDePerros, imprimirArray);

//  Ejercicio 1 Y 2

// const saludar2 = (saludo, callback) => {
//     saludo = saludo.toUpperCase();
//     callback(saludo)
// }

// const callback = (saludo) => {
//     console.log(saludo)
// }

// saludar2('hola chicos', callback)

//Callback hell

// const changeColors = (newColor, time, callback) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         callback && callback()
//     }, time)
// }

// changeColors('red', 1000, () => {
//     changeColors('blue', 1000, () => {
//         changeColors('pink', 1000, () => {
//             changeColors('purple', 1000, () => {

//             })
//         })
//     })
// })

// //* PROMESAS
// //? lAS PROMESAS REPRESENTAN EL EXITO O FRACASO DE UNA FUNCION ASINCRONA...
// //? ES UN OBJETO DEVUELTO EL CUAL SE LE ADJUNTAN FUNCIONES TIPO CALLBACKS EN VEZ DE PASAR 1 CALLBACK A UNA FUNCION

// const falsosLinks = (url) => {
//   return new Promise((resolve, reject) => {
//     const timeRandom = Math.random();
//     console.log(url);
//     //simular la respuesta de un servidor
//     setTimeout(() => {
//       if (timeRandom < 0.7) {
//         resolve({
//           name: "Paulo",
//           Profesion: "Desarrollador de software",
//           email: "chanchitovaliente@gmail.com",
//           billetera: 10,
//         });
//       } else {
//         reject("La peticion tuvo un ERROR!!!");
//       }
//     }, 1000);
//   });
// };

// falsosLinks("https://gatitosfeos.com/gatos/1")
//   .then((data) => {
//     console.log(`respuesta del servidor: ${data.email}`);
//   })
//   .catch((error) => {
//     console.log(`Oh boy!!! ${error}`);
//   });


// const jaja = new Promise(resolve, reject) => {

// }

// jaja
//     .then(() => )
//     .catch(() => )
//-------------------------------------------------------

// const changeColors = (newColor, time) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = newColor;
//             resolve()
//           }, time);
//     })
// };

// changeColors('red', 1000)
//     .then(() => changeColors('blue', 1000))
//     .then(() => changeColors('pink', 1000))
//     .then(() => changeColors('green', 1000))
//     .then(() => changeColors('pink', 1000))
//     .then(() => changeColors('yellow', 1000))
//     .then(() => changeColors('pink', 1000))
//     .then(() => changeColors('brown', 1000))
//     .then(() => changeColors('blue', 1000))
//     .then(() => changeColors('blue', 1000))


// const status = new Promise((res, rej) => {
//   let valor = 4;
  
//   if(valor > 5){
//     res('Es mayor a 5')
//   } else if (valor === 5){
//     res('Otra cosa')
//    } else {
//     rej('Es menor a 5')
//   }

  
// })


// status
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//-----------------------------------------------------
//* Promise APi
//? Promise es un objeto, el cual tiene varios metodos estaticos que podemos utilizar en nuestro codigo


//TODO: Promise.ALL y promise.resolve
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo')
//   }, 5000);
// })

// const promise2 = Promise.resolve(404);

// const promise1 =  Promise.reject(3)

// const promise4 = Promise.reject('error')

// Promise.all([promise1, promise2, promise3])
//   .then((values) => console.log(values))
  // .catch((error) => console.log(error)) 

//todo: Promise.allsettled

// Promise.allSettled([promise1, promise2, promise3])
// .then((results) =>  results.forEach((result) => console.log(`El estado es: ${result.status}, y su valor es : ${result.value}, y se reachazo: ${result.reason}`)))

// //todo: Promise.any
// const promises = [ promise3, promise1, promise2]
// Promise.any([promise1, promise3, promise2]) 
//   .then((value) => console.log(value))

  //todo: Promise.race

// Promise.race(promises)
//   .then((value) => console.log(value))
//   .catch((value) => console.log(value))

//* Async-Await

const usuarios = [
  {
    id: 1,
    nombre: 'Jaffa',
    profesion: 'Ingeniero en informatica'
  },
  {
    id: 2,
    nombre: 'Camilo',
    profesion: 'Psicologo'
  },
  {
    id: 3,
    nombre: 'Lady',
    profesion: 'Diseñadora de vestuario y confeccion'
  }
]




// async function name(){

// }

const getData = () => {
  return new Promise((resolve, reject) => {
    if(usuarios.length === 0){
      reject('NOt Data')
    
    } else {
      setTimeout(() => {
        resolve(usuarios)
      }, 2000)
    }
  });
}
// fetching de datos
async function recuperarDatos(){
  try {
    const datos = await getData()
    console.log(datos[0].profesion)
  } catch (error){
    console.log(error)
  }
}

recuperarDatos()