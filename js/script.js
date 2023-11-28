/* Esercizio 1 */
let number = 100;
console.log(number);

/* Esercizio 2 */
const pi = 3.14;
console.log(pi);

/* Esercizio 2a ERRORE*/
/* pi = 3.1416;
console.log(pi); */

/* Esercizio 2c */
let radius = 8;
let circle = radius * 2 * pi;
console.log(circle);

/* Esercizio 3 */
let name = "carlo";
name = "marco";
console.log(name);

/* Esercizio 4 */
let greet = "Ciao, Mondo!";
console.log(greet);

/* Esercizio 4b */
/* let greet = "Come stai, Mondo";
console.log(greet); */

/* Esercizio 4c */
greet = `${greet} Come stai?`
console.log(greet)


/* let num1 = 40;
let num2 = 30;
let comparison;

/* if(num1 > num2){
     comparison = num1;
    
}else{
    comparison = num2;
}
console.log(comparison);
 */
/* 

let persona_1 = "pippo";
let persona_2 = "gianni";
let comparison;

if(persona_1 == persona_2){
    comparison = "Le stringhe sono uguali"
    console.log(comparison)
}else{
    comparison = "le stringhe non sono uguali"
    console.log(comparison)
}
 */

let var_1 = 1
let comparison;

if (var_1 === "15"){
    comparison = true
    console.log(comparison)
}else{
    comparison = false
    console.log(comparison)
}

/* 
for ( i=1; i<42; i++){
    console.log(i)
} */

for (i = 42; i >= 1; i--){
    console.log(i)
}

/* const numbers = [1,2,3,4,5,6,7,8]
console.log(numbers)

const fruits = ["mela", "banana", "pera", "albicocca", "mango", "kiwi", "papaya"]
console.log(fruits)

console.log(fruits.length) */

/* const numOfElements = parseInt(prompt("Digita un numero intero"))
console.log(numOfElements, typeof numOfElements)
let numbers = []
for (let i = 1; i <= numOfElements; i++){
    numbers.push(i)
}

console.log(numbers)
console.log(numbers.length);
 */

/* Esercizi 24/11/23 */

/* let n1 = parseInt(prompt ("Inserisci il primo numero"))
let n2 = parseInt(prompt ("Inserisci il secondo numero"))
if ( n1 > n2 ){
    console.log(n1)
    
}else{
    console.log(n2)
   */
/* } */
/* 
let somma = 0;
for (let i = 0; i  < 10 ; i++){
    let numero = parseInt(prompt("inserisci un numero"));
    somma += numero;
}
console.log(somma);
 */


/* 
const invitati = ["gino", "pino", "lino", "paolo"]
let invito = false;
let nome = prompt("Inserisci il tuo nome")
for (let i=0; i<invitati.length; i++){
    if( invitati[i] == nome){
        invito = true
    }      
}

if (invito == true){
    console.log("puoi partecipare")
}else{
    console.log("non puoi partecipare")
} */

/* let numeri = [];
for (let i=1; i<= 6; i++){
    let numero = prompt("inserisci il numero")
    if (numero % 2 != 0){
        numeri.push(numero);
       
    }
}
console.log(numeri) */

/* let num = prompt("Inserisci quanti numeri vuoi visualizzare")
let a = 0, b = 1;
let c;
let i = 0

while(i < num){
    c = a + b;
    a = b;
    b = c;
    
    console.log(c)

    i++
}
 */
function ciaoMondo(){
    alert("Ciao Mondo!")
}

ciaoMondo()

function somma (a,b){
    return a + b
}

 let risultato = somma(1,2);
 console.log(risultato)