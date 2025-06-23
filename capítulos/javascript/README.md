# Javascript

Javascript é uma linguagem de programação interpretada, executada nos navegadores da Web (ou do lado do cliente em uma 
relação cliente-servidor).

## Conteúdos

1. Operações matemáticas
2. Desvio condicional
3. Laços de repetição
4. Arrays
5. Strings
6. Funções
7. Orientação a objetos
8. Eventos
9. DOM

## Eventos

Eventos em Javascript são disparados por um objeto que recebe uma interação, e invocam uma função ou método que deve
reagir àquela interação.

Existem diversos tipos de eventos, sendo os mais comuns:

| Tipo de Evento     | Descrição                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------|
| `click`            | Disparado quando um elemento é clicado.                                                           |
| `keyup`            | Disparado quando uma tecla é liberada.                                                            |
| `keydown`          | Disparado quando uma tecla é pressionada.                                                         |
| `mouseover`        | Disparado quando o ponteiro do mouse entra no elemento.                                           |
| `mouseout`         | Disparado quando o ponteiro do mouse sai do elemento.                                             |
| `submit`           | Disparado quando um formulário é enviado.                                                         |
| `change`           | Disparado quando o valor de um `<input>`, `<select>` ou `<textarea>` é alterado.                  |
| `input`            | Disparado a cada modificação no campo de entrada.                                                 |
| `load`             | Disparado quando um recurso (ex: imagem, script) e seus dependentes são completamente carregados. |
| `DOMContentLoaded` | Disparado quando o documento HTML foi completamente carregado e analisado.                        |

Você pode conferir uma lista de eventos no W3 Schools (em inglês): https://www.w3schools.com/js/js_events.asp. Além 
disso, o material possui um exemplo de evento [nesta página](src/exemplo_formulario.html) (necessário baixar o código).

## DOM

o DOM (Document Object Model) pode ser utilizado tanto pelo navegador (apertando a tecla F12) quanto por uma página
HTML.

* **document:** o documento HTML atual.
* **element:** qualquer elemento da Web. Pode ser um parágrafo, uma div, a página HTML inteira, a seção body, um item
  de uma lista, etc.

## Métodos

Considere a seguinte [página HTML](../../atividades/javascript/functions/dragon_ball.html) para referência.

### Seleção de elementos

* `document.getElementById`: seleciona **um elemento** que possua um id definido:

  ```javascript
  let element = document.getElementById('first_paragraph');
  ```

* `document.getElementsByClassName`: seleciona **vários elementos** que possuem a classe definida:

  ```javascript
  let elements = document.getElementsByClassName('strait');
  ```

* `document.getElementByTagName`: seleciona **vários elementos** que são da tag definida:

  ```javascript
  let elements = document.getElementByTagName('p');
  ```

## Exercícios

### Operações matemáticas, desvio condicional e laços de repetição

Se tiver dificuldades em fazer os exercícios abaixo, tente fazê-los em outra linguagem de programação, de preferência 
uma que você tenha familiaridade (como C). Depois, traduza o código para a linguagem Javascript.

Para resolver estes exercícios:
  * Abra seu navegador de preferência
  * Digite `about:blank` na barra de busca
  * Abra o console (Chrome e Firefox: tecla `F12`, e aba **console**)

1. Some os números `2` e `2`.
2. Subtraia os números `5` e `3`.
3. Subtraia o número `5` da string `'3'` 
4. Subtraia a string `'5'` da string `'3'`
5. Some a string `'5'` da string `'3'`
6. Some `parseInt('5')` e `parseInt('3')`
7. Some `parseFloat('5')` e `parseFloat('3')`
8. Qual a diferença entre os operadores `=`, `==` e `===`?
9. Qual a diferença entre os operadores `!=` e `!==`?
10. Declare uma variável com o operador `let`
11. Declare uma variável com o operador `var`
12. Qual a diferença entre `let` e `var`?
13. Consulte a documentação da [Mozilla Developer Network](
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects
) sobre funções globais. O que é o valor `NaN`? 
14. Faça uma operação que obtenha um valor `NaN`
15. `NaN` é o mesmo que `null`? Por quê?
16. Considere o código-fonte abaixo. Ele está correto? Por quê? Se estiver errado, como podemos corrigí-lo?
    ```javascript
    let a = NaN;
    if(a === NaN) {
        console.log('É NaN');
    } else {
        console.log('Não é NaN');
    }
    ```
17. Use a função `typeof` para descobrir o tipo dos seguintes itens: `3`, `'3'`, `3.14`, `true`, `null`, `parseInt`
18. Usando operadores de desvio condicional (`if` e `else`), escreva um pequeno código que faz o seguinte:
    * Se a temperatura está abaixo de 10 graus, imprima na tela `Está frio!`
    * Se a temperatura está entre 11 e 20 graus, imprima na tela `Está ameno!`
    * Se a temperatura está acima de 21 graus, imprima na tela `Está quente!`
    * Armazene a temperatura em uma variável `temperatura`.
19. Armazene em uma variável um número entre `1` e `10`. Depois, escreva um código-fonte para calcular o n-ésimo número
    da [Sequência de Fibonacci](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci). Por exemplo:
    * Se o número for `1`, então a resposta é `1`
    * Se o número for `2`, então a resposta é `1`
    * Se o número for `3`, então a resposta é `2`
    * Se o número for `4`, então a resposta é `3`
    * Se o número for `5`, então a resposta é `5`
