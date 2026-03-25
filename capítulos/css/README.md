# CSS

Do inglês Cascading Style Sheet.

## O que é CSS?

CSS é uma linguagem de estilo usada para descrever a apresentação de um documento HTML. Ele permite que os
desenvolvedores controlem a aparência de elementos HTML, como cores, fontes, espaçamento, layout e mais.

## Como o CSS funciona?

O CSS funciona associando regras de estilo a elementos HTML. Cada regra de estilo é composta por um seletor, que
identifica os elementos HTML aos quais a regra se aplica, e um bloco de declarações, que define as propriedades de
estilo e seus valores.

## Usando CSS

Existem três maneiras de usar CSS em HTML: inline, interno e externo.

### Inline

Aplica-se a propriedade `style` à um elemento HTML específico:

```html
<p style="color: red;">Este texto é vermelho.</p>
```

### Interno

Inclui-se um bloco de estilo dentro da tag `<head>` do documento HTML:

```html

<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
<body>
<p>Este texto é vermelho.</p>
</body>
```

### Externo

Cria-se um arquivo CSS separado, por exemplo `styles.css`, e inclui-se um link para ele dentro da tag `<head>` do
documento HTML:

**Arquivo `styles.css`:**

```css
p {
    color: red;
}   
```

**Arquivo index.html:**

```html

<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<p>Este texto é vermelho.</p>
</body>
```

## Seletores

Um seletor em CSS é uma parte da regra de estilo que identifica os elementos HTML aos quais a regra se aplica. Existem
vários tipos de seletores, incluindo:

### Seletor de tipo

Seleciona elementos HTML pelo nome da tag, por exemplo `p` para selecionar todos os parágrafos.

```css
p {
    color: red;
}
```

### Seletor de classe

Seleciona elementos HTML com uma classe específica, por exemplo `.vermelho` para selecionar todos os elementos com a
classe `vermelho`:

```css
.vermelho {
    color: red;
}
```

Também é possível combinar com o seletor de tag:

```css
p.vermelho {
    color: red;
}
```

### Seletor de ID

Seleciona um elemento HTML com um ID específico, por exemplo `#titulo` para selecionar o elemento com o ID `titulo`:

```css
#titulo {
    color: red;
}
```

### Seletor de atributo

Seleciona elementos HTML com um atributo específico, por exemplo `[type="text"]` para selecionar todos os elementos de
formulário com o atributo `type` igual a "text":

```css
[type="text"] {
    color: red;
}
```

### Seletor de pseudo-classe

Seleciona elementos HTML com base em seu estado ou posição, por exemplo `:hover` para selecionar elementos quando o
mouse estiver sobre eles.

```css
p:hover {
    color: red;
}
```

Mais seletores de pseudoclasse podem ser vistos no [W3 Schools](https://www.w3schools.com/css/css_pseudo_classes.asp).

## Propriedades do CSS

Existem inúmeras propriedades de estilo em CSS, cada uma controlando um aspecto diferente da aparência dos elementos
HTML. Algumas das propriedades mais comuns incluem:

* `color`: Define a cor do texto.
* `background-color`: Define a cor de fundo de um elemento.
* `font-size`: Define o tamanho da fonte.
* `font-family`: Define a família de fontes.
* `margin`: Define a margem externa de um elemento.
* `padding`: Define o preenchimento interno de um elemento.
* `border`: Define a borda de um elemento.
* `display`: Define como um elemento é exibido, por exemplo `block`, `inline`, `flex`, etc.
* `position`: Define o tipo de posicionamento de um elemento, por exemplo `static`, `relative`, `absolute`, `fixed`, etc.
* `width` e `height`: Definem a largura e altura de um elemento.

Para uma lista completa, visite o site da W3 Schools: [link](https://www.w3schools.com/css/default.asp).

Uma lista interessante de propriedades é fornecida [aqui](https://medium.com/@zmactavish/30-css-styles-to-know-0643beac797a).

## Exercícios

Crie um arquivo HTML novo para realizar os seguintes exercícios:

1. Crie um parágrafo e use CSS para alterar a cor do texto para azul.
2. Crie um título e use CSS para alterar a fonte para Arial e o tamanho para 24px.
3. Crie um link e use CSS para alterar a cor do link para verde e remover o sublinhado.
4. Crie uma imagem e use CSS para definir a largura da imagem para 200px e a altura para 150px.
5. Troque a cor de fundo da página para azul.
6. Coloque uma imagem como plano de fundo da página.
7. Troque o formato de borda das imagens para arredondado.
8. Crie um parágrafo e use CSS para alterar a cor do texto para vermelho quando o mouse estiver sobre ele.
9. Crie um título e use CSS para definir a posição como absoluta, posicionando-o no canto superior direito da página.
10. Crie uma div e troque a cor da borda para vermelho.
