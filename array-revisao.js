const numeros = [2, 5, 7, 9, 10];


function medias(array){
    let media = 0
    let soma = 0
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
      }
    media = soma / array.length;
    console.log("A media dos numeros desse array é "+media)
}

medias(numeros)
