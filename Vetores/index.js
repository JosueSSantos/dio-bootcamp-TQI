

function verificar(a = 1, b= 20 ){
    var igualOuNao ="";
    var maiorOuMenor = "";
    var  maiorOuMenor20 ="";
    var soma = a +b

    if(a ==b ){
        igualOuNao = " são iguais ";
    }else{
        igualOuNao = "não são iguais.";
    }

    if(a+b >=10 ){
        maiorOuMenor = "é maior que 10 ";
    }else if(a+b <10 ){
        maiorOuMenor = "é menor que 10 ";
    }

    if(a+b <=20){
        maiorOuMenor20 =  "é menor que 20";
    }else {
        maiorOuMenor20 =  "é maior que 20";
    }


    console.log("Os números ",a,"e", b, igualOuNao,"Sua soma é ", soma,".","que", maiorOuMenor,"e",  maiorOuMenor20 )
    


}

verificar();