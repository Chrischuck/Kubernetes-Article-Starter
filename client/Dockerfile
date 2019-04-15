FROM node:10.15.3-alpine

ADD . /app
WORKDIR /app

ENV API_URI=http://localhost:3000

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm" "run" "start"]