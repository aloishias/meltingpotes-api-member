<h1 align="center">Welcome to meltingpotes-api-member 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/alois__h" target="_blank">
    <img alt="Twitter: alois\_\_" src="https://img.shields.io/twitter/follow/alois__h.svg?style=social" />
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

# Install API:

```bash
git clone https://gitlab.com/meltingpotes/api-member.git
cd api-member
npm i
```

# InstalL PostgreSQL on OSX

## Installation:
```bash
brew install postgresql
brew services start postgresql
psql postgres
```

### Create the database and role:
```sql
CREATE ROLE developper WITH LOGIN PASSWORD 'developper';
ALTER ROLE developper CREATEDB;
CREATE DATABASE memberdb;
GRANT ALL PRIVILEGES ON DATABASE memberdb TO developper;

CREATE DATABASE memberdb;
```

### Connection to DB:
```slq
psql -d memberdb -U developper;
```


# Create it from scratch

### Install node & npm:

```bash
brew install node
brew install npm
```

### Install express & pg-promise:

```bash
npm install --save express
npm install --save sequelize
npm install --save pg pg-hstore
```

### Generate docker image and push it to docker hub:
```docker
docker login
docker build -t aloishias/api-member .
docker push aloishias/api-member
```


### Liens:

https://sequelize.org/v5/manual/getting-started.html



## Author

👤 **Aloïs HIAS**

* Twitter: [@alois__h](https://twitter.com/alois__h)
* Github: [@aloishias](https://github.com/aloishias)
* LinkedIn: [@aloïs-hias-40572613b](https://linkedin.com/in/aloïs-hias-40572613b)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
