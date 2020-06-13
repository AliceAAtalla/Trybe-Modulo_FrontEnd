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

let select = document.getElementById('select');
// Opção para escolher o Estado de residencia
// método executa uma dada função em cada elemento de um array.
optionEstados.forEach(function (objeto) {
  select.appendChild(new Option(objeto, objeto));// segundo elemento serve como value
});

// Eventos ao clicar no botão enviar
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', function (event) { // event é o btnEnviar
  verificar();// chama a função que verifica a data
  curriculo();// chama a função que cria o curriculo 
  event.preventDefault();// Cancela o evento se for cancelável, sem parar a propagação do mesm
});

// Verifica se a data esta dentro do exigido
function verificar() {
  let inpDate = document.querySelector('#inpDate');
  let dateArray = inpDate.value.split('/');// separa o valor em objeto quando encontrar um '/'
  //dia tem indice 0, mes indice 1 e ano indice 2
  if (dateArray[0] < 1 || dateArray[0] > 31) {
    alert('fail');
  } else if (dateArray[1] < 1 || dateArray[1] > 12) {
    alert('fail month');
  } else if (dateArray[2] < 0) {
    alert('fail year');
  }
}
// Radio Button mostra no curriculo apenas o selecionado
function radios() {
  let tipos = document.getElementsByName('tipo');
  for (let i = 0; i < tipos.length; i += 1) {
    if (tipos[i].checked) {
      tipos[i].classList.add('curriculo');
    }
  }
}
// Mostra um curriculo com todas as informações digitadas
function curriculo() {
  let div = document.getElementById('divCurriculo');
  // Eu apenas crio se não existir nenhuma div com o id divCurriculo
  if (div == null) {
    let divCurriculo = document.createElement('div');
    divCurriculo.id = 'divCurriculo';
    let dadosCurriculo = document.getElementsByClassName('curriculo');
    for (let i = 0; i < dadosCurriculo.length; i += 1) {
      let paragrafo = document.createElement('p');
      divCurriculo.appendChild(paragrafo);
      paragrafo.innerHTML = dadosCurriculo[i].value;
      radios();// Chamo a função e adiciono a opção do radio button na ordem correta
    }
    document.body.appendChild(divCurriculo);
  }
  else {
    div.remove();// Caso a div exista então removo
    curriculo();// e então adiciono o novo curriculo
  }
}
//Caso exista uma divCurriculo então excluo ao apertar no reset
let btnReset = document.querySelector('#reset');
btnReset.addEventListener('click', function () {
  let div = document.getElementById('divCurriculo');
  if (div !== null) {// se a div existir
    div.remove();// removo ela também junto com o valor dos inputs
  }
});
