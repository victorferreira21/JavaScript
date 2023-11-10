const nomeDoArquivo = "texto.docx";
const partes = nomeDoArquivo.split(".");
const extensao = partes[partes.length - 1];

console.log(extensao);
