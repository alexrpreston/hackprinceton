FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install

RUN npm uninstall framer-motion
RUN npm install framer-motion@3.10.6

COPY ./src ./src

CMD ["npm", "start"]
