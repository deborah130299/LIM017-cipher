window.addEventListener('load', () => {
  /* variables*/
  let input = document.getElementById('input');
  let cipher = document.getElementById('cipher');
  let decipher = document.getElementById('decipher');
  let result = document.getElementById('result');

  /* función para encriptar una palabra*/
  cipher.addEventListener('click', () => {
    var inputWord = input.value;
    if (inputWord.match(/[a-zA-Z]/)) {
      /* let cipher = word =>  {
  // variable para la salida de la palabra encriptada*/
      let output = '';
      // recorrido dentro de la palabra ingresada
      for (let i = 0; i < inputWord.length;i++) {
        // variable en donde se convierte la letra en codigo ascii
        let code = inputWord.charCodeAt(i);
        // variable que guarda la conversion de codigo ascii a letra
        let code2 = inputWord[i];
        // analizando las letras mayusculas A= 65 Y Z= 90
        if ((code >= 65) && (code <= 90)) {
          // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
          code2 = String.fromCharCode(((code - 65 + 33) % 26) + 65);
          // analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
        } else if ((code >= 97) && (code <= 122)) {
          code2 = String.fromCharCode(((code - 97 + 33) % 26) + 97);
        }
        // salida de la palabra encriptada
        output += code2;
      }
      /* Resultado*/
      result.classList.remove('hide');
      result.innerHTML = 'El texto encriptado es : ' + output ;
    } else {
      alert('Ingres una palabra');
    }
  });

  /* función para desencriptar una palabra */
  decipher.addEventListener('click', () => {
    /* $('#desencriptar').click(function() {*/
    let inputWord = input.value;
    // variable para la salida de la palabra encriptada
    let output = '';
    // recorrido dentro de la palabra ingresada
    for (let i = 0; i < inputWord.length;i++) {
    // variable en donde se convierte la letra en codigo ascii
      let code = inputWord.charCodeAt(i);
      // variable que guarda la conversion de codigo ascii a letra
      let code2 = inputWord[i];
      // analizando las letras mayusculas A= 65 Y Z= 90
      if ((code >= 65) && (code <= 90)) {
      // ejecutando los 33 espacios y convirtiendo de lenguaje ascii a letra
        code2 = String.fromCharCode(((code - 65 - 33 + 26 * 2) % 26) + 65);
      } else if ((code >= 97) && (code <= 122)) {//  analizando las letras minusculas a= 97 y z=122 y ejecutando los 33 espacios
        code2 = String.fromCharCode(((code - 97 - 33 + 26 * 2) % 26) + 97);
      }
      // salida de la palabra encriptada
      output += code2;
    }
    /* resultado*/
    result.innerHTML = 'El texto desencriptado es : ' + output ;
  });
  /* función para limpiar la entrada*/
  let eraser = document.getElementById('clearbutton');
  eraser.addEventListener('click', () => {
  /* borrar el campo.*/
    input.value = '';
  });
});

// eslint-disable-next-line no-undef
export default cipher;

