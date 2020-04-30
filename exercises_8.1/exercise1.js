// const fatorial = n => {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return (n * fatorial(n - 1));
//   }
// }

const fatorial = n => { 
  let result = 1;
  //i começa com o valor n e vai decrementando até chegar em 1
  for(let i = n; i > 1; i--){
    result = result * i;
  }
  return result;
}

console.log(fatorial(1));



