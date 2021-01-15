# stage1 as builder
FROM node:alpine as builder
WORKDIR './app'
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# stage2
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html



