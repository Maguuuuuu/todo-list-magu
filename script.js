
document.getElementById("botao").addEventListener("click",adicionarTarefaALista);


function concluirTarefa(checkbox) {
    console.log("concluirTarefa");
    
    const marcarCheckbox = checkbox.closest('li');
    marcarCheckbox.remove();
    
    document.createTextNode(marcarCheckbox);

    document.getElementById('todo-list-checked').appendChild(marcarCheckbox);

    const deletarIcone = marcarCheckbox.querySelector('.custom-icon');
    
    deletarIcone.remove();

    checkbox.remove();

    marcarCheckbox.style.backgroundColor = 'rgb(253, 243, 244)';
    marcarCheckbox.style.textDecoration = "line-through";

    const listaDeTarefas = document.querySelectorAll('#todo-list li');

    if(listaDeTarefas.length===0){
      adicionarMensagem()  
    }
}

function adicionarMensagem(){
    console.log("exibir mensagem");

    const mensagem = document.createElement('p');
    mensagem.id = "mensagem";
    mensagem.textContent = "Arrasou! Você terminou todas as suas tarefas!";

    const imagemFlor = document.createElement('img')
    imagemFlor.src = "imagens/imagem-flor.jpg";
    imagemFlor.alt = "desenho colorido de uma flor";
    imagemFlor.id = "desenho-flor";

    document.getElementById('todo-list').appendChild(mensagem);
    document.getElementById('todo-list').appendChild(imagemFlor);

     
    document.getElementById('botao').onclick = function() { 
        mensagem.remove()
        imagemFlor.remove(); };
}

function criarTarefa(){
    console.log("função criar tarefa");

    const tarefa = document.getElementById('task').value;
 
    const criarTarefaNova = document.createElement('li');
            
    const criarTexto = document.createTextNode(tarefa);

    const criarCheck = document.createElement('input');
    criarCheck.type = 'checkbox';
    criarCheck.onclick = function() { 
        concluirTarefa(this); };

    const botaoRemover = document.createElement('button');
    botaoRemover.innerHTML = '<i class="custom-icon"></i>';
    botaoRemover.onclick = function () {  
        criarTarefaNova.remove();
        };

    criarTarefaNova.appendChild(criarCheck);
    criarTarefaNova.appendChild(criarTexto);
    criarTarefaNova.appendChild(botaoRemover);

    return criarTarefaNova; 
}
 

function adicionarTarefaALista(event){

    console.log("função adicionar tarefa a lista")

    event.preventDefault();

    if(document.getElementById('task').value !== ''){
        const tarefaNova = criarTarefa()
        ordenarLista(tarefaNova) 
    } else {
        alert("Por favor, insira uma tarefa.");
    }   

    document.getElementById('task').value = ""; 
} 

function ordenarLista(tarefaNova){
    
    const prioridade = document.getElementsByName('prioridade');

    for(var i = 0; i<prioridade.length; i++){
        if(prioridade[0].checked){ 
            tarefaNova.style.backgroundColor = 'rgb(248, 4, 28)';
            document.getElementById('todo-list-p1').appendChild(tarefaNova);
            break;
        }
        if(prioridade[1].checked){
            tarefaNova.style.backgroundColor = 'rgb(243, 90, 90)';
            document.getElementById('todo-list-p2').appendChild(tarefaNova);
            break;
        }
        if(prioridade[2].checked){
            tarefaNova.style.backgroundColor = 'rgb(243, 191, 197)';
            document.getElementById('todo-list-p3').appendChild(tarefaNova);
            break;
        } 
        if(prioridade[i]){
            document.getElementById('todo-list-unchecked').appendChild(tarefaNova);
            break; 
        }
    }

     for (var i = 0; i < prioridade.length; i++) {
        prioridade[i].checked = false; 
    }
    
    
}

