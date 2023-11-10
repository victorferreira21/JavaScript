function removerCaractere(string, posicao) {
    const caractereRemovido = string.charAt(posicao);
    const stringModificada = string.slice(0, posicao) + string.slice(posicao + 1);
    
    console.log(`Caractere removido: ${caractereRemovido}`);
    console.log(`String modificada: ${stringModificada}`);
  }
  
  removerCaractere("exemplo", 3);
  