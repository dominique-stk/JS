var idadePrimeiraPessoa = 18
var idadeSegundaPessoa = 7


if( idadePrimeiraPessoa >= 18 && idadeSegundaPessoa < 18){
    console.log(`Você te mais de 18 anos e já pode dirigir, \nPessoa mais velha com a idade de ${idadePrimeiraPessoa}, Segunda pessoa ainda é de menor e legalmente não pode dirigir, ${idadeSegundaPessoa}`)
}

else if(idadeSegundaPessoa >= 18 &&  idadePrimeiraPessoa < 18){
    console.log(`Você te mais de 18 anos e já pode dirigir, \nPessoa mais velha com a idade de ${idadeSegundaPessoa}, Segunda pessoa ainda é de menor e legalmente não pode dirigir, ${idadePrimeiraPessoa}`)
}

else if (idadePrimeiraPessoa >= 18 && idadeSegundaPessoa >= 18){
    console.log(`As duas pessoas estão aptas para Dirigir, Dirija com cuidado <3`)
}

else if ( idadePrimeiraPessoa < 18 && idadeSegundaPessoa < 18){
    console.log(`As duas pessoas não estão aptas a dirigir pois são de menor idade :c`)
}

else {
    console.log(`Erro interno!!!!!!!!!!!!!!!!!!!`)
}


// 30 min