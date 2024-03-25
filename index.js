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

function ejercicio6(numero){

if(numero % 2 == 0){

return "El numero 26 es par"
}

else{
return "El numero 33 es impar"
}







}