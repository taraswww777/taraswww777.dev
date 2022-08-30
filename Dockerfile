FROM node:16.17.0
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# запускаем команду, когда запускается образ
CMD node dist/my-site/server/main.js
