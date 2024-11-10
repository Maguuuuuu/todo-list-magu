

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





 // if('todo-list' === null){

    //     console.log("todas as tarefas foram concluidas");
    
    //     const mensagem = document.createElement('p');
    //     const textoMensagem = mensagem.createTextNode("Arrasou! Você terminou todos os seus afazeres!")
    // }




document.getElementById("botao").addEventListener("click",adicionarTarefa);


function concluirTarefa(checkbox) {
    console.log("concluirTarefa");
    const marcarCheckbox = checkbox.closest('li');
    marcarCheckbox.remove();
    
    document.createTextNode(marcarCheckbox);

    const tarefaChecked = document.createElement('li')
    document.getElementById('todo-list-checked').appendChild(marcarCheckbox);
}


function adicionarTarefa(event){
    event.preventDefault();
    console.log("função adicionar tarefa");

    const tarefa = document.getElementById('task').value;


        if(tarefa !== ""){

            const criarTarefa = document.createElement('li');

            const criarCheck = document.createElement('input');
            criarCheck.type = 'checkbox';
            criarCheck.onclick = function() { concluirTarefa(this); };
            criarTarefa.appendChild(criarCheck);

            const criarTexto = document.createTextNode(tarefa);
            criarTarefa.appendChild(criarTexto);

            

            // document.getElementById('task').appendChild(criarTarefa);
            document.getElementById('todo-list').appendChild(criarTarefa);
            document.getElementById('task').value = ""; //FAZ COM QUE O INPUT SEJA LIMPO DEPOIS DE DAR ENTER
            document.addEventListener('click',criarTarefa);
        } else {
            alert("Por favor, insira uma tarefa.");
        }
}






// function adicionarMensagem(){
//     const mensagem = document.createElement('p');
//     const criarMensagem = document.createTextNode("Arrasou! Você terminou suas tarefas :)");
//     if('li'===null){
//         mensagem.appendChild(criarMensagem)
//     }
// }

