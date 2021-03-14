const botaoBusca = document.querySelector('#buscar-paciente');
botaoBusca.addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load',function(){
        
        if(xhr.status == 200){

            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            
            pacientes.forEach(function(paciente){
                adicionaPacienteTabela(paciente);
            })

        }
        else{
            alert('Erro ao buscar os pacientes.')
        }
       
    });

    xhr.send();
    
})