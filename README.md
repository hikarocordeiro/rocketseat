# Backend

### Pré-requisitos

É recomendado utilizar o yarn para a instalação do projeto e os seguintes serviços já configurados:

* [MongoDB](https://www.mongodb.com/)
* [Redis](https://redis.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Sentry](https://sentry.io/)

Além dos items acima, você também irá precisar de um serviço de email disponível.

### Instalando

Para instalar o sistema é necessário seguir os passos abaixo:

Efetuar o checkout do projeto, entrar no diretorio e executar o comando para instalar as dependencias:

```
yarn install
```

Renomear o arquivo .env.example para .env e editar o arquivo colocando as informações necessárias.

Após tudo configurado, deverá rodar as migrations:

```
yarn sequelize db:migrate
```

E os seeds:

```
yarn sequelize db:seed:all
```

### Executando

O sistema poderá ser executado em modo de desenvolvimento com o comando abaixo:

```
yarn dev
```

Ou pode gerar uma build com o comando abaixo:

```
yarn build
```

E executar a build:

```
yarn start
```

Para iniciar o servidor de email é necessário abrir um novo terminal e executar o comando:

```
yarn queue
```

---

# Frontend

### Pré-requisitos

É recomendado utilizar o yarn para a instalação do projeto

### Instalando

Para instalar o sistema é necessário seguir os passos abaixo:

Efetuar o checkout do projeto, entrar no diretorio e executar o comando para instalar as dependencias:

```
yarn install
```

Renomear o arquivo .env.example para .env e editar o arquivo colocando as informações necessárias.

### Executando

O sistema poderá ser executado com o comando abaixo:

```
yarn start
```

o projeto poderá ser acessado em localhost na porta 3000

---

# Mobile

Esta versão foi projetada para Android.

### Pré-requisitos

É recomendado utilizar o yarn para a instalação do projeto

### Instalando
Para instalar o sistema é necessário seguir os passos abaixo:

Efetuar o checkout do projeto, entrar no diretorio e executar o comando para instalar as dependencias:

```
yarn install
```

Renomear o arquivo .env.example para .env e editar o arquivo colocando as informações necessárias.

inicializar a aplicação web com o comando abaixo:

```
yarn react-native run-android
```

### Executando

Para executar o app, caso o metro bundler não tenha inicializado automaticamente, abrir um novo terminal e executar o comando:

```
yarn react-native start
```






