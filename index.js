function ejercicio1() {
  let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
 
  for (let i = 0; i < meses.length; i++) {
 
    console.log(meses[i]);
 
  }
 
 }
 
 function ejercicio2(){
  
  let valores = [true, 5, false, "hola", "adios",2];

  if (valores[3].length < valores[4].length) {
    console.log(valores[0]);
    console.log("adios es mayor que hola");
  
  }
else{
  console.log(valores[2]);
  console.log("no se cumple la condicion");


}

console.log(valores[1]+valores[5]);
console.log(valores[1]-valores[5]);
console.log(valores[1]/valores[5]);
console.log(valores[1]*valores[5]);

 }

function ejercicio3(){

var numero1 =5;
var numero2 =8;

if(numero1<numero2) {
console.log("5 no es mayor que 8");

}
if(numero2>0){
console.log("8 es positivo");

}
if(numero1!=0){
console.log("5 es negativo o distinto a cero");

}
if(numero1++<numero2)
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que 8");




}

function ejercicio4(){

  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];

let dni = document.querySelector("#dni".value);

let letrauser = document

if(dni > 0 && dni <99999999){

let nletra = dni %23

let letra = letra[nletra];

if (letra == userletra){

console.log("Las letras son iguales");
console.log("La letra de tu DNI es:   "+ letra);

}
else{
console.log("La letra ingresada es incorrecta");
}

console.log("La letra de tu DNI es: "+ letra);



}
else{
console.log("Es incorrecto")
}


}

function ejercicio5(){
 
  let factor = prompt("ingrese un numero para calcular el factorial");

  let producto = 1
  for (let i= 1; i <= factor; i++){
     producto = producto *i;
  }

  console.log("El factorial de "+ factor +" es: "+producto);


}

function ejercicio6(){

  let num = prompt("Ingrese un munero para evaluar");

  let result = parImp(num);

  console.log(result);

}

function parImp(numero) {
  if (numero == 0) {
    return "El valor ingresado es incorrecto";
  }else if(numero % 2 == 0){
    return "El numero "+numero+" es par";
    }
    
    else{
    return "El numero  "+numero+" es impar";
    }
}

function ejercicio7(){

  let letra = prompt("Ingresa una letra");

let result = caramaymi(letra);

console.log(result);
}

function caramaymi(txt) {
let may = 0;
let min = 0;

for (let i = 0; i < txt.length; i++) {

if (txt.charAt(i) === txt.charAt(i).toUpperCase()) {
  may++;
} else if (txt.charAt(i) === txt.charAt(i).toLowerCase()) {
  min++;
}
}

if (may == 0) {
  return "son todas minusculas";
} else if (min == 0) {
  return "son todas mayusculas";
}else {
return "son mayusculas y munusculas";
}


}

function ejercicio8(){

let result = prompt("Ingresa una cadena de texto");
let date = palabra(result);
console.log(date);

}

function palabra(texto){

  function esPalindromo(texto) {
    let textoProcesado = texto.toLowerCase().replace(/[\W_]/g, '');
    return textoProcesado === textoProcesado.split('').reverse().join('');
  }

if (esPalindromo(texto)) {
console.log("El texto es un palíndromo.");
} else {
    console.log("El texto no es un palíndromo.");
}
}

function ejercicio10(){






}






