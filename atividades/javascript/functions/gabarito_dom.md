# Document Object Model - Gabarito

## Pré-requisitos

1. A página [dragon_ball.html](dragon_ball.html) aberta no seu navegador preferido
   * A imagem do goku está [neste link](goku.png). Clique em Download e depois clique com o botão direito e
     `salvar como` para salvá-la na mesma pasta onde você colocou o arquivo `dragon_ball.html`
2. A aba `console` do navegador aberta (aperte F12 para abrir a janela de desenvolvimento, e então selecione a aba 
   `console`)
3. Conhecimentos básicos de seletores do 
   [Document Object Model](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction) 

## Exercícios

1. Selecione todos os parágrafos que possuem o id `first_paragraph`. Imprima na tela o conteúdo do atributo `innerHTML` 

```javascript
let text = document.getElementById('first_paragraph');
console.log(text.innerHTML);
```

2. Selecione todos os **parágrafos** que possuem a classe `strait`. Itere sobre cada um dos elementos usando um laço de repetição, e imprima na tela o conteúdo do atributo `innerHTML`

```javascript
let elements = document.getElementsByClassName('strait');
for(let i = 0; i < elements.length; i++) {
   if(elements[i].tagName === 'P') {
      console.log(elements[i].innerHTML);
   }
}
```

3. Selecione todos os **elementos** que possuem a classe `strait`. Itere sobre cada um dos elementos usando um laço de repetição, e imprima na tela o conteúdo do atributo `innerHTML`

```javascript
let elements1 = document.getElementsByClassName('strait');
for(let i = 0; i < elements1.length; i++) {
   console.log(elements1[i].innerHTML);
}
```

4. Selecione todos os elementos que possuem a tag `p`. Itere sobre cada um dos elementos usando um laço de repetição, e imprima na tela o conteúdo do atributo `innerHTML` 

```javascript
let elements2 = document.getElementsByTagName('p');
for(let i = 0; i < elements2.length; i++) {
   console.log(elements2[i].innerHTML);
}
```