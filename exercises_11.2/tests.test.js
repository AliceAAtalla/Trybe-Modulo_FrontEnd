/* 
* Crie uma função que gere um número aleatório entre 0 e 100. 
*/
function randomNumber() {
  return Math.floor(Math.random() * 101);
}

/*  
* Você irá criar também os testes para essa função. 
* Utilizando o mock, defina o retorno padrão como 10. 
* Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
* Com a mesma função do exercício anterior, utilizando o mock, crie uma nova
* implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo
* segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
* Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova 
* implementação que receba três parâmetros e retorne sua multiplicação. 
* Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, 
* que receba um parâmetro e retorne seu dobro. Faça os testes necessários.
*/

describe("Mock function randomNumber()", () => {
  describe("Exercise 1", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    test("How it returned", () => {
      expect(randomNumber()).toBe(10);
    });
    test("Test whether the function was called", () => {
      expect(randomNumber).toHaveBeenCalled();
    });
    test("How many times it was called", () => {
      expect(randomNumber).toHaveBeenCalledTimes(1);
    })
  });
});
