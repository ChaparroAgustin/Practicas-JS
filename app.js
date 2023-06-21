// var Titulo = document.getElementById('Titulo');

// Titulo.innerText('Hola');

// var submit = document.getElementById('submit');
// const items = document.querySelectorAll(".list-group-item");
// var numero = document.getElementById("numero");
// var texto = document.getElementById("text");
// numero.value = "";

// //console.log(numero.textContent,texto.textContent);

// function cambio(){
//     if(numero.value>="0" && numero.value<"4" ){
//         items[numero.value].textContent = texto.value;
//         numero.value = "";
//     texto.value = "";
//     }
//     else{
//         window.alert("Item no encontrado!!");
//         numero.value = "";
//         texto.value = "";
//     }
// }

// if(submit){
//     submit.addEventListener("click",cambio, true)
// }
// // const btn = document.getElementById('does-not-exist');
// console.log(btn); // 👉️ null

// // ✅ Using optional chaining (?.)
// btn?.addEventListener('click', () => {
//   console.log('btn clicked');
// });


//PrentNode ParentElement Ambos son los mismo, funcionan de la misma manera.

var itemList = document.querySelector("#items");
//console.log (itemList.parentNode);
var main = itemList.parentNode;
main.style.backgroundColor= "#f4f4f4";
//console.log(main.parentNode.parentNode);

// //childNodes

// console.log(itemList.childNodes);

// //children

// console.log(itemList.children)

// //firstChild

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hola";

// //lastChild

// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hola";


//previous Siblings

//previousElementSibling

//nextSibling

//nextElementSibling


//CreateElement
//tagName

// var nuevoDiv = document.createElement("div");
// nuevoDiv.className = "Hola";
// nuevoDiv.id = "div-hola";
// nuevoDiv.setAttribute('title','hola mundo');

//createTextNode

// var nuevoNodoText = document.createTextNode ('hola manolo');

// nuevoDiv.appendChild(nuevoNodoText);

// console.log (nuevoDiv);

// var contenedor = document.querySelector('.container');
// var h1 = document.querySelector('h1');
// // console.log(contenedor);
// // console.log(nuevoDiv);
// // console.log(h1);
// contenedor.insertBefore(nuevoDiv,h1);

//Eventos clicks

function hacerClick(){
    window.alert("usted hizo click con JS");
}

//La forma correcta es:

document.getElementById("boton").addEventListener('click', function(){
    window.alert("Forma Correcta.")
});

//Funcionamiento agregar y eliminar

var form = document.getElementById("formAgregar");
var lista = document.getElementById("items");


form.addEventListener('submit', agregarItem)

function agregarItem(e){
    e.preventDefault();
    var nuevoItem = document.getElementById("item").value;
    console.log(nuevoItem)
}
