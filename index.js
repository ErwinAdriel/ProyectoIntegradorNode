import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
    res.send('/pong');
})

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido</h1>');
})

app.get('/usuarios', (req, res) => {
    res.send([
        {name: 'Adriel', edad: 25},
        {name: 'Sofia', edad: 21}
    ]);
})

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000/ping');
})