// //ES6 - Variables (declaraciones) let/const
// const nombre = 'Agustin'; // constante que no puede ser modificada 
// let edad = 31; // es una variable modificable 
// console.log (nombre,edad);
// //nombre = 'pedro'; esto no se puede realizar ya que nombre es una constante.
// edad = 32;
// console.log (nombre,edad);

// ---------------------------------0----------------------------------

// //Bloques y alcance de las variables 

// //--------------CONST y LET son variables de bloques no globales,
// //--------------a diferencia de VAR que se declara como variabloe modificable y global 
// var test;
// test = 10;
// function prueba (){
//     //let test;
//     test = 15;
//     return test;
// }
// prueba();
// console.log(test);
// console.log(prueba());

//-----------------------------------o----------------------------------

// //template strings 
// let nombre = 'Pablo';
// let apellido = 'Vasquez';
// const ciudad = 'Lima';
// const nacimiento = 1985;
// function calcularEdad(year){
//     return 2019 - year;
// }
// //ES5
// console.log(nombre +' '+apellido+ ', nacio en ' + ciudad + ', y su edad es ' + calcularEdad(nacimiento));
// //ES6
// console.log(`${nombre} ${apellido}, nacio en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`); // a esto se le llama template string


//-------------------------------------o--------------------------------------

// //Funciones de cadenas

// let nombre = 'Pablo';
// let apellido = 'Vasquez';
// const ciudad = 'Lima';

// let nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5))
// console.log(nombreCompleto.includes('blo')) //devuelve true or false. 
// console.log(nombreCompleto.startsWith('Pa'))
// console.log(nombreCompleto.endsWith('uez'));


//-----------------------------o----------------------------------------

//FUNCIONES DE FLECHAS.

// const years = [2000, 2001, 2008, 2012, 2021];
// //map recorre el arreglo. 

// //ES5
// var edad5 = years.map(function(el){
//     return 2019 - el;
// })
// console.log(edad5);
// //ES6
// let edad6 = years.map(el => 2019 - el);
// console.log(edad6);

// edad6 = years.map((el, index)=> `edad ${index + 1}: ${2019 - el}`);
// console.log(edad6)

// console.log
//     (edad6 = years.map(
//         (el, index) => {
//         const yearActual = new Date().getFullYear();
//             const edad = yearActual - el;
//             return `Edad ${index + 1}: ${edad}`;
//         }
//     ))

//--------------------------------------------o---------------------------------------

// //Continuacion de funciones flechas

// const cuadrado = (num) => num * num;
// console.log(cuadrado(5));

// const personas = [
//     {
//         nombre: 'Pablo',
//         edad: 20
//     },
//     {
//         nombre:'Ana',
//         edad:25
//     },
//     {
//         nombre:'Carlos',
//         edad:30
//     },
//     {
//         nombre:'Pepe',
//         edad:35
//     }
// ]

// const menores30 = personas.filter((persona) => persona.edad<40)

// console.log(menores30)

//---------------------------------------o----------------------------------

// //////Destructuracion - Destruccion - Destructing//////

// //ES5
// var datos = ['Pablo', 25];

// var nombre1 = datos[0];
// var edad1 = datos[1];
// console.log(nombre1,edad1)
// //ES6

// let [nombre, edad] = ['Pablo', 35];
// console.log(nombre,edad)

// const Persona = {
//     nombre2: 'Carlos',
//     edad2: 30
// }
// const {nombre2, edad2} = Persona;
// console.log(nombre2, edad2)

// const {nombre2: n, edad2: e} = Persona;

// console.log(n,e)

// const calcMayorEdad = (year) => {
//     const edad = new Date().getFullYear() - year;
//     const mayoria = edad >= 18 ? 'Si' : 'No';//aca en vez de si/no puede colocarse true or false sin las comillas.
//     return [edad, mayoria];
// }

// const [edad, mayoria] = calcMayorEdad(1991);
// console.log(edad, `Es mayor de edad: ${mayoria}`)

///-----------------------------------------o---------------------------

////Mapas//// Maneja valores y claves

const datos = new Map();

datos.set('nombre','Agustin');
datos.set('edad', 30)
datos.set(1, 'agustin@hotmail.com')
datos.set('movil',1122334455)
console.log(datos.get('nombre'));
console.log(datos.get(1))
datos.delete('movil')
console.log(datos.size)
console.log(datos.get('movil'))



