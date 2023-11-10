function calcularDiferenca(numero) {
    if (numero <= 13) {
      return 13 - numero;
    } else {
      return (numero - 13) * 2;
    }
  }
  
  console.log(calcularDiferenca(8));
  