var num1 = prompt("Digita el primer número: ");
var num2 = prompt("Digita el segundo número: ");
var num3 = prompt("Digita el tercer número: ");

    if (num1 < num2){
        if (num1 > num3){
            alert("Numero mayor es: "+num1+"");
            }
            else{
            alert("Numero mayor es: "+num3+"");
            }
    }
        else{
            if(num1 > num2){
                if (num2 < num3){
                alert("Numero mayor es: "+num2+"");
                }
                else{
                    alert("Numero mayor es: "+num3+"");
                    }
            }
            }

