function criptografar() {
  const textoArea = document.getElementById("texto");
  const texto = textoArea.value.trim();

  if (texto === "") {
    alert("Por favor, digite um texto para criptografar.");
    return;
  }

  const textoCriptografado = cifraCesar(texto, 3);
  mostrarMensagem(textoCriptografado, "Texto Criptografado");
}

function descriptografar() {
  const textoArea = document.getElementById("texto");
  const texto = textoArea.value.trim();

  if (texto === "") {
    alert("Por favor, digite um texto para descriptografar.");
    return;
  }

  const textoDescriptografado = cifraCesar(texto, -3);
  mostrarMensagem(textoDescriptografado, "Texto Descriptografado");
}

function cifraCesar(texto, deslocamento) {
  return texto.replace(/[a-z]/gi, (char) => {
    const base =
      char >= "a" && char <= "z" ? "a".charCodeAt(0) : "A".charCodeAt(0);
    const code =
      ((((char.charCodeAt(0) - base + deslocamento) % 26) + 26) % 26) + base;
    return String.fromCharCode(code);
  });
}

function mostrarMensagem(texto, tipo) {
  const titulo = document.querySelector(".titulo_mensagem");
  const paragrafo = document.querySelector(".paragrafo_mensagem");

  if (tipo === "Texto Criptografado") {
    titulo.textContent = "Texto Criptografado";
    paragrafo.textContent = texto;
  } else if (tipo === "Texto Descriptografado") {
    titulo.textContent = "Texto Descriptografado";
    paragrafo.textContent = texto;
  }
}
