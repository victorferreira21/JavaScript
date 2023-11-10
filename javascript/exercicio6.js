function calcularMedia(numero1, numero2) {
    if (numero1 >= 0 && numero1 <= 10 && numero2 >= 0 && numero2 <= 10) {
      const media = (numero1 + numero2) / 2;
      console.log(`A média é ${media}`);
    } else {
      console.log("Valor inválido");
    }
  }
  
  calcularMedia(5, 7);
  