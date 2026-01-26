---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
title: Introdução à Construção de Páginas Web
---

![bg left:40% 80%](https://marp.app/assets/marp.svg)

# 🌐 Introdução à Construção de Páginas Web
  
Professor Henry Emanuel Leal Cagnini

---

# 🚀 Objetivos da Aula

- Compreender a diferença entre **Web** e **Internet**
- Conhecer os **primórdios da Internet e da Web**
- Entender a **estrutura básica de uma página web**
- Introduzir **HTML, CSS e JavaScript**
- Conhecer **frameworks** e **tipos de páginas (estáticas e dinâmicas)**

---

# 🌍 Internet x Web

| Internet                                | Web                                 |
|:----------------------------------------|:------------------------------------|
| Rede mundial de computadores conectados | Um serviço **dentro** da Internet   |
| Usa protocolos como TCP/IP              | Usa o protocolo HTTP/HTTPS          |
| Inclui e-mail, FTP, VoIP, etc.          | Baseada em hipertexto e navegadores |
| Surgiu antes da Web                     | Criada para compartilhar documentos |

---

# 🕰️ Primórdios da Internet

- Década de **1960** – ARPANET (EUA)
- Criada com fins **militares e acadêmicos**
- Conectava poucos computadores
- Usava **comutação de pacotes** para comunicação
- Evoluiu para a Internet moderna nos anos **1980-1990**

---

# 🌐 Primórdios da Web

- Criada por **Tim Berners-Lee** em **1990**
- Proposta de um sistema de **hipertexto** na Internet
- Componentes principais:
    - **HTML** – estrutura da informação
    - **HTTP** – protocolo de comunicação
    - **Browser** – navegador para visualizar conteúdo

---

# 📄 Estrutura de uma Página Web

Uma página web típica é composta por três camadas:

1. **HTML (HyperText Markup Language)** – estrutura e conteúdo
2. **CSS (Cascading Style Sheets)** – estilo e aparência
3. **JavaScript** – interatividade e comportamento

---

# 🧱 HTML – Estrutura

```html
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <title>Minha Página</title>
  </head>
  <body>
    <h1>Bem-vindo!</h1>
    <p>Esta é a minha primeira página web.</p>
  </body>
</html>
```

* Define títulos, parágrafos, imagens, links etc.
* É a espinha dorsal da página.

--- 

# 🎨 CSS - Estilo

```css
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #0077cc;
}
```

* Controla cores, fontes, margens, layout
* Separa a forma (design) do conteúdo (HTML)

---

# ⚙️ JavaScript – Interatividade

```html
<button onclick="alert('Olá, mundo!')">Clique aqui</button>
```

* Adiciona dinamismo e interação
* Pode modificar o HTML/CSS em tempo real
* Base da Web moderna (SPA, animações, formulários inteligentes)

--- 

# 🧩 Frameworks Web

## 🌈 Frontend

* React, Vue.js, Angular, Svelte
* Focam na interface do usuário
* Facilitam a criação de aplicações dinâmicas

## ⚙️ Backend

* Node.js, Django, Flask, Laravel, Spring Boot
* Lidam com banco de dados, lógica de negócios, autenticação

---

# 🔄 Diferença: Frontend x Backend

| Frontend                          | Backend                           |
|:----------------------------------|:----------------------------------|
| O que o usuário **vê e interage** | O que acontece **nos bastidores** |
| HTML, CSS, JavaScript             | Banco de dados, APIs, lógica      |
| Executado no **navegador**        | Executado no **servidor**         |
| Foco em **UX/UI**                 | Foco em **dados e segurança**     |

---

# 🧱 Páginas Estáticas x Dinâmicas

| Tipo         | Descrição                            | Exemplo                          |
|:-------------|:-------------------------------------|:---------------------------------|
| **Estática** | Conteúdo fixo, não muda sem reedição | Página institucional             |
| **Dinâmica** | Gerada pelo servidor ou JavaScript   | Redes sociais, blogs, e-commerce |

---

# ⚡ Exemplos Práticos

* Estática: HTML + CSS puro → hospedagem simples
* Dinâmica: Django, Node.js, ou React + API
* Híbrida: sites estáticos com componentes dinâmicos (e.g. Next.js)

---

# 🌱 Resumo

* A Internet é a rede; a Web é um serviço dentro dela
* A Web nasceu com Tim Berners-Lee em 1990
* Páginas Web combinam HTML, CSS e JavaScript
* Frameworks aceleram o desenvolvimento
* Há páginas estáticas e dinâmicas
