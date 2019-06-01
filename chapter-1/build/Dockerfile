FROM node:8.16.0-alpine

COPY package.json .

RUN npm install

COPY index.js .

EXPOSE 8080

CMD node index.js
