<h1 align="center">Welcome to meltingpotes-api-member 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/alois\_\_" target="_blank">
    <img alt="Twitter: alois\_\_" src="https://img.shields.io/twitter/follow/alois\_\_.svg?style=social" />
  </a>
</p>

> API Rest member of meltingpotes project. NodeJS, ExpressJS and Sequelize

### 🏠 [Homepage](https://gitlab.com/meltingpotes/api-publication#readme)

## Install

```sh
npm i
```

## Usage

```sh
npm run start
```

# api-publication

![Gif de la bonne humeur](https://media1.tenor.com/images/f72cb542d6b3e3c3421889e0a3d9628d/tenor.gif?itemid=4533805)

# Installer l'API Rest

```bash
git clone https://gitlab.com/meltingpotes/api-member.git
cd api-member
npm i
```

# Installer la BDD PostgreSQL

## Installation:
```bash
brew install postgresql
brew services start postgresql
psql postgres
```

### Créé la base de donnée publicationdb et l'utilisateur developper:
```sql
CREATE ROLE developper WITH LOGIN PASSWORD 'developper';
ALTER ROLE developper CREATEDB;
CREATE DATABASE memberdb;
GRANT ALL PRIVILEGES ON DATABASE memberdb TO developper;

CREATE DATABASE memberdb;
```

### Connexion à la base publicationdb avec l'utilisateur developper:
```slq
psql -d memberdb -U developper;
```


# La développer from scratch

### Installer node & npm:

```bash
brew install node
brew install npm
```

### Installer express & pg-promise:

```bash
npm install --save express
npm install --save sequelize
npm install --save pg pg-hstore
```

### Générer une image docker et la push sur le containeur registry de gitlab:
```docker
docker login registry.gitlab.com -u aloishias
docker build -t registry.gitlab.com/meltingpotes/api-member .
docker push registry.gitlab.com/meltingpotes/api-member
```


### Liens:

https://sequelize.org/v5/manual/getting-started.html



## Author

👤 **Aloïs HIAS**

* Twitter: [@alois\_\_](https://twitter.com/alois\_\_)
* Github: [@aloishias](https://github.com/aloishias)
* LinkedIn: [@aloïs-hias-40572613b](https://linkedin.com/in/aloïs-hias-40572613b)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_