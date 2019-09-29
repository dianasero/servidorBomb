const express = require('express')
const app = express();
let controlMaq1 = false, controlMaq2 = true;
app.get('/', (req, res) => {
  res.send('Hello Diana ')
});
app.get('/apagado', (req, res) => {
	controlMaq1 = false;
  res.send('0')
});
app.get('/apagado2', (req, res) => {
	controlMaq2 = false;
  res.send('0')
});
app.get('/encendido', (req, res) => {
	controlMaq1 = true;
  res.send('1')
});
app.get('/encendido2', (req, res) => {
	controlMaq2 = true;
  res.send('1')
});
app.get('/consulta', (req, res) => {
  res.send(controlMaq1+" "+controlMaq2)
});
app.get('/RutaDats/:datos', (req, res) => {//Datos variable que se leee
  res.send('Datos leido: '+ req.params.datos)
});
// app.listen(8000, () => {
//   console.log('Example app listening on port 8000!')
// });
let port = process.env.PORT;
if(port == null || port == ""){
	port = 8000;
}
app.listen(process.env.PORT || 5000||port)
