

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





//  if('todo-list' === null){

//         console.log("todas as tarefas foram concluidas");
    
//         const mensagem = document.createElement('p');
//         const textoMensagem = mensagem.createTextNode("Arrasou! Você terminou todos os seus afazeres!")
//     }




document.getElementById("botao").addEventListener("click",adicionarTarefa);



function concluirTarefa(checkbox) {
    console.log("concluirTarefa");
    
    const marcarCheckbox = checkbox.closest('li');
    marcarCheckbox.remove();
    
    document.createTextNode(marcarCheckbox);

    document.getElementById('todo-list-checked').appendChild(marcarCheckbox);
    checkbox.remove();
    marcarCheckbox.style.backgroundColor = 'rgb(253, 243, 244)'
    marcarCheckbox.style.textDecoration = "line-through";
}
 
    
// function mudarCor(){
//     concole.log("mudar cor");

//     const itemMudarDeCor = document.getElementById('task');
    
//     itemMudarDeCor.style.backgroundColor = "red"

// }

// function adicionarPrioridade(){
//     console.log("prioridade");
    
//     const prioridade = document.getElementsByName('prioridade');
    

//     for(var i = 0; i<prioridade.length; i++){
//         if(prioridade[i].checked){ 
//             document.appendChild()
//         }
//     }
// } 


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

            const prioridade = document.getElementsByName('prioridade');
    
            for(var i = 0; i<prioridade.length; i++){
                if(prioridade[0].checked){ 
                    criarTarefa.style.backgroundColor = 'rgb(255, 6, 6)'
                }
                if(prioridade[1].checked){
                    criarTarefa.style.backgroundColor = 'rgb(238, 60, 60)'
                }
                if(prioridade[2].checked){
                    criarTarefa.style.backgroundColor = 'rgb(253, 117, 117)'
                }
                if(prioridade[3].checked){
                    criarTarefa.style.backgroundColor = 'rgb(248, 160, 160)'
                }
                if(prioridade[4].checked){
                    criarTarefa.style.backgroundColor = 'rgb(250, 197, 197'
                }
                if(prioridade[5].checked){
                    criarTarefa.style.backgroundColor = 'rgb(247, 235, 235)'
                }
                
            }

            // document.getElementById('task').appendChild(criarTarefa);
            document.getElementById('todo-list').appendChild(criarTarefa);
            // document.addEventListener('click',adicionarPrioridade)
            document.getElementById('task').value = ""; //FAZ COM QUE O INPUT FIQUE LIMPO DEPOIS DE DAR ENTER

        } else {
            alert("Por favor, insira uma tarefa.");
        }

        
}


    
