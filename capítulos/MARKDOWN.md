# Markdown

Markdown é uma linguagem de marcação leve usada para formatar texto de maneira simples e legível. Ela foi criada para
permitir que documentos fossem escritos em texto puro, mas ainda assim pudessem ser convertidos facilmente para HTML ou
outros formatos.

Hoje, Markdown é amplamente utilizado em plataformas de desenvolvimento como GitHub, documentação técnica, fóruns e
sistemas de publicação.

Suas principais características incluem:

* fácil de aprender
* legível como texto puro
* compatível com muitas plataformas
* ideal para documentação
* integração direta com ferramentas de desenvolvimento

## Origem do Markdown

Markdown foi criado em 2004 por **John Gruber**, com a colaboração de **Aaron Swartz**.

O objetivo era simples: permitir que pessoas escrevessem documentos estruturados usando **texto fácil de ler**, sem a
complexidade do HTML.

Um princípio central do Markdown é: **O texto deve ser legível mesmo antes de ser renderizado.** Isso significa que um 
arquivo Markdown pode ser lido facilmente mesmo em um editor de texto simples.

## Onde Markdown é usado

Markdown é comum em ambientes de desenvolvimento e documentação. Alguns exemplos incluem:

* arquivos `README.md` em repositórios (como esse que você está lendo!)
* documentação técnica
* sistemas de blog
* fóruns técnicos
* anotações pessoais
* sistemas de publicação estática

Plataformas populares que utilizam Markdown incluem:

* GitHub
* GitLab
* Notion
* Obsidian
* Stack Overflow

## Estrutura básica

Um arquivo Markdown normalmente possui a extensão `.md`. O conteúdo é texto simples com alguns símbolos especiais 
que indicam formatação.

Exemplo:

```markdown
# Meu documento

Este é um parágrafo de texto.

## Subtítulo

Outro parágrafo.
```

Quando renderizado, esse texto se torna uma página estruturada com títulos e parágrafos.

## Títulos

Títulos são criados usando o caractere `#`.

```markdown
# Título nível 1

## Título nível 2

### Título nível 3

#### Título nível 4
```

Quanto mais símbolos `#`, menor o nível do título.

## Parágrafos e quebras de linha

Parágrafos são separados por uma linha em branco.

```markdown
Este é um parágrafo.

Este é outro parágrafo.
```

## Ênfase no texto

Markdown permite destacar palavras usando alguns símbolos simples.

### Itálico

```markdown
*texto em itálico*
```

ou

```markdown
_texto em itálico_
```

### Negrito

```markdown
**texto em negrito**
```

### Negrito + itálico

```markdown
***texto em destaque***
```

## Listas

## Lista não ordenada

```markdown
- item 1
- item 2
- item 3
```

Resultado:

* item 1
* item 2
* item 3

## Lista ordenada

```markdown
1. primeiro item
2. segundo item
3. terceiro item
```

## Links

Links podem ser criados usando a seguinte sintaxe:

```markdown
[texto do link](https://example.com)
```

Exemplo:

```markdown
[Acesse o GitHub](https://github.com)
```

## Imagens

Imagens usam uma sintaxe semelhante à dos links.

```markdown
![texto alternativo](imagem.png)
```

Exemplo:

```markdown
![Logo](logo.png)
```

## Blocos de código

Trechos de código podem ser incluídos usando três crases.

````markdown
```
print("Olá mundo")
```
````

Também é possível especificar a linguagem para habilitar **syntax highlighting**.

````markdown
```python
print("Olá mundo")
```
````

## Código inline

Pequenos trechos de código dentro de uma frase podem ser escritos usando crases simples.

```markdown
Use o comando `git clone` para baixar o repositório.
```

## Citações

Citações são criadas usando o símbolo `>`.

```markdown
> Este é um exemplo de citação.
```

Resultado:

> Este é um exemplo de citação.

## Tabelas

Markdown também permite criar tabelas simples.

```markdown
| Linguagem  | Tipo        |
|------------|-------------|
| HTML       | marcação    |
| CSS        | estilo      |
| JavaScript | programação |
```

Resultado:

| Linguagem  | Tipo        |
|------------|-------------|
| HTML       | marcação    |
| CSS        | estilo      |
| JavaScript | programação |
