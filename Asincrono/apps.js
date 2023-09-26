// //Funcion setTimeOut

// setTimeout(function(){
//     console.log("esto aparece luego de 3 segundos")
// }, 3000);

// setTimeout(() => {
//     console.log("esto sucede luego de 4 segundos ")
// }, 4000);//esta funcion funciona como callback 


// const segundo = () =>{
//     setTimeout(() => {
//         console.log("llamada a segundo");
//     }, 2000);
// }

// const primero = () => {
//     console.log("inicio de primero");
//     segundo();
//     console.log("Fin de Primero");
// }

// primero();


//--------------------------0---------------------------

// const getUsuario = () => {
//     setTimeout(() => {
//         const usersId = [101,105,108,199];
//         console.log(usersId);

//         setTimeout((id) => {
//             const usuario = {
//                 email:'agustin@gmail.com',
//                 nombre:'Agustin'
//             }

//             setTimeout((idPermiso) => {//cuando recibe un solo parametro, no es necesario que esten los () parentesis
//                 const permiso = ['admin', 'creador'];
//                 console.log(`${id} - ${usuario.email} - ${usuario.nombre} - Permisos: ${permiso}`);


//             }, 1500,usersId[2]);
//         }, 1500, usersId[2]);
//     }, 1500);
// }
// //cuando las funciones se hacen asi escalonadas, se complica para mantenerla, por lo que se usan las 
// //llamadas funciones promesas.

// getUsuario();




//----------------------------------0----------------------------------
// Ejemplo del uso de promesas

// let promesa = new Promise((resolve, reject) => {
//     if(true){
//         resolve('la operacion fue exitosa');
//     }
//     else{
//         reject('Hubo un error');
//     }
// });

// promesa.then(response => {
//     console.log('response: ' + response);
// }).catch(error =>{
//     console.log('Error: ' + error);
// })

// //Ejemplo 2 

// var miPromesa = Promise.resolve('Comida');
// miPromesa.then(resp => console.log(resp));

// //Ejemplo 3

// var miPromesa2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(4)
//     }, 2000);
// })


// miPromesa2.then (resp =>{
//     resp += 5;
//     console.log(resp);
// });

// resolucion con promesas los setTimeOut
// de CallBacks a Promesas

const getUsuariosIDs = new Promise((response, reject) => {
    setTimeout(() => {
        response([101,105,103,115]);
    }, 1500);
});

const getUsuario = userid => {
    return new Promise((resolve,reject) => {
        setTimeout((id) => {
            const usuario ={
                email:'agustin@gmail.com',
                nombre:'Agustin'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`)
        }, 1500,userid);
    })
};

const getPermisos = id =>{
    return new Promise((resolve,reject) => {
        setTimeout((id) => {
            const permiso = ['administrador']
            resolve(permiso);
        }, 1500, id);
    });
}

// getUsuariosIDs
// .then(IDs => {
//     console.log(IDs);
//     return getUsuario(IDs[3]);
// })
// .then(usuario =>{
//     console.log(usuario);
//     return getPermisos(usuario.id);
// })
// .then(permisos =>{
//     console.log(permisos)
// })
// .catch(()=>{
//     console.log('Error')
// });


//desync, await 
//permiten consumir promesas de formas mas sensillas 

async function getUsuariosAW(){
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[3]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos)
}
//La funcion async consume las promesas de forma mas ordenada
// la funciona await solo se puede utilizar dentro de una funcion async
getUsuariosAW();

