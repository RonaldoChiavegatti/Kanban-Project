# Documentação do Projeto Kanban

## Índice

1. [Visão Geral](#visão-geral)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Arquitetura do Projeto](#arquitetura-do-projeto)
4. [Instalação e Configuração](#instalação-e-configuração)
5. [Uso da Aplicação](#uso-da-aplicação)
6. [Implementação](#implementação)
7. [Contribuição](#contribuição)
8. [Licença](#licença)

## Visão Geral

O projeto Kanban é uma aplicação web que permite aos usuários gerenciar tarefas de maneira eficiente, utilizando o método Kanban. Ele oferece uma interface intuitiva para criar, editar e mover tarefas entre diferentes colunas, facilitando o acompanhamento do progresso. Além disso, adicionei algumas features como a possibilidade de cada usuários criar diferentes boards, assim podendo organizar diferentes temas ao mesmo tempo.

## Tecnologias Utilizadas

- **Front-end**: Angular
- **Back-end**: NestJS
- **Banco de Dados**: MySQL (utilizando ClearDB no Heroku)
- **Hospedagem**: Heroku
- **Gerenciamento de Pacotes**: npm

## Arquitetura do Projeto

A aplicação é dividida em duas partes principais:

1. **Front-end (Angular)**: Responsável pela interface do usuário, permitindo que os usuários interajam com a aplicação.
2. **Back-end (NestJS)**: Responsável pela lógica de negócios, manipulação de dados e comunicação com o banco de dados.

### Estrutura de Pastas

```
/meu-projeto
  ├── /backend      (API em NestJS)
  └── /frontend     (Aplicação em Angular)
```

## Instalação e Configuração

### Pré-requisitos

- Node.js e npm instalados
- Conta no GitHub (para o controle de versão)
- Conta no Heroku (para hospedagem)

### Passo a Passo

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**:

   - Para o back-end:
     ```bash
     cd backend
     npm install
     ```

   - Para o front-end:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Configuração do Banco de Dados**:
   - Configure a variável de ambiente do banco de dados no back-end.

4. **Build do Front-end**:
   - Navegue até a pasta do front-end e crie um build de produção:
     ```bash
     ng build --prod
     ```

5. **Inicie o servidor**:
   - No back-end, inicie a API:
     ```bash
     cd ../backend
     npm run start:dev
     ```

## Uso da Aplicação

1. **Acessar a Aplicação**: Após a implantação, acesse sua aplicação no navegador através do URL fornecido pelo Heroku.

2. **Funcionalidades**:
   - Criar novos boards
   - Editar tarefas existentes
   - Mover tarefas entre diferentes colunas (Ex: To Do, In Progress, Done)
   - Excluir tarefas
   - Editar tarefas
   - Adicionar nova tarefa
   - Atualização em tempo real dos cards

## Implementação

### Back-end (NestJS)

- O back-end é estruturado em módulos, controladores e serviços.
- Módulo de autentificação de usuário
- Utiliza o TypeORM para interagir com o banco de dados MySQL.
- As rotas RESTful são implementadas para gerenciar as operações CRUD das tarefas.

### Front-end (Angular)

- O front-end utiliza componentes para modularizar a interface do usuário.
- Os serviços HTTP são utilizados para se comunicar com a API do back-end.
- O estado da aplicação é gerenciado utilizando serviços Angular.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do repositório, fazer suas alterações e abrir um pull request.

### Como Contribuir

1. Fork o repositório
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um pull request.
