**Aula Capturando os dados da tela**

No HTML foi inserido na linha 18 o *id="novoItem".
Para fazer a captura do formulario ou do elemento, é usado o **document.getElementById(" ... ")** irei usar o *id="novoItem* criado no HTML. O qual ira realizar a busca precisa atravez deste *id=novoItem"* exemplo:

    consele.log(document.getElementById("novoItem"))

Usado o console.log para saber realmente onde estava funcionando o novo id no HTML
Após testar a localização será criada uma *constante (const)* o qual sera tribuidada o nome de *form* devido a ser um cadastro de formulario. Passando a ficar desta forma:

    const form = document.getElementById("novoItem");

Após isto, eu quero que todo os dados inseridos sejam enviado, para realizar isso é necessario um evento de submit. Para isso será usado o *addEventListener()* o qual ira escultar um evento de *submit* e quando ele escultar esse evento de *submit*, será realizada uma *função*. ficando desta forma:

    form.addEventListener("submit", (evento) => {
    evento.preventDefault(evento) 

    console.log("deu certo")
}) 

A função nativa do JavaScript **preventDefault()** interrompe o comportamento pegando o evento padrão e interrompe o comportamento com *preventDefault()*. O *evento* é o parametro que é passado nesta função. 
No console.log se eu trocar o *console.log("deu certo")* por *console.log(evento)*, no console do navegador ele ira me trazer um objeto, toda vez que clicar no *botão de enviar (submit)* 
min 5:52