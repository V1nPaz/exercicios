let list = [];
let listUl = document.getElementById("listUl");
let taskInput = document.querySelector("input");

function taskAdd(){
    console.log("adicionando");
    let taskIndex = list.indexOf(taskInput.value); 
    console.log(taskIndex);
    if (taskInput.value == "" ){
        return 0;
    }else if (taskIndex != -1){
        alert("Essa tarefa já existe");
        return 0;
    }

    list.push(taskInput.value);
    renderList();
    console.log(list);

    return 1;
}

function taskRem(task){
    console.log("removendo");
    let taskIndex = list.indexOf(task);
    
    if (taskIndex == -1){
        alert("Essa tarefa não existe");
        return 0;
    }
    list.splice(taskIndex, 1);
    renderList();
    console.log(list);
    return 1;
}

function renderList(){
    listUl.innerHTML = "";
    list.forEach(task => {
        var a = document.createElement("a");
        a.onclick =  () => taskRem(task);
        a.href = "#";
        a.innerText += "Deletar    ";
        
        var li = document.createElement("li");

        listUl.appendChild(li);
        li.appendChild(a);
        li.append(task);


        //listUl.innerHTML += "<li>" + task +  + "<>EXCLUIR</a>" +  "</li>" ;
    });
}

//Implementar botao/link que deleta por item
//Estudar localS torage