# Cookies

Nesta atividade, você deve criar uma página HTML que contenha:

* Título
* Um parágrafo com um texto explicativo do que a página faz
* Um formulário (tag `form`), contendo:
  * Um rótulo (tag `label`) 
  * Três entradas de texto (tag `input`), cada uma com id definido;
  * Três botões (tag `button`), com ids definidos;
* CSS interno (opcional)

Não se esqueça de colocar `onsubmit="return false"` dentro da tag `form`! (Senão a página HTML irá sempre ser atualizada
quando você clicar em um dos botões, e será impossível fazer o exercício)

Você terá que definir também três funções em Javascript:

* Uma que salva um cookie;
* Uma que recupera todos os cookies salvos;
* Uma que recupera um cookie em específico.

As caixas de texto devem ter o seguinte comportamento:

**Entrada:**

* Em uma delas, o usuário digitará o **nome** do cookie;
* Em outra, o **valor** do cookie;
* Um dos botões irá **salvar** o cookie no navegador.

**Saída:**

* Um dos botões irá abrir uma janela (`window.alert`) mostrando todos os cookies armazenados no navegador;
* Outro botão irá abrir uma janela (`window.alert`) mostrando apenas o cookie que o usuário quiser recuperar (use a caixa
  de texto com o nome do cookie para isto).

## Estrutura dos cookies

### Armazenando cookies

Os cookies são armazenados no navegador da seguinte maneira:

```javascript
document.cookie = "username=henry"
```

`username` é o **nome** do cookie, enquanto `henry` é o **valor** do cookie. Podemos também definir propriedades 
adicionais ao cookie com `;`:

```javascript
"username=henry; expires=Thu, 28 Nov 2022 23:59:59 UTC; path=/;"
```

Onde `expires` é a data em que o cookie irá vencer (ou seja, será apagado do navegador) e `path` é o local no navegador
onde o cookie será armazenado. Se uma data em `expires` for menor que a data atual, ou se `expires` não for definido,
o cookie irá vencer tão logo você atualize a página, ou feche o navegador.

### Deletando cookies

Para deletar um cookie, simplesmente defina uma data de expiração menor que a data atual:

```javascript
"username=henry; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
```

### Definindo data de vencimento

Use a função abaixo para converter uma quantidade de dias na string que irá ser inserida junto com o cookie:

```javascript
function formataDataVencimento(dias) {
    const d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    return "expires=" + d.toUTCString();
}
```

## Referências

Material adaptado do w3schools: https://www.w3schools.com/js/js_cookies.asp