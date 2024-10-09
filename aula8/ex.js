/*
Cleiton Santos tem 40 anos, pesa 92 kg
tem 1.85 de alturae seu IMC é de 26.880934989043094
Cleiton nasceu em 1983
*/
const nome = "Cleiton";
const sobrenome = "Santos";
const idade = 40;
const peso = 92;
const alturaEmM = 1.85;
let indiceMassaCorporal; //peso / (alturaEmM * alturaEmM);
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(  `tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
