FROM node:8.16.0-alpine

COPY .eslintrc.yml .
COPY package.json .

RUN npm install

COPY index.js .

RUN ./node_modules/.bin/eslint index.js

EXPOSE 8080

CMD node index.js
