

document.getElementById("botao").addEventListener("click",adicionarTarefa);


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

    //ADICIONAR MENSAGEM QUANDO TODAS AS TAREFAS SÃO CONCLUIDAS
    if(listaDeTarefas.length===0){
        const mensagem = document.createElement(!'p');
        mensagem.innerHTML = '<p id="mensgaem">Arrasou! Você terminou todas as suas tarefas!</p>'
        const imagemFlor = document.createElement('img')
        imagemFlor.src = "imagens/imagem-flor.jpg";
        imagemFlor.alt = "desenho colorido de uma flor";
        imagemFlor.id = "desenho-flor";
        document.getElementById('todo-list').appendChild(mensagem);
        document.getElementById('todo-list').appendChild(imagemFlor);

        //LIMPA A MENSAGEM CASO SEJAM ADICIONADOS NOVOS ITENS
        document.getElementById('botao').onclick = function() { 
            document.getElementById('todo-list').appendChild(mensagem).remove()
            document.getElementById('todo-list').appendChild(imagemFlor).remove(); };
    } 
    
}
 
    
function adicionarTarefa(event){
    event.preventDefault();
    console.log("função adicionar tarefa");

    const tarefa = document.getElementById('task').value;
 

        if(tarefa !== ""){

            var criarTarefa = document.createElement('li');
        
            const criarTexto = document.createTextNode(tarefa);

            const criarCheck = document.createElement('input');
            criarCheck.type = 'checkbox';
            criarCheck.onclick = function() { 
                concluirTarefa(this); };

            const botaoRemover = document.createElement('button');
            botaoRemover.innerHTML = '<i class="custom-icon"></i>';
            botaoRemover.onclick = function () {
                criarTarefa.remove();
            };

            criarTarefa.appendChild(criarCheck);
            criarTarefa.appendChild(criarTexto);
            criarTarefa.appendChild(botaoRemover);
            

            const prioridade = document.getElementsByName('prioridade');
            

            //COLOCAR COR NAS PRIORIDADES DIFERENTES E ORDENAR A LISTA/ 
            for(var i = 0; i<prioridade.length; i++){
                if(prioridade[0].checked){ 
                    criarTarefa.style.backgroundColor = 'rgb(248, 4, 28)';
                    document.getElementById('todo-list-p1').appendChild(criarTarefa);
                    break;
                }
                if(prioridade[1].checked){
                    criarTarefa.style.backgroundColor = 'rgb(243, 90, 90)';
                    document.getElementById('todo-list-p2').appendChild(criarTarefa);
                    break;
                }
                if(prioridade[2].checked){
                    criarTarefa.style.backgroundColor = 'rgb(243, 191, 197)';
                    document.getElementById('todo-list-p3').appendChild(criarTarefa);
                    break;
                } 
                if(prioridade[i]){
                    document.getElementById('todo-list-unchecked').appendChild(criarTarefa);
                    break; // o break que foi definitivo para deixar a lista em ordem
                }
            }
            
            //DEIXAR O INPUT EM BRANCO DEPOIS DE DAR ENTER
            document.getElementById('task').value = ""; 

            //DESMARCAR OS INPUTS TIPO RADIO
            for (var i = 0; i < prioridade.length; i++) {
                prioridade[i].checked = false; 
            }

        } else {
            alert("Por favor, insira uma tarefa.");
        }
}

