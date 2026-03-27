# Media query

>[!NOTE]
> O site [Mozilla Developers](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Guides/Media_queries/Using)

Media query é uma maneira de controlar o estilo de um site com base em características do dispositivo ou da tela, como
largura, altura, resolução, orientação, entre outros. Elas são usadas para criar designs responsivos, que se adaptam a
diferentes tamanhos de tela e dispositivos.

Por exemplo:

```css
@media (max-width: 600px) {
    body {
        background-color: cadetblue;
    }
}

body {
    background-color: lightcoral;
}
```

Isso fará com que a cor de fundo do site seja `lightcoral` em telas maiores que 600px de largura, e `cadetblue` em telas
menores ou iguais a 600px de largura.

## Operadores

As media queries podem usar os seguintes operadores para combinar condições:

* `and`: Combina múltiplas condições. Por exemplo: `@media (min-width: 600px) and (max-width: 1200px) { ... }`
* `not`: Negação de uma condição. Por exemplo: `@media not (min width: 600px) { ... }`
* `only`: Aplica a media query apenas se o dispositivo atender à condição especificada. 
  Por exemplo: `@media only screen and (max-width: 600px) { ... }`
* `or`: Combina múltiplas condições, aplicando a media query se qualquer uma delas for verdadeira. Por exemplo:
  `@media (min-width: 600px) or (orientation: portrait) { ... }`


## Exercícios

1. Crie uma media query que altere a cor de fundo do site para `lightblue` em telas menores ou iguais a 800px de
   largura.
2. Crie uma media query que altere a cor do texto para `darkred` em telas maiores que 1200px de largura.
3. Crie uma media query que altere a cor de fundo do site para `lightgreen` em telas com orientação retrato (portrait).
4. Crie uma media query que altere a cor de fundo do site para `lightyellow` em telas com orientação paisagem (
   landscape).
5. Crie uma media query que altere a cor do texto para `darkblue` em telas menores ou iguais a 600px de largura e com
   orientação retrato (portrait).