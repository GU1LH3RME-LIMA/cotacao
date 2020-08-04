document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#form").onsubmit=()=>{
        const request = new XMLHttpRequest();
        const moedas = document.querySelector("#moedas").value.toUpperCase();
        request.open("POST","/converta");
        request.onload= ()=>{
            const data =JSON.parse(request.responseText);

            if(data.success){
                const nome="Nome: "+data.nome;
                const resu= "Valor: R$"+ data.rate;
                const pct= "Porcentagem de Variação: "+ data.var +"%";
                document.querySelector("#nome").innerHTML=nome;
                document.querySelector("#result").innerHTML=resu;
                document.querySelector("#porcentagem").innerHTML=pct;
            }
            else{
                document.querySelector("#result").innerHTML="Há um erro;"
            }
        }
        const data = new FormData();
        data.append('moedas', moedas);

        // Send request
        request.send(data);
        return false;

    };

});
