function mostrar()
{
    
    var nome=document.getElementById("nome").value
    var idade=document.getElementById("idade").value
    var nascimento = document.getElementById("nascimento").value
    /* 2020/02/27  */
    /* 12345678910   */
    var dia = nascimento.substring(8,10)    
    var mes = nascimento.substring(5,7)    
    var ano = nascimento.substring(0,4)  
    nascimento = dia+"/"+mes+"/"+ano

    
    

    
    

    var observacao= document.getElementById("observacao") .value
    var estado=document.getElementById("estados").value
    var senha=document.getElementById("senha").value
    var sexo=document.querySelector("input[name='sexo']:checked").value
    
    
    var almoco=document.getElementById("almoco").checked
    if (almoco==true)
        {almoco="sim"}
    else 
        {almoco="não"}
    
    var valetransporte=document.getElementById("valetransporte").checked
    if (valetransporte==true) 
        {valetransporte="Sim eu quero"}
    else
        {valetransporte="Não não quero"}
    
    
    
    alert ("Nome: "+nome+"\nIdade: "+idade+"\nNascimento: "+nascimento+"\nObservação: "+observacao+"\nEstado: "+estado+"\nSenha: "+senha+"\nSexo: "+sexo+ "\nAlmoço: "+almoco+"\nVale transporte: "+valetransporte)
    
    
    
}