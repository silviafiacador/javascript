var result = document.getElementById("result");
var n1=0, n2=0
var operacao
function onNumberClicked(numberButton){
  

    if(result.innerHTML == "0"){
        result.innerHTML = numberButton.innerHTML;
        }
    else{
        result.innerHTML += numberButton.innerHTML;
       }
}

function onClearClicked(){
    result.innerHTML = "0";
}

function onEqualsClicked(){
    n2= result.innerHTML
    if (operacao =="+") 
    {
        result.innerHTML = parseInt(n1)+parseInt(n2)
    }
}

function onDivideClicked(){
    operacao ="/"
}



function onAddClicked(){
    n1= result.innerHTML
    result.innerHTML = 0
    operacao ="+"
}

function onSubtractClicked(){
    operacao ="-"
}

function onMultiplyCliked(){
    operacao = "*"
}

