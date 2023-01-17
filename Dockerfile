FROM node:16-alpine

RUN mkdir -p /src

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

