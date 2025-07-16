# Divs

`<div>` é um contâiner genérico HTML, sem semântica, e que serve para organizar os elementos dentro de si. Ele não é renderizado propriamente no HTML, mas agrupa elementos renderizáveis:

```html
<div>
	<h1>Título</h1>
	<p>Introdução do site...</p>
</div>
```

Existem outros contâineres com semântica, que podem ser utilizados para melhor organizar um site:

| Tag         | Finalidade                                                                 |
|-------------|----------------------------------------------------------------------------|
| `<section>` | Uma seção independente com um **tema ou propósito específico**.           |
| `<article>` | Conteúdo **independente e autoexplicativo**, como posts ou notícias.     |
| `<header>`  | Conteúdo introdutório, normalmente contém **logotipo, navegação, títulos**.|
| `<footer>`  | Rodapé de uma seção ou da página inteira; contém **links, créditos** etc.|
| `<main>`    | O **conteúdo principal** do documento (deve ser único por página).        |
| `<aside>`   | Conteúdo complementar ou lateral (ex.: **dicas, links relacionados**).    |
| `<nav>`     | Bloco de **links de navegação** (menu, breadcrumb, etc.).                |
| `<figure>`  | Conteúdo autoexplicativo, como **imagens, gráficos**, geralmente com `<figcaption>`. |
| `<fieldset>`| Agrupa **controles de formulário** relacionados.                         |
