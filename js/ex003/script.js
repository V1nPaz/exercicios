

function calcular(event){
    event.preventDefault();

    let peso = document.getElementById("peso");
    console.log("🚀 ~ calcular ~ peso:", typeof(peso))
    let altura = document.getElementById("altura");
    console.log("🚀 ~ calcular ~ altura:", typeof(altura))
    
    if (altura.value == ""){
        console.log("ok");
    }

    if (peso.value == "" || altura.value == ""){
        alert("Insira os valores corretamente");
        return 0;
    }
    
    
    
    console.log(altura.value)


    let imc = peso.value / (altura.value * altura.value);
    let areaResultado = document.getElementById("areaResultado");

    console.log(imc)
    
    
    let p = document.getElementById("p");
    
    p.innerText = "";
    
    if (imc < 18.5){
        p.innerText = "Abaixo do peso";
    } else if (imc < 24.9){
        p.innerText = "Peso normal";
    } else if (imc < 30){
        p.innerText = "Sobrepeso";
    }else{
        p.innerText = "Obesidade";
    }
    
    areaResultado.appendChild(p);
    
    console.log("submit realizado");
    
}