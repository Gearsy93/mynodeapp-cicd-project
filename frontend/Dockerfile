FROM node:23-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY index.html .
COPY server.js .

ENV PRODUCTS_SERVICE="products-app-1"
ENV SHOPPING_CART_SERVICE="shopping-cart-app-1"

EXPOSE 3100
CMD ["npm", "start"]
