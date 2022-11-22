const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

console.log(process.env)
console.log(`http://localhost:${PORT}`)

app.listen(PORT);
