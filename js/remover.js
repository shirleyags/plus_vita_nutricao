
const tabela = document.querySelector('table');
tabela.addEventListener('dblclick',function(event){
    if(event.target.tagName =='TD'){
        event.target.parentNode.classList.add('desaparecer');

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
}
    
});
    
