FROM node:10

RUN mkdir -p /usr/app

COPY ./server /usr/app/server
COPY ./dist /usr/app/dist

WORKDIR /usr/app/server

RUN npm install

EXPOSE 8099

CMD [ "npm", "start" ]
