var textoH1 = document.getElementById("titulo")
alert (textoH1.textContent)
textoH1.className="vermelha"
textoH1.textContent= "Texto alterado pelo JS"



/*lembrar que no caso do h2 poderíamos ter pego o 
conteúdo pelo id subtitulo*/
var textoH2 = document.getElementsByTagName("h2")[0]
alert (textoH2.textContent)

var textoLi = document.getElementsByTagName("li")[3]
alert (textoLi.textContent)



var textoClasseVerde =document.getElementsByClassName("verde")
/*cria-se um array 
o array tem um tamanho -> propriedade length*/

for (var posicao=0; posicao<textoClasseVerde.length;posicao++) {
    alert (textoClasseVerde[posicao].textContent)
}


var textoLiVerde = document.querySelectorAll("li.verde")
for (var i=0; i<textoLiVerde.length;i++) {
    alert ("Conteúdo pego querySelector- "+textoLiVerde[i].textContent)
}




