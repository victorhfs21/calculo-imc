function CalculoIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let imc = peso / (altura*altura);

    if (imc<20)
    {
        document.getElementById("mensagem").innerText = "Magro";
        document.getElementById("imagem").src = "images/magro.jpg";
    }

    else if(imc>=25)

    {
        document.getElementById("mensagem").innerText = "Sobrepeso";
        document.getElementById("imagem").src = "images/sobrepeso.jpg";
    }  

    else
    {
        document.getElementById("mensagem").innerText = "Ok";

        document.getElementById("imagem").src = "images/ok.png";
    }
}