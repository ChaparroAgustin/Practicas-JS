//Guardado y lectura de datos de LocalStorage.

// localStorage.setItem('Ubicacion','Buenos Aires');

// console.log(localStorage.getItem('nombreUsuario'));
// console.log(localStorage.getItem('Ubicacion'));

// localStorage.removeItem('Ubicacion');// remueve elementos del Local Storage

// localStorage.clear();//limpiar el local storage

//--------------------------------------------0----------------------------------------------------------------

//////////////Notación JSON/////////////////////

const Usuario = {
    nombre: 'Agustin',
    edad: 31
}

localStorage.setItem('usuario',Usuario);//aca no se guarda el objeto debido a que no es string

const usuarioJSON = JSON.stringify(Usuario);//convierte objeto o parametro en string para poder guardar en local storage

localStorage.setItem("jsonUsuario",usuarioJSON) //aca se guarda ya que se convirtio a string (json)

console.log(usuarioJSON);

const usuario2 = JSON.parse(usuarioJSON);//con parse, el string de json vuelve a ser objeto.

console.log(usuario2);
console.log(`${usuario2.nombre}: ${usuario2.edad}`);

//----------------------------------------------o--------------------------------------------------


