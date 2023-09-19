//////Arreglos en ES6/////


//const ceviche = ['pescado','marisco', 'cebolla']; // aca se usa indexOf para buscar el indice de un elemento.

// const ceviche = [ //aca se usa findIdex para buscar indice de un elemento
//     {
//         codigo: 1,
//         titulo: 'pescado'
//     },
//     {
//         codigo:1,
//         titulo: 'marisco'
//     },
//     {
//         codigo:3,
//         titulo: 'cebolla'
//     }
// ];

// console.log(ceviche);
// ceviche[0] = 'papa';
// console.log(ceviche);


// ceviche.splice(1,0, 'Limon');
// console.log(ceviche);

// ceviche.forEach(function(item, index) {
//     console.log(index)
//     console.log(item)

// });

// console.log(ceviche.indexOf('cebolla'));

// function findItemInCeviche (item){// funcion similar al indexOf
//     for(let i =0 ; i < ceviche.length; i++)
//     {
//      if(ceviche[i] === item)
//      {return i}
//     }
    
//      return null;
//  }

// function findItemInCeviche (item){// funcion similar al findIndex
//    for(let i =0 ; i < ceviche.length; i++)
//    {
//     if(ceviche[i].titulo== item)
//     {return i}
//    }
   
//     return null;
// }
// indice = findItemInCeviche("Cebolla");
// console.log(indice);
// console.log(ceviche.indexOf("cebolla"));


////----------------------------------------------------o----------------------------------------------



const ceviche = [ //aca se usa findIdex para buscar indice de un elemento
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo:1,
        titulo: 'marisco'
    },
    {
        codigo:3,
        titulo: 'cebolla'
    }
];

// const buscarIngrediente = function(array, titulo){
//     const index = ceviche.findIndex(function(ing, index)
//     {
//         return ing.titulo === titulo;
//     });
//     return index;
// }
// console.log(buscarIngrediente(ceviche,'marisco'));
// console.log(ceviche[buscarIngrediente(ceviche,'marisco')]);

//---------------------------------------------o---------------------------------------



// const paises = ['argentina','chile', 'paraguay','uruguay', 'bolivia','brasil','peru'];

// console.log(paises.filter(pais => pais.includes('ar')))


const filtrarIngredientes = ceviche.filter(function(ing,index){
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
});

console.log(filtrarIngredientes);

//probando la conexion con github.