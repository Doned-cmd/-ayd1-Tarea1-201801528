const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

app.post('/Calculadora', (req, res) => {
  const num1 = req.body.numero1;
  const num2 = req.body.numero2;
  const suma = num1+num2
  res.send({suma});
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});