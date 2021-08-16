//Permiten repetir instrucciones sencillas. 

// for (let i = 0; i<=5; i++){
//     console.log(i)
// }


function noParesDeContarImparesHasta(numero){
    let contador = 0;
    for (let i=0; i<=numero; i++){
        if (i%2!=0){
            contador = contador+1
        }
    }
    return contador
}

console.log(noParesDeContarImparesHasta(5))