import cipher from './cipher.js';

const cifrad = document.getElementById('Cifrado');
const Descifrad = document.getElementById('Descifrado');

cifrad.addEventListener('click', () => {  //Codificar
    const string = document.getElementById("input").value;
    const offset = document.getElementById('offsetCipher').value;
    const codificado = cipher.encode(offset, string);
    document.getElementById('result').innerText = codificado;
  
});

Descifrad.addEventListener('click', () => { //Decodificar
    const string = document.getElementById('input').value; 
    const offset = document.getElementById('offsetCipher').value;
    const decodificado = cipher.decode(offset, string);
    document.getElementById('result').innerText = decodificado;
   
});
const clearbutton = document.getElementById('clearbutton');
clearbutton.addEventListener('click', () => { 
    document.getElementById('result').innerText = '';
    document.getElementById('offsetCipher').value = '';
    document.getElementById('input').value = '';
});

