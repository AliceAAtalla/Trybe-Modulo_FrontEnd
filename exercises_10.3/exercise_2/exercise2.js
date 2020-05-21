// 		Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise. Dentro dela, você deve produzir
// um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
// Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com
// qualquer coisa dentro só para que o código funcione.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem,
// como parâmetro, funções!

const squaredNumber = () => {
  const promise = new Promise((resolve, reject) => {
    const newArray = new Array(10);
    for (let i = 0; i < 10; i += 1) {
      newArray[i] = Math.pow(Math.floor(Math.random() * 50), 2);
    }
    const sumAll = newArray.reduce((acc, curr) => {
      return acc = acc + curr;
    }, 0);
    if (sumAll < 8000) return resolve(sumAll);
    return reject(sumAll);
  })

  promise
    .then(resultado => [2, 3, 5, 10].map(number => resultado / number))
    .then(sum => console.log(sum.reduce((acc, curr) => acc + curr, 0).toFixed(2)))
    .catch(error => console.log(`${error} é mais de oito mil! Essa promise deve estar quebrada!`))
}

squaredNumber()
