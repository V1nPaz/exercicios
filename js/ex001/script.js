const peso = prompt("insira o seu peso");
const altura = prompt("insira a sua altura");
const imc = peso/altura/altura;

let texto;

if (imc < 20){
    texto = "magro";
}else if(imc < 25){
    texto = "peso ideal";
}else if(imc < 30 ){
    texto = "sobrepeso";
}else{
    texto = "obeso";
}

document.writeln("<h1>" + texto + "</h1>");
