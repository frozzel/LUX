FROM node:14 
WORKDIR /client
COPY package.json . 
RUN npm install
COPY . .

EXPOSE 80

RUN npm run build



CMD ["npm", "start"]