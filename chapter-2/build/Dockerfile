FROM node:8.16.0-alpine

RUN npm i -g @babel/node @babel/core

COPY webpack.config.js .
COPY .babelrc .

COPY package.json .

RUN npm install

ADD src src

EXPOSE 8080

CMD npm run start
