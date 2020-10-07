var idadePrimeira = 17
var idadeSegunda = 17


if( idadePrimeira >= 18 && idadeSegunda < 18)
{
    console.log(`Você te mais de 18 anos e já pode dirigir, \nPessoa mais velha com a idade de ${idadePrimeira}, Segunda pessoa ainda é de menor e legalmente não pode dirigir, ${idadeSegunda}`)
}


else if(idadeSegunda >=18 &&  idadePrimeira <18){
    console.log(`Você te mais de 18 anos e já pode dirigir, \nPessoa mais velha com a idade de ${idadeSegunda}, Segunda pessoa ainda é de menor e legalmente não pode dirigir, ${idadePrimeira}`)
}

else if (idadePrimeira >= 18 && idadeSegunda >= 18){

    console.log(`As duas pessoas estão aptas para Dirigir, Dirija com cuidado <3`)

}

else if ( idadePrimeira <18 && idadeSegunda <18){

    console.log(`As duas pessoas não estão aptas a dirigir pois são de menor idade :c`)


}

else {
    console.log(`Erro interno!!!!!!!!!!!!!!!!!!!`)
}


// 30 min