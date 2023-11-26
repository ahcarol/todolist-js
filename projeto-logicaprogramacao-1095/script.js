const tasks = [];

function addTask(id, nome) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return 'Já existe uma task com esse Id';
        }
    }

    const newTask = { id, nome };
    tasks.push(newTask);
    return 'Nova task criada com sucesso';
}

function checkTaskById(id){
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            return 'Já existe essa atividade';
        }
    }
    return 'Atividade não consta na lista';
}

function deleteTaskById(id){
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            return 'Atividade apagada com sucesso';
        }
    }
    return 'Erro ao apagar a atividade';
}

function editTaskById(id, newName) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].nome = newName;
            return 'Atividade editada com sucesso';
        }
    }
    return 'Atividade não encontrada';
}

function printTaskById(id) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        console.log(`Id: ${task.id} - task: ${task.nome}`);
    } else {
        console.log('Tarefa não encontrada');
    }
} 

function printTasks() {
    for (let i = 0; i < tasks.length; i++) {
        console.log(`Id: ${tasks[i].id} - task: ${tasks[i].nome}`);
    }
}

console.log(addTask(1, 'Estudar JavaScript'))
console.log(addTask(2, 'Assistir Aula da Ada Tech'))
console.log(addTask(3, 'Fazer Almoço' ))
console.log(addTask(4, 'Assistir Dorama'))
console.log(editTaskById(4, 'Assistir HxH'))
printTasks()
printTaskById(4)




