const form = document.getElementById("novoItem");

//evento de submit (envio de formulario)
form.addEventListener("submit", (evento) => {
    //interrompe o comportamento pegando o evento padrão e interrompe o comportamento com *preventDefalt(). O evento é o parametro que é passado nesta função. 
    evento.preventDefault(evento) 

    console.log(evento)
}) 