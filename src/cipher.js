window.cipher = {
  encode: (message, llave) => { //convertir letra del abecedario en ascii code.
    let textCipher = "";
    //creo una variable para guardar el mensaje cifrado.
    for (let index = 0; index < message.length; index++){ 
    //recorro mensaje con un loop.
        let asciiPosition = message.toUpperCase().charCodeAt(index);
      //charCodeAt me da el numero ascii del mensaje, y la guardo en una variable.
        asciiPosition = ((asciiPosition - 65 + llave) %26 + 65);
        //aplico formula para que me de el caracter. 
        //Vamos a sacar el residuo de la posicion dentro del codigo ascii para llevarlo al codigo humano
        let numberToString = String.fromCharCode (asciiPosition);
        //Tomo el codigo ascii y me da una letra
       if (asciiPosition >=65 && asciiPosition <= 90)
      //fijo una condición para que solo se mueva en las letras mayusculas del ascci code.

        textCipher += numberToString
         }
        return textCipher;
      },
  decode: (message, llave) => {

    let textCipher = "";
    for (let index = 0; index < message.length; index++){ 
        let asciiPosition = message.toUpperCase().charCodeAt(index);
        asciiPosition = ((asciiPosition + 65 - llave) %26 + 65);
        //aplico formula para que me de el caracter, pero le resto la llave para que retroceda retrocede. 
        let numberToString = String.fromCharCode (asciiPosition);
        //Tomo el codigo ascii y me da una letra
       if (asciiPosition >=65 && asciiPosition <= 90)
      //fijo una condición para que solo se mueva en las letras mayusculas del ascci code.

        textCipher += numberToString
         }
        return textCipher;
      },
  }

