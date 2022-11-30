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

//* PROMESAS
//? lAS PROMESAS REPRESENTAN EL EXITO O FRACASO DE UNA FUNCION ASINCRONA...
//? ES UN OBJETO DEVUELTO EL CUAL SE LE ADJUNTAN FUNCIONES TIPO CALLBACKS EN VEZ DE PASAR 1 CALLBACK A UNA FUNCION

const falsosLinks = (url) => {
  return new Promise((resolve, reject) => {
    const timeRandom = Math.random();
    console.log(url);
    //simular la respuesta de un servidor
    setTimeout(() => {
      if (timeRandom < 0.7) {
        resolve({
          name: "Paulo",
          Profesion: "Desarrollador de software",
          email: "chanchitovaliente@gmail.com",
          billetera: 10,
        });
      } else {
        reject("La peticion tuvo un ERROR!!!");
      }
    }, 1000);
  });
};

falsosLinks("https://gatitosfeos.com/gatos/1")
  .then((data) => {
    console.log(`respuesta del servidor: ${data.email}`);
  })
  .catch((error) => {
    console.log(`Oh boy!!! ${error}`);
  });


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



