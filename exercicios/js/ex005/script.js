let list = [];
let listUl = document.getElementById("listUl");
const taskInput = document.querySelector("input");

function taskAdd(){

    let task = taskInput.value;
    let taskIndex = list.indexOf(task);

    if (task == "" ){
        return 0;
    }else if (taskIndex != -1){
        alert("Essa tarefa já existe");
        return 0;
    }

    console.log(taskIndex);
    list.push(task);
    listUl.innerHTML += "<li>" + task + "</li>";

    console.log(list);

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
    listUl.innerHTML = "";
    list.forEach(task => {
        listUl.innerHTML += "<li>" + task + "</li>";    
    });
    
    console.log(list);
}


