FROM node:10

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm" "run" "start"]