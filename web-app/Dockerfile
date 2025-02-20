FROM node:18-alpine

WORKDIR /home/brickdev/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "app.js"]
