const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

console.log(process.env)
console.log(`http://localhost:${PORT}`)

app.listen(PORT);

// docker rm pdfer-container (если останавливать через docker-compose down, то не понадобится)
// docker rmi pdfer-wtf:latest
// docker-compose up
// --build

// docker exec -it pdfer-container /bin/sh
// /bin/bash не сработает, так как alpine, видимо

// Добавь еще сюда команду как дев и прод композы запускать и собственно внедри это сюда. Прод - просто дефолтное название.