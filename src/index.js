
clearbutton.addEventListener('click', () => {

    document.getElementById("input").value = '';
    document.getElementById("offsetCipher").value = '';
    document.getElementById("result").value = '';
    document.getElementById("input").focus();
}

const Cifrado = document.getElementById('Cifrado');
const Descifrado = document.getElementById('Descifrado');


Cifrado.addEventListener('click', () => {  //Codificar
    const string = document.getElementById('text').value;
    const offset = document.getElementById('offset').value;
    const textCod = cipher.encode(offset, string);
    document.getElementById('input').innerText = textCod;
    document.getElementById('result').innerText = 'Texto Cifrado';
});
Descifrado.addEventListener('click', () => { //Decodificar
    const string = document.getElementById('text').value;
    const offset = document.getElementById('offset').value;
    const textDeCod = cipher.decode(offset, string);
    document.getElementById('input').innerText = textDeCod;
    document.getElementById('result').innerText = 'Texto Descifrado';
});

