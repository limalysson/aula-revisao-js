const numeros = [2, 5, 7, 9, 10];


function somas(array){
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
      }
    console.log(`A soma dos numeros do array é ${soma}`)
    }

somas(numeros)