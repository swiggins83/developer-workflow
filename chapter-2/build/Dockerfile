FROM node:8.16.0-alpine

RUN npm i -g @babel/node @babel/core

COPY package.json .

RUN npm install

COPY webpack.config.js .
COPY .babelrc .

ADD src src

EXPOSE 8080

CMD npm run start
