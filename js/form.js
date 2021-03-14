const botaoAdiciona = document.querySelector('#adicionar-paciente');
botaoAdiciona.addEventListener('click',function(event){
       event.preventDefault();


       const form = document.querySelector('#form-adiciona');

       
       /*A função está lá embaixo
       Aqui em cima a função está sendo chamada e foi colocada em uma variável,
       mas foi chamada*/
       //Extraindo informações

       const paciente = capturaDadosFormulario(form);
       
       adicionaPacienteTabela(paciente);


       form.reset();
});


function adicionaPacienteTabela(paciente){

       const trPaciente = montaTr(paciente);

       if ((pacientes.altura <= 0 || paciente.altura >= 3.00) && (paciente.peso <= 0 || paciente.peso >= 1000)){
              alert('Altura e peso inválidos');
       }else if (paciente.nome.length == 0) {
              alert('O nome do paciente não foi preenchido');
       }else if (paciente.altura.length == 0) {
              alert('A altura do paciente não foi preenchido');
       }
       else if (paciente.altura <= 0 || paciente.altura >= 3.00) {
              alert('Altura inválida');
       }
       else if (paciente.peso.length == 0) {
              alert('O peso do paciente não foi preenchido');}
       else if (paciente.peso <= 0 || paciente.peso >= 1000) {
              alert('Peso inválido');
       }else if (paciente.gordura.length == 0) {
              alert('A porcentagem de gordura não foi preenchida');
       }
       else{

       const tabela = document.querySelector('#tabela-pacientes');
       tabela.appendChild(trPaciente);
       }
       
}

       /*Essa função captura os dados do formulário. 
       O parâmetro é "form", porque se baseia 
       na variável form, que está lá em cima, para ser criada a função*/ 

function capturaDadosFormulario(form){
       const paciente={  
              nome:form.nome.value,
              peso:form.peso.value,
              altura:form.altura.value,
              gordura:form.gordura.value
       }
       return paciente;
}

function montaTr(paciente){

       const pacienteTr = document.createElement('tr');
       pacienteTr.classList.add('paciente');

       const nomeTd  = montaTd(paciente.nome,'info-nome');
       const pesoTd = montaTd(paciente.peso,'info-peso');
       const alturaTd = montaTd(paciente.altura,'info-altura');
       const gorduraTd = montaTd(paciente.gordura,'info-gordura');
       const imcTd = montaTd(calculoImc(paciente.peso,paciente.altura),'info-imc');
             
       pacienteTr.appendChild(nomeTd);
       pacienteTr.appendChild(pesoTd);
       pacienteTr.appendChild(alturaTd);
       pacienteTr.appendChild(gorduraTd);
       pacienteTr.appendChild(imcTd);
       
       return pacienteTr
}

function montaTd(dado,classe){

       const criarTd = document.createElement('td');
              criarTd.textContent = dado;
              criarTd.classList.add(classe);
       
              return criarTd;
}






