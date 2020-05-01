const longestWord = frase => {
  let palavra = frase.split(" ");
  let maiorPalavra = 0;
  let result = maiorPalavra;
  for(let i = 0; i < palavra.length; i += 1){
    if(palavra[i].length > maiorPalavra) {
      result = palavra[i];
    }
  }
  return result;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
