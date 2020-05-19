/* Suponha que você precise simular uma mensagem enviada do robô Curiosity 
de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual 
em Marte, gastando um tempo variável de até 5 segundos para que termine o envio.
Crie a função sendMarsTemperature, que imprime a temperatura em Marte. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () =>
  `Mars temperature is: ${getMarsTemperature()} degree Celsius`

console.log(sendMarsTemperature()); // imprime sincronamente

setTimeout(() => { console.log(sendMarsTemperature()) }, messageDelay()); // imprime assincronamente

//---------------------------------
/* Agora que você fez a função que envia a temperatura de Marte, suponha que você 
consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com 
sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um 
callback que contenha as ações a serem tomadas em cima da temperatura. */

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (callback) => callback(getMarsTemperature());

// imprime sincrononamente
sendMarsTemperature(temperatureInFahrenheit); 
sendMarsTemperature(greet);
// imprime assincronamente 
setTimeout(() => {sendMarsTemperature(temperatureInFahrenheit)}, messageDelay()); 
setTimeout(() => {sendMarsTemperature(greet)}, messageDelay());
