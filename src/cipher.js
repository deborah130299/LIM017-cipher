

const cipher = {
  encode: (offsetCipher, string) => {
    let Codifica = '';

    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      if (stringAscii >= 65 && stringAscii <= 90) {
        let formato = ((stringAscii - 65 + parseInt(offsetCipher)) % 26) + 65;
        Codifica += String.fromCharCode(formato);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let formato = ((stringAscii - 97 + parseInt(offsetCipher)) % 26) + 97;
        Codifica += String.fromCharCode(formato);


      } 

    }
    return Codifica;
  },

  decode: function (offsetCipher, string) {
    let DeCodifica = '';


    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);
      if (stringAscii >= 65 && stringAscii <= 90) {
        let format = ((stringAscii + 65 - parseInt(offsetCipher)) % 26) + 65;//parseInt() lo covierte en number
        DeCodifica += String.fromCharCode(format);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let format = ((stringAscii - 45 - parseInt(offsetCipher)) % 26) + 97; //(26*2)-97
        DeCodifica += String.fromCharCode(format);

      } 

    }
    return DeCodifica;
  }
};
export default cipher;



