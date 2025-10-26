import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    res.send('/pong');
})

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000/ping');
})