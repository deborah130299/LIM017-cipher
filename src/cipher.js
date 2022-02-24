

const cipher = {
  encode: (offsetCipher, string) => {
    let Codifica = '';
    if (typeof string !== 'string') {
      throw new TypeError('bad arguments');
    }
 
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      if (stringAscii >= 65 && stringAscii <= 90) {
        let textOffset = ((stringAscii - 65 + parseInt(offsetCipher)) % 26) + 65;
        Codifica += String.fromCharCode(textOffset);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let textOffset = ((stringAscii - 97 + parseInt(offsetCipher)) % 26) + 97;
        Codifica += String.fromCharCode(textOffset);
        

      } else if(stringAscii >= 32 && stringAscii <= 64){
        let textOffset = ((stringAscii - 32 + parseInt(offsetCipher)) % 33) + 32; 
        Codifica += String.fromCharCode(textOffset);
        
      }else if(stringAscii >= 91  && stringAscii <= 96){
        let textOffset = ((stringAscii - 91 + parseInt(offsetCipher)) % 6) + 91;
        Codifica += String.fromCharCode(textOffset);
      }

    }
    return Codifica;
  },

  decode: function (offsetCipher, string) {
    let DeCodifica = '';
    if (typeof string !== 'string') {
      throw new TypeError('bad arguments');
    }

    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);
      if (stringAscii >= 65 && stringAscii <= 90) {
        let newtext = ((stringAscii + 65 - parseInt(offsetCipher)) % 26) + 65;//parseInt() lo covierte en number
        DeCodifica += String.fromCharCode(newtext);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let newtext = ((stringAscii - 45 - parseInt(offsetCipher)) % 26) + 97; //(26*2)-97
        DeCodifica += String.fromCharCode(newtext);

      } else if(stringAscii >= 32 && stringAscii <= 64){
        let newtext = ((stringAscii + 1 - parseInt(offsetCipher)) % 33) + 32; //33-32
        DeCodifica += String.fromCharCode(newtext);

      }else if(stringAscii >= 91  && stringAscii <= 96){
        let newtext = ((stringAscii + 5 - parseInt(offsetCipher)) % 6) + 91;
        DeCodifica += String.fromCharCode(newtext);
      }

    }
    return DeCodifica;
  }
};
export default cipher;