20. Armazene em uma variável um número inteiro positivo. Calcule o [fatorial](https://pt.wikipedia.org/wiki/Fatorial) do 
    número.

### Arrays

1. Crie um array com três elementos: `[1, 2, 3]`
2. Imprima o primeiro elemento na tela.
3. Usando o método `.at`, imprima o último elemento na tela.
4. Remova o número na posição `1` do array.
5. Adicione o número `9` na posição `1` do array.
6. Adicione o número `10` no fim do array.
7. Remova o último elemento do array.
8. Armazene em uma variável `n` um número entre `1` e `10`. Depois, armazene em um array os números da [Sequência de 
   Fibonacci](https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci) de `1` até `n`
   * Se o número for `1`, então a resposta é `[1]`
   * Se o número for `2`, então a resposta é `[1, 1]`
   * Se o número for `3`, então a resposta é `[1, 1, 2]`
   * Se o número for `4`, então a resposta é `[1, 1, 2, 3]`
   * Se o número for `5`, então a resposta é `[1, 1, 2, 3, 5]`
9. Escreva um código-fonte que, dado um número `n`, preenche uma matriz `n x n`, onde o triângulo
   inferior é composto de 1s, e o triângulo superior de zeros.
    * Saída para `n = 5`:
       ```
       1 0 0 0 0
       1 1 0 0 0
       1 1 1 0 0
       1 1 1 1 0
       1 1 1 1 1
       ```

### Strings

1. Crie uma variável chamada `frase` com um texto qualquer. Mostre a frase toda em letras maiúsculas.
2. Crie uma variável `texto` com uma frase. Mostre no console quantos caracteres ela possui.
3. Crie uma variável `palavra` com uma palavra de sua escolha. Inverta a palavra e exiba o resultado no console.
4. Crie uma variável `mensagem` com a seguinte frase: `"Estou aprendendo JavaScript e JavaScript é incrível!"`. 
   Substitua todas as ocorrências de `JavaScript` por `JS`.
5. Crie uma variável `nomeCompleto` com seu nome completo. Mostre apenas o primeiro nome no console.
6. Crie uma variável `email` com algum endereço de e-mail. Verifique se o e-mail contém o caractere `@` e exiba 
   `true` ou `false`.
7. Crie uma variável `frase` com um texto e conte quantas vezes a letra `a` aparece nela. Mostre o resultado no console.
8. Crie uma variável `CPF` com um CPF qualquer. Mostre o CPF com os últimos 3 caracteres substituídos por `*`.
9. Crie uma variável `frase` com uma frase qualquer. Mostre as palavras dessa frase em ordem alfabética.
10. Crie uma variável `frase` com o valor `"minha frase bonita"`. Converta essa frase para o formato `camelCase` e 
   mostre no console: `minhaFraseBonita`.

### Funções

1. Crie uma função que, dado um número `n` por parâmetro, retorna a n-ésima letra do alfabeto.
   * Se `n = 1`, então `letra = 'a'`
   * Se `n = 26`, então `letra = 'z'`
2. Defina uma função `soma`, que deve somar `+1` para um valor passado por parâmetro. Depois, aplique esta função
   usando o método `map` dos arrays para um array de 3 números
   * Exemplo: 
     ```javascript
     let a = [1, 2, 3]; 
     a.map(soma)  // deve exibir [2, 3, 4] na tela
     ```
3. Escreva uma função que, dado dois números `a` e `b`, arranje-os em uma função polinomial de primeiro grau 
   (função afim) `y = ax + b`, e retorne os 10 valores de `y` para os seguintes 10 valores de `x`: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9`
   * Exemplo: `a = 1` e `b = -2`
   * Saída da função: `-2, -1, 0, 1, 2, 3, 4, 5, 6, 7` 

### Orientação a objetos

> [!NOTE]
> Em breve!

### Eventos

1. Construa uma página Web com um formulário. Coloque um campo de entrada de texto e um botão. O usuário deve entrar 
   seu nome na caixa de texto. Ao clicar no botão, o site deve dizer `Olá fulano!`, onde `fulano` é o nome inserido no 
   campo de texto.
2. Crie uma página com um botão que muda a cor de fundo da página para uma cor aleatória toda vez que for clicado. Use 
   JavaScript para gerar a cor e aplicar ao `body`.
3. Construa uma página com três botões: `Aumentar`, `Diminuir` e `Resetar`. Ao clicar em `Aumentar`, o número mostrado
   na tela deve incrementar em 1. `Diminuir` deve decrementar e `Resetar` deve voltar o número para `0`.
4. Crie uma página com uma lista de tarefas (`ul`) e um campo de texto com botão `Adicionar`. Ao digitar uma tarefa e
   clicar no botão, a tarefa deve aparecer na lista. 
   * Dica: use `createElement` e `appendChild` para adicionar itens dinamicamente.
5. Crie um formulário que possua os seguintes campos: `nome`, `telefone` e `mensagem`. Depois, crie uma função em
   Javascript para enviar uma mensagem pelo WhatsApp para o número `telefone`, dando olá para a pessoal `nome` e com a
   mensagem `mensagem`.

## Bibliografia

* [Javascript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)