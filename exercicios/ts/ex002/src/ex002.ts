document.writeln("ok")
var lista: string[];
let titulo = document.createElement("h1");
titulo.innerText = "LISTA";
document.appendChild(titulo);

let form = document.createElement("form");

let taskInput = document.createElement("input");
taskInput.type = "text";
taskInput.placeholder = "Inserir tarefa";
form.appendChild(taskInput);
document.appendChild(form);

let ulList = document.createElement("ul");
document.appendChild(ulList)

function adicionarTarefa(): boolean{
    lista.push(taskInput.value);
    console.log(lista);
    return true;
}

let taskBtn = document.createElement("button");
taskBtn.innerText = "Adicionar";
taskBtn.type = "reset";
taskBtn.onclick = adicionarTarefa;

form.appendChild(taskBtn);