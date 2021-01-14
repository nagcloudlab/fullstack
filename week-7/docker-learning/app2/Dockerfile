FROM node:alpine
WORKDIR /app2

COPY ./package.json ./
RUN npm install

COPY . .

CMD ["npm","start"]
