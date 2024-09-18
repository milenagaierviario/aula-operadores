//Exercícios de interpretação de código

/* 1. 

em "let resultado = bool1 && bool2", o resultado será false, pois true com false só pode resultar em false.

em "resultado = bool1 && bool2 && bool3" será false novamente pois mesmo com dois V e um F, para ser verdadeiro precisa de todos "true".

em "resultado = !resultado && (bool1 || bool2)" é true pois quando se utiliza o operador "||" é o inverso ao caso do true, se não tiverem todos "false" a resposta será "true".

em "console.log("d. ", typeof resultado)" vai pedir para a informação da variável aparecer no console, onde vai dizer que é um número ou um boolean, não entendi ao certo.

enunciado:
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) */

/* 2.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
-vai fazer com que ao pedir, apareça uma informação- 

const soma = primeiroNumero + segundoNumero

console.log(soma)
-a primeira variável vai dar os comandos para pedir informação, e a segunda vai fazer com que crie uma constante para esses dois números se somarem e apareça o resultado da soma no console- */

//Exercícios de escrita de código

//1.

let idade = prompt("Qual é a sua idade?")

const idadeMelhor = prompt("Qual é a idade do seu melhor amigo?")

console.log(idade > idadeMelhor)

console.log(idade >= idadeMelhor)

// 2.


let númeroPar = prompt("Insira um número par")

let divisão = 2

const resultado = númeroPar / divisão
console.log(resultado) 
console.log(resultado) 
console.log(resultado) 

// o padrão que eu percebi foi que mesmo se eu repetir o comando "prompt" em linhas diferentes, ele vai dar o mesmo resultado em todas as linhas comandadas.
//se eu adicionar um número impar, ele vai dar um resultado com um número quebrado.

let anos = prompt("Qual a sua idade em anos?")

let meses = 12

const multiplicação = anos * meses 
console.log(multiplicação)

let dias = 30

const multiplicaçãoDias = anos * dias
console.log(multiplicaçãoDias) 

const horas = 730

const multiplicaçãoHoras = anos * horas 
console.log(multiplicaçãoHoras)


// 4.


const números01 = prompt("Insira um número")
const números02 = prompt("Insira mais um número")

console.log(números01 >= números02)

console.log(números01 === números02)

const restoDaDivisao01 = números01 % números02 === 0

console.log(restoDaDivisao01) 

const restoDaDivisao02 = números02 % números01  === 0

console.log(restoDaDivisao02) 




