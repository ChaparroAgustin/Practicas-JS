// //Funcion setTimeOut

// setTimeout(function(){
//     console.log("esto aparece luego de 3 segundos")
// }, 3000);

// setTimeout(() => {
//     console.log("esto sucede luego de 4 segundos ")
// }, 4000);//esta funcion funciona como callback 


const segundo = () =>{
    setTimeout(() => {
        console.log("llamada a segundo");
    }, 2000);
}

const primero = () => {
    console.log("inicio de primero");
    segundo();
    console.log("Fin de Primero");
}

primero();