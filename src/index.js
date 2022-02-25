import cipher from './cipher.js';

const cifrad = document.getElementById('Cifrado');
const Descifrad = document.getElementById('Descifrado');

cifrad.addEventListener('click', () => {  //Codificar
    const string = document.getElementById("input").value;
    const offset = document.getElementById('offsetCipher').value;
    const textCod = cipher.encode(offset, string);
    document.getElementById('result').innerText = textCod;
  
});

Descifrad.addEventListener('click', () => { //Decodificar
    const string = document.getElementById('input').value; 
    const offset = document.getElementById('offsetCipher').value;
    const textDeCod = cipher.decode(offset, string);
    document.getElementById('result').innerText = textDeCod;
   
});
const clearbutton = document.getElementById('clearbutton');
clearbutton.addEventListener('click', () => { 
    document.getElementById('result').innerText = '';
    document.getElementById('offsetCipher').value = '';
    document.getElementById('input').value = '';
});
