

// function concluirTarefa (checkbox){
//     const tarefa = checkbox.closest('li');
//     tarefa.remove();
// }

// function adicionarTarefa (event){
//     event.preventDefault();
//     const inputTarefa = event.target.task;
//     const textoTarefa = inputTarefa.value.trim();


//     if (textoTarefa === ''){
//         alert('a tarefa precisa de um título');
//         return;
//     }

    // const htmlTarefa = `
    //     <li>
    //         <input type="checkbox" onclick="concluirTarefa(this)"/>
    //         <span>${textoTarefa}</span>
    //     </li>
    //     `;

//     document
//         .querySelector('#todo-list')
//         .insertAdjacentHTML('beforeend' , htmlTarefa.trim());

//     inputTarefa.value = ''
// }

// document
//     .querySelector('#form-add-todo')
//     .addEventListener('submit', adicionarTarefa);


document.getElementById("botao").addEventListener("click",adicionarTarefa);
// document.addEventListener("click",concluirTarefa)
// concluirTarefa()

function adicionarTarefa(event){
    event.preventDefault();
    console.log("função adicionar tarefa");

    const tarefa = document.getElementById('task').value;

        if(tarefa !== ""){

            const criarTarefa = document.createElement('li');

            const criarCheck = document.createElement('input');
            criarCheck.type = 'checkbox';
            criarTarefa.appendChild(criarCheck);

            const criarTexto = document.createTextNode(tarefa)
            criarTarefa.appendChild(criarTexto);

            // document.getElementById("task").appendChild(criarTarefa);
            document.getElementById('todo-list').appendChild(criarTarefa);
            document.getElementById('task').value = ""; //FAZ COM QUE O INPUT SEJA LIMPO DEPOIS DE DAR ENTER
        } else {
            alert("Por favor, insira uma tarefa.");
        }
}



// function concluirTarefa(){
//     console.log("função concluir tarefa");
//     const caixaChecked = document.getElementsByClassName("check");
//     const tarefaDeletada = document.querySelector("li");
//     if(caixaChecked.checked == true){
//         tarefaDeletada.remove()
//     }
// }

// function concluirTarefa(){
//     const checkbox = 
//     const listaTarefas = document.querySelectorAll("li");
//     Array.from(listaTarefas);
//     console.log(listaArray);

// }

function concluirTarefa(checkbox) {
    const marcarCheckbox = checkbox.closest('li');
    marcarCheckbox.remove();
}
