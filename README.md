# Insights
Aplicação simples para gerenciamento de insights com conteúdo informativo sobre esportes.

## Pré-requisitos
Para usar este projeto, é necessário ter instalado em sua máquina:

- NodeJS
- MongoDB
- API de consumo: [Insights (Backend)](https://github.com/FelipeMenezesDM/insights-backend.git)

## Instalação
1. Após ter instalado a API do Insights, faça o clone deste projeto executando o comando abaixo no diretório de aplicações do seu servidor:
  ```bash
  git clone https://github.com/FelipeMenezesDM/insights.git
  ```
1. Acesse a raíz do projeto e copie o arquivo `.env.development`, alterando o nome da cópia para `.env` e deixando também na raíz do projeto.
1. Neste arquivo, faça os devidos ajustes na URL da API para consumo.
1. Execute o `npm install` e o `npm run serve`, ou `npm build`.

Após isso, a aplicação estará disponível na portal 8080 do seu servidor.

Você pode também acessar o repositório do docker configurado para a instalação automatizada e completa da aplicação: [Insights Docker](https://github.com/FelipeMenezesDM/insights-docker.git).
