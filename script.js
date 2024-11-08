

function concluirTarefa (checkbox){
    const tarefa = checkbox.closest('li');
    tarefa.remove();
}




function adicionarTarefa (event){
    event.preventDefault();
    const inputTarefa = event.target.task;
    const textoTarefa = inputTarefa.value.trim();


    if (textoTarefa === ''){
        alert('a tarefa precisa de um título');
        return;
    }

    const htmlTarefa = `
        <li>
            <input type="checkbox" onclick="concluirTarefa(this)"/>
            <span>${textoTarefa}</span>
        </li>
        `;

    document
        .querySelector('#todo-list')
        .insertAdjacentHTML('beforeend' , htmlTarefa.trim());

    inputTarefa.value = ''
}

document
    .querySelector('#form-add-todo')
    .addEventListener('submit', adicionarTarefa);



