# Introdução

## Princípios da Internet

A **Internet** é uma rede global de computadores conectados entre si. Ela permite que dispositivos troquem dados e
compartilhem recursos por meio de protocolos de comunicação padronizados.

A origem da Internet remonta aos anos 1960, quando pesquisadores financiados pelo Departamento de Defesa dos Estados
Unidos desenvolveram uma rede experimental chamada **ARPANET**. O objetivo era criar um sistema de comunicação
resiliente entre centros de pesquisa e universidades.

Com o tempo, essa rede evoluiu e se expandiu, incorporando novas tecnologias e protocolos, até se tornar a
infraestrutura global que conhecemos hoje.

## Internet vs Web

Muitas vezes os termos **Internet** e **Web** são usados como sinônimos, mas eles não significam o mesmo.

**Internet**

* Infraestrutura de rede que conecta computadores no mundo inteiro.
* Permite diversos tipos de serviços e protocolos.

**Web (World Wide Web)**

* Sistema criado para facilitar o acesso às informações disponíveis na Internet.
* Baseia-se em documentos interligados acessados por navegadores.

A Web foi proposta em 1989 pelo cientista Tim Berners-Lee, com a ideia de facilitar o compartilhamento de documentos
científicos entre pesquisadores.

## O protocolo HTTP

A comunicação entre navegadores e servidores web ocorre principalmente através do protocolo **HTTP**.

HTTP significa **Hypertext Transfer Protocol** e define como os documentos da Web são solicitados e enviados entre
cliente e servidor.

Existe também uma versão segura do protocolo, **HTTPS**, que seria HTTP com criptografia, protegendo os dados
transmitidos entre usuário e servidor.

Hoje em dia praticamente todos os sites utilizam HTTPS.

## O que é uma página HTML

Uma **página HTML** é um arquivo de texto que contém instruções que o navegador interpreta para exibir conteúdo na tela.

Essas instruções são escritas em **HTML (HyperText Markup Language)**, uma linguagem de marcação utilizada para
estruturar documentos da Web.

Uma forma simples de entender HTML é imaginar uma **receita de bolo**:

* a receita descreve **como o bolo deve ser feito**
* o navegador lê o HTML e **monta a página**

## Estrutura básica de um documento HTML

Um documento HTML possui duas grandes partes:

**head**

Contém metadados da página, como:

* título
* codificação de caracteres
* links para arquivos CSS
* scripts

**body**

Contém o conteúdo visível da página.

Exemplo mínimo de página HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Olá mundo</title>
</head>
<body>
<h1>Olá mundo!</h1>
<p>Sou uma página HTML.</p>
</body>
</html>
```

O elemento `<!DOCTYPE html>` indica ao navegador que o documento segue o padrão **HTML5**.

## HTML não é uma linguagem de programação

É importante entender que **HTML não é uma linguagem de programação**.

HTML é uma **linguagem de marcação**, usada para estruturar conteúdo.

Ela não possui:

* estruturas de controle
* lógica condicional
* variáveis
* algoritmos

Essas funcionalidades são fornecidas por linguagens de programação utilizadas na Web, como **JavaScript**.

## Estilo das páginas: CSS

Enquanto o HTML define a **estrutura da página**, o **CSS (Cascading Style Sheets)** define a **aparência visual**.

Com CSS é possível controlar:

* cores
* fontes
* espaçamento
* posicionamento de elementos
* layout da página

A boa prática moderna é **separar estrutura e estilo**:

* HTML → conteúdo
* CSS → apresentação

## Exemplo de HTML antigo (não recomendado)

Nas primeiras versões da Web, era comum misturar estilo diretamente dentro do HTML.

```html

<html>
<body bgcolor="#FFFFCC">
<center>
    <font face="Arial" size="5" color="blue">
        <b>Bem-vindo!</b>
    </font>
</center>

<p align="right">
    <font size="4" color="red">
        Seja bem vindo à <b>minha página</b>, espero que você <i>goste muito!</i>
    </font>
</p>

</body>
</html>
```

Esse estilo de código hoje é considerado **má prática**, pois mistura estrutura e apresentação.

## HTML moderno com CSS

Versão moderna utilizando separação entre HTML e CSS.

### styles.css

```css
body {
    background-color: #FFFFCC;
}

h1 {
    font-family: Arial;
    color: blue;
}

p {
    color: red;
}

header {
    display: flex;
    justify-content: center;
}

main {
    display: flex;
    justify-content: flex-end;
}
```

### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <title>Bem-vindo</title>
</head>

<body>

<header>
    <h1>Bem-vindo!</h1>
</header>

<main>
    <p>Seja bem vindo à <strong>minha página</strong>, espero que você <em>goste muito!</em></p>
</main>

</body>
</html>
```

Essa abordagem torna o código:

* mais organizado
* mais reutilizável
* mais fácil de manter

## Compatibilidade de navegadores

Navegadores modernos são bastante tolerantes com erros de HTML. Mesmo quando o código não segue perfeitamente os
padrões, eles tentam interpretar e renderizar a página da melhor forma possível.

Apesar disso, é recomendável:

* seguir padrões modernos
* utilizar HTML5
* separar HTML, CSS e JavaScript
* escrever código semântico e organizado

## Curiosidade histórica

Um exemplo famoso de site antigo da Web é:

[https://www.spacejam.com/1996/](https://www.spacejam.com/1996/)

Ele mostra como eram muitas páginas da Web na década de 1990, com:

* layouts simples
* uso intenso de imagens
* estilos diretamente no HTML

É praticamente um **fóssil digital da Web 1.0**.