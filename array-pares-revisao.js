const numeros = [2, 5, 7, 9, 10, 12, 15, 16];


function medias(array){
        let soma = 0
        for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0){
            soma++
        };
      }
    
    console.log("A quantidade de numeros pares desse array é "+soma)
}

medias(numeros)