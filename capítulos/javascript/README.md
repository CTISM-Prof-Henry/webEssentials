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

> [!NOTE]
> Em breve!

### Funções

1. Crie uma função que, dado um número `n` por parâmetro, retorna a n-ésima letra do alfabeto.
   * Se `n = 1`, então `letra = 'a'`
   * Se `n = 26`, então `letra = 'z'`

### Eventos

1. Construa uma página Web com um formulário. Coloque um campo de entrada de texto e um botão. O usuário deve entrar 
   seu nome na caixa de texto. Ao clicar no botão, o site deve dizer `Olá fulano!`, onde `fulano` é o nome inserido no 
   campo de texto.
2. Crie um formulário que possua os seguintes campos: `nome`, `telefone` e `mensagem`. Depois, crie uma função em 
   Javascript para enviar uma mensagem pelo WhatsApp para o número `telefone`, dando olá para a pessoal `nome` e com a 
   mensagem `mensagem`. 

## Bibliografia

* [Javascript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)