FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
ENV MONGO_URI=mongodb+srv://tap-game:tap-game@tap-game.9t76uaa.mongodb.net/?retryWrites=true&w=majority
CMD ["npm", "start"]
