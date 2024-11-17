

document.getElementById("botao").addEventListener("click",adicionarTarefa);


function concluirTarefa(checkbox) {
    console.log("concluirTarefa");
    
    const marcarCheckbox = checkbox.closest('li');
    marcarCheckbox.remove();
    
    document.createTextNode(marcarCheckbox);


    document.getElementById('todo-list-checked').appendChild(marcarCheckbox);

    const deletarIcone = document.getElementsByClassName('custom-icon');
        for(var i = 0; i < deletarIcone.length; i++){
            deletarIcone[i].remove()
        }
    checkbox.remove();
    marcarCheckbox.style.backgroundColor = 'rgb(253, 243, 244)'
    marcarCheckbox.style.textDecoration = "line-through";
    
    const listaDeTarefas = document.getElementsByClassName('list-prioridade')

    if(listaDeTarefas){
        listaDeTarefas.innerHTML =''
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
            criarCheck.onclick = function() { concluirTarefa(this); };

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
                    document.getElementById('item-p1').appendChild(criarTarefa);
                }
                if(prioridade[1].checked){
                    criarTarefa.style.backgroundColor = 'rgb(243, 90, 90)';
                    document.getElementById('item-p2').appendChild(criarTarefa);
                }
                if(prioridade[2].checked){
                    criarTarefa.style.backgroundColor = 'rgb(243, 191, 197)';
                    document.getElementById('item-p3').appendChild(criarTarefa);
                }             
            }

            
            document.getElementById('todo-list-unchecked').appendChild(criarTarefa);
        
            document.getElementById('task').value = ""; //FAZ COM QUE O INPUT FIQUE EM BRANCO DEPOIS DE DAR ENTER

        } else {
            alert("Por favor, insira uma tarefa.");
        }
}
