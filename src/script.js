var capturando = ""
function capturar(){
 capturando=document.getElementById('valor').value
  var valorDolar = capturando * 0.18
  var resultado = valorDolar.toFixed(2)
  
  if (resultado >=2){
  document.getElementById('valorDigitado').innerHTML = ("O Resultado da conversão é: " + resultado + " Dolares $")
  }
  else if(resultado < 1){
  document.getElementById('valorDigitado').innerHTML = ("O Resultado da conversão é: " + resultado + " Cents $")
  }
  else {
  document.getElementById('valorDigitado').innerHTML = ("O Resultado da conversão é: " + resultado + " Dolar $")
  }
}

 