/*
    Тут я использую процедурный подход.
    Потому что так код выглядить компактнее и есть возможность переиспользовать его в одной строчке. 
*/

const count = 1;

function tableMultiplication(n, i=1) {
  if(i > 10) return -1;
  console.log(`${n} * ${i} = ${n * i}`);
  return tableMultiplication(n, i + 1);
}

tableMultiplication(count);
