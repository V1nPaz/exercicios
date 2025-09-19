let list = [];
let listUl = document.getElementById("listUl");
const taskInput = document.querySelector("input");

function taskAdd(){

    let taskIndex = list.indexOf(taskInput.value); 

    if (taskInput.value == "" ){
        return 0;
    }else if (taskIndex != -1){
        alert("Essa tarefa já existe");
        return 0;
    }

    console.log(taskIndex);
    list.push(taskInput.value);
    updateList();
    console.log(list);

    return 1;
}

function taskRem(){
    let taskIndex = list.indexOf(taskInput.value);
    if (taskInput.value == ""){
        return 0;
    }else if (taskIndex == -1){
        alert("Essa tarefa não existe");
        return 0;
    }

    list.splice(taskIndex, 1);
    updateList();
    console.log(list);
    return 1;
}

function updateList(){
    listUl.innerHTML = "";
    list.forEach(task => {
        listUl.innerHTML += "<li>" + task + "</li>";
    });
}

//Implementar botao/link que deleta por item
//Estudar localS torage