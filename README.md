# 🕹️ Detona Ralph - Jogo de Arcade (Web)

Este projeto é um jogo de navegador inspirado no clássico "Detona Ralph". Ele foi desenvolvido para praticar conceitos de **Front-end** e **DevOps**, unindo lógica de programação com infraestrutura de containers.

## 🚀 Tecnologias e Conceitos

* **HTML5 & CSS3**: Estruturação semântica e estilização avançada com animações e efeito **Parallax**.
* **JavaScript (ES6)**: Gerenciamento de estado (`state`), manipulação de DOM e lógica de intervalos de tempo.
* **Docker**: Conteinerização da aplicação utilizando a imagem `nginx:alpine` para alta performance e leveza.

## 🎮 Funcionalidades

### 1. Dificuldade Progressiva

A cada **5 pontos** marcados, a velocidade do jogo aumenta em **100ms**. Isso é controlado via `clearInterval` e um novo `setInterval` no motor do jogo.

### 2. Interface Arcade (UI)

* **Score & Timer**: Acompanhamento em tempo real da pontuação e do tempo restante.
* **Vidas**: O ícone do **Felix** no cabeçalho serve como um botão de reset rápido para a fase.
* **Game Over**: Uma tela personalizada que substitui os alertas padrão do navegador, trazendo mais imersão.

## 📂 Estrutura do Projeto

Abaixo está a árvore de diretórios organizada no ambiente **Mac mini M4**:

```text
.
├── Dockerfile          # Configuração do container Nginx
├── index.html          # Estrutura e Modal de fim de jogo
├── script.js           # Lógica, som e dificuldade
├── style.css           # Estilos e animações Parallax
└── src/                # Ativos do projeto
    ├── audios/         # Efeito sonoro hit.m4a
    └── images/         # Sprites (Ralph, Felix, Tijolos)

```

## 🐳 Como Rodar com Docker

Para subir o projeto localmente como um Técnico de Redes:

* Construir a imagem:

```bash
docker build -t detona-ralph .
```

* Rodar o container:

```bash
docker run -d -p 8080:80 --name jogo-ralph detona-ralph
```

* Acessar: Navegue até <http://localhost:8080> no seu navegador.

### Desenvolvido por Cristiano, técnico em redes do SENAI São Caetano
