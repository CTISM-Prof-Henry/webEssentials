# DOM

o DOM (Document Object Model) pode ser utilizado tanto pelo navegador (apertando a tecla F12) quanto por uma página 
HTML. 

## Conceitos 

* **Document:** o documento HTML atual.
* **element:** qualquer elemento da Web. Pode ser um parágrafo, uma div, a página HTML inteira, a seção body, um item
  de uma lista, etc.

## Métodos

Considere a seguinte [página HTML](atividades/javascript/functions/dragon_ball.html) para referência.

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