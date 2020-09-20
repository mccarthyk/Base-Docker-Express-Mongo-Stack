# Base Docker Express Mongo Stack

## Getting Started

### Install Docker

[https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### Clone Repository

`git clone https://github.com/mccarthyk/Base-Docker-Express-Mongo-Stack.git`

### Setup Environment

`cd` to cloned directory.

`mv .env.example .env`

### Docker Compose

`docker-compose up`

Listening: [http://localhost:3000](http://localhost:3000)

## Development

### Adding Dependencies

In a new terminal tab:

`docker-compose exec express-api sh`

\# `npm i axios`
