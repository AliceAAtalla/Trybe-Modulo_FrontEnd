let optionEstados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espirito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Santa Catarina',
  'São Paulo',
]

let estados = document.getElementById('state');
// Opção para escolher o Estado de residencia
// método chama uma função uma vez para cada elemento em uma matriz, em ordem.
optionEstados.forEach(function (elemento) {
  estados.appendChild(new Option(elemento, elemento));// segundo elemento serve como value
});
//Select
$(document).ready(function () {
  $('select').formSelect();
});
//DataPicker
$(document).ready(function () {
  $('.datepicker').datepicker();
});
