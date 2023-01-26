# FROM nginx:latest
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY default.conf /etc/nginx/conf.d/default.conf
# COPY public/index.html /usr/share/nginx/html/index.html
# EXPOSE 3000


FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
