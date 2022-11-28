# Event Listeners

Nesta atividade, você deve criar uma página HTML que contenha:

* Título
* Um parágrafo com um texto explicativo do que a página faz
* Um formulário do tipo input (com a tag `form`)
* Um botão (com a tag `button`)
* Uma imagem (com a tag `img`)
* CSS interno (opcional)

Você deve fazer uma página HTML que fique trocando de imagem de `x` em `x` segundos, onde `x` é um número inteiro 
digitado pelo usuário no formulário.

Quando o usuário clicar no botão, o contador deve começar a contar, e a imagem deve ser trocada dali `x` segundos.

**Importante:** Você precisa colocar `return false` dentro da tag `form`, para evitar que a página seja recarregada
quando o usuário clicar no botão:

```html
<form onsubmit="return false">
    <!-- coloque aqui o botão e o input text -->
</form>
```

O gabarito desta atividade está [aqui](event_listener.html).

## Referências

* [Event Listener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) (em inglês)
* [Como chamar uma função de x em x milisegundos](https://stackoverflow.com/a/2170924/2202739) (em inglês)