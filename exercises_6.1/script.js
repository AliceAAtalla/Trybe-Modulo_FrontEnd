let opEstados = [
  'São Paulo',
  'Rio de Janeiro',
  'Mato Grosso do Sul'
];

for (let i = 0; i < opEstados.length; i+=1) {
  let estados = document.querySelector('#estados');
  estados.appendChild(opEstados);
}


