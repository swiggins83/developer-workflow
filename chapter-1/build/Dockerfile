FROM node:8.16.0-alpine

COPY webpack.config.js .
COPY .eslintrc.yml .

COPY package.json .

RUN npm install

ADD src src

RUN npm run build

EXPOSE 8080

CMD node dist/bundle.js
