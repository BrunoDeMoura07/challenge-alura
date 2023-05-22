function criptografar() {
  
 
  var texto = document.getElementById("input-texto").value;
  
    
  
  var resultado = texto
  .replace(/e/g, "enter")
  .replace(/i/g, "imes")
  .replace(/a/g, "ai")
  .replace(/o/g, "ober")
  .replace(/u/g, "ufat");
  
    
  
  document.getElementById("output").innerText = resultado;
  }
  

function descriptografar() {
  var texto = document.getElementById("input-texto").value;
  
 
var resultado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById("output").innerText = resultado;
}
//copiar texto//

function copiartexto() {
  var outputElement = document.getElementById("output");
  var result = outputElement.innerText;

  var textarea = document.createElement("textarea");
  textarea.value = result;

  outputElement.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputElement.removeChild(textarea);

  alert("Texto copiado...!");
}


