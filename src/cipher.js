window.cipher = {
  encode: (message, llave) => { 
    //función con dos variables que fijarán el mensaje y la llave(offset).
    let textCipher = "";
    //creo una variable para guardar el mensaje cifrado.
    for (let index = 0; index < message.length; index++){ 
    //recorro menssage con un loop.
        let asciiPosition = message.toUpperCase().charCodeAt(index);
      //charCodeAt me da el numero ascii del mensaje, luego la guardo en una variable.
        asciiPosition = ((asciiPosition - 65 + llave) %26 + 65);
        //aplico formula para que me de el caracter. 
        //Saco el residuo de la posición dentro del código ascii para llevarlo al código humano(0-26 en inglés).
        let numberToString = String.fromCharCode (asciiPosition);
        //Tomo el código ascii y me da una letra.
        if (asciiPosition >=65 && asciiPosition <= 90)
        //fijo una condición para que solo se mueva en las letras mayusculas del ascci code.

        textCipher += numberToString
        /*sumo la varible que guardara el mensaje cifrado más la variable que toma el código asscii
        y lo convierte en letra.*/
         }
        return textCipher;
        //retorna el texto a la variable ya cifrado.
      },
  decode: (message, llave) => {
    //es la misma función que encode, la única diferencia es la llave que resta para retroceder en los caracteres.
    let textCipher = "";
    for (let index = 0; index < message.length; index++){ 
        let asciiPosition = message.toUpperCase().charCodeAt(index);
        asciiPosition = ((asciiPosition + 65 - llave) %26 + 65);
        //aplico fórmula para que me de el caracter, pero le resto la llave para que retroceda. 
        let numberToString = String.fromCharCode (asciiPosition);
        //Tomo el codigo ascii y me da una letra
       if (asciiPosition >=65 && asciiPosition <= 90)
      //fijo una condición para que solo se mueva en las letras mayusculas del ascci code.

        textCipher += numberToString
         }
        return textCipher;
      },
  }

