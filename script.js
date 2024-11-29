
//chama a função adicionarTarefaALista 
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
      adicionarMensagem()  //chama a função adicionarMensagem
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

     
    document.getElementById('botao').onclick = function() { //deleta a mensagem caso seja adicionda mais alguma tarefa
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
    botaoRemover.onclick = function () {  //remove a tarefa caso seja clicado no botãoRemover
        criarTarefaNova.remove();
        };

    criarTarefaNova.appendChild(criarCheck);
    criarTarefaNova.appendChild(criarTexto);
    criarTarefaNova.appendChild(botaoRemover);

    return criarTarefaNova;  // retorna a tarefa escrita no input + o check + botão de excluir
}
 

function adicionarTarefaALista(event){

    console.log("função adicionar tarefa a lista")

    event.preventDefault();

    if(document.getElementById('task').value !== ''){
        const tarefaNova = criarTarefa() //chama a função criarTarefa e tranforma a const tarefaNova no valor que foi retornado na função criarTarefa
        ordenarLista(tarefaNova) //chama a função ordenarLista e passa como parametro a const tarefaNova que vai ser utilizada na função 
    } else {
        alert("Por favor, insira uma tarefa.");
    }   

    document.getElementById('task').value = ""; //limpa o input
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
            break; // o break foi definitivo para deixar a lista em ordem
        }
    }

     //desmarca os inputs tipo radio
     for (var i = 0; i < prioridade.length; i++) {
        prioridade[i].checked = false; 
    }
    
    
}

