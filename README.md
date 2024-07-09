# Projeto Backend com NestJS e MongoDB Atlas

## Descrição

Este projeto é uma aplicação backend monolítica desenvolvida em NestJS que se conecta a um banco de dados MongoDB hospedado no Atlas. Com arquitetura robusta e escalável, o projeto é ideal para empresas do ramo automotivo, permitindo o cadastro e consulta de clientes, serviços e automóveis. A aplicação utiliza autenticação de usuário com JWT strategy e um microsserviço desacoplado para autenticação.

## Tecnologias Utilizadas
- Node.js (versão 18.15.11)
- NestJS
- MongoDB Atlas
- Docker
- TypeScript
- JWT Strategy

## Estrutura do Projeto

- **Backend**: Desenvolvido em NestJS
- **Banco de Dados**: MongoDB
- **Autenticação**: microsserviço com JWT Strategy

## Pré-requisitos

- Node.js (versão 18.15.11)
- npm (Node Package Manager)
- Nest CLI (versão 9.0.0)
- Docker e Docker Compose

### Instalação do Node.js e Nest CLI

Para instalar o Node.js e o Nest CLI, execute os seguintes comandos:
```bash
# Instale o Node.js (caso não tenha)
# Para sistemas baseados em Debian/Ubuntu:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Para sistemas baseados em Red Hat/CentOS:
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Instale o Nest CLI globalmente
npm install -g @nestjs/cli@^9.0.0

# Instale as dependências:
npm install
```

## Comandos Úteis

Para rodar o projeto em modo de desenvolvimento:
```bash
npm run start:dev
```

Para fazer o build do projeto:
```bash
npm run build
```

Para rodar o projeto em produção:
```bash
npm run start:prod
```

