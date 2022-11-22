FROM node:19.1-alpine

WORKDIR /app

COPY package*.json ./
COPY src/ ./src

# RUN mkdir /myvol
RUN npm i

ENV PORT=8000

# VOLUME /myvol

# EXPOSE 8000/tcp
# EXPOSE 8000/udp

# Этот скрипт содержит в себе запуск через nodemon с флагом -L - это одна из составляющих разработки без пересборки контейнера
CMD [ "npm", "run", "dev" ]