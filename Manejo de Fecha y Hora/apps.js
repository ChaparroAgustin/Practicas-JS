//Manejo de fecha y hora
// Unix Epoch - 01 Enero 1970 00:00:00
const ahora = new Date();

console.log(ahora);
console.log(ahora.toString());

const fecha1 = new Date("december 17, 1975, 06:20:00");

console.log(fecha1);
console.log(fecha1.toString());

console.log(`año: ${ahora.getFullYear()}`);
console.log(`Mes: ${ahora.getMonth() + 1}`);
console.log(`Día: ${ahora.getDate()}`);

console.log(`Día: ${ahora.getDay()}`);//Day devuelve el numero del dia, siendo domingo 0, 
                                     //en el swtich se muestra un ejemplo
switch(ahora.getDay()){
    case 0: console.log("Domingo")
    break;
    case 1: console.log("Lunes")
    break;
    case 2: console.log("Martes")
    break;
    case 3: console.log("Miercoles")
    break;
    case 4: console.log("Jueves")
    break;
    case 5: console.log("Viernes")
    break;
    case 6: console.log("Sabado")
    break;
    default: console.log("Osvaldo")
}
//Timestamp o marca de tiempo 
const fecha2 = new Date(0);
console.log(fecha2);

const timeStamp = ahora.getTime();
console.log(timeStamp.toString());

const fechaActual = new Date(timeStamp);
console.log(fechaActual.getFullYear());

//Comparacion de fechas

const fechaDos = new Date('10 01 1991 00:20:00');
const fechaUno = new Date('09 01 1991 00:20:00');

const timeStampFechaUno = fechaUno.getTime();
const timeStampFechaDos = fechaDos.getTime();

if(timeStampFechaDos > timeStampFechaUno){
    console.log(fechaDos.toString());
}
else if(timeStampFechaDos < timeStampFechaUno){
    console.log(fechaUno.toString());
}
else{
    console.log("son la misma fecha")
}