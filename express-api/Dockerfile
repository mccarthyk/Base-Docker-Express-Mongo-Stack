FROM node:12.18.4
RUN npm i -g nodemon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD [ "node", "." ]