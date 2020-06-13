// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

function first(str) {
  return str.toUpperCase();
}

function second(str) {
  return str.charAt(0);
}

function third(str1, str2) {
  return str1.concat(str2);
}

describe('Exercise 4', () => {
  describe('First function', () => {
    first = jest.fn().mockImplementation((str) => str.toLowerCase());
    test('How it returned', () => {
      expect(first('LOVE')).toBe('love');
    });
    test('Test whether the function was called', () => {
      expect(first).toHaveBeenCalled();
    });
    test('How many times it was called', () => {
      expect(first).toHaveBeenCalledTimes(1);
    });
    test('The function was called with the right parameters', () => {
      expect(first).toHaveBeenCalledWith('LOVE');
    });
  });
  describe('Second function', () => {
    second = jest.fn().mockImplementation((str) => str.charAt(str.length - 1));
    test('How it returned', () => {
      expect(second('love')).toBe('e');
    });
    test('Test whether the function was called', () => {
      expect(second).toHaveBeenCalled();
    });
    test('How many times it was called', () => {
      expect(second).toHaveBeenCalledTimes(1);
    });
    test('The function was called with the right parameters', () => {
      expect(second).toHaveBeenCalledWith('love');
    });
  });
  describe('Third function', () => {
    third = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
    test('How it returned', () => {
      expect(third('I', 'Love', 'You')).toBe('ILoveYou');
    });
    test('Test whether the function was called', () => {
      expect(third).toHaveBeenCalled();
    });
    test('How many times it was called', () => {
      expect(third).toHaveBeenCalledTimes(1);
    });
    test('The function was called with the right parameters', () => {
      expect(third).toHaveBeenCalledWith('I', 'Love', 'You');
    });
  });
});
