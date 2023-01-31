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
No console.log se eu trocar o *console.log("deu certo")* por *console.log(evento)*, no console do navegador ele ira me trazer um objeto, toda vez que clicar no *botão de 'adicionar' (submit)* , se observar o target do console do navegador, podemos achar os elementos e Id's dos campos que iremos usar, como por exemplo na posição 0 temos o nome, e na posição 1 temos a quantidade.
Um modo simples para testar é da seguinte maneira: **evento.target[0].value**, o *event.target* **target** A propriedade somente leitura da **event** interface é uma referência ao objeto para o qual o evento foi despachado. E o **.value** é para saber o valor. Ficando da seguinte forma:

    console.log(evento.target[0].value) "input da camisa"
    console.log(evento.target[1].value) "input da quantidade"

*Nota: se eu setar com valores no "array []" ela sempre ira para posição fixa, e se necessario criar um campo novo, o codigo ira quebrar.*

No entanto, no console do navegador podemos observar dentro da opção *target* temos o campo **elements** que trará um objeto com as informações que coincidentemente tem o nome *"nome"* e *"quantidade"*. Mas para poder acessar o **elements** precisamos do target, então a sintaxe ficaria assim:

    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)

Deste modo, o codigo fica dinamico, e não apenas com um numero do array setado. 








min 5:52