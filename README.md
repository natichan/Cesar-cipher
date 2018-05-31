# Cifrado César

    Está página te convertirá en un agente secreto. Puedes crear mensajes cifrados y sólo las personas que tu selecciones lo podrán descifrar. No temas que no habrá forma de que te descubran.
 
    Envía el link de esta página por email, whatssap o como tu quieras, así podrán resolver tu código y enviarte uno de vuelta.

 ## ¿Cómo funciona?

    Debes escribir el mensaje que desees en el primer recuadro y hacer click en cifrar si quieres que se transforme en un código secreto, o descifrar si quieres descubrir el mensaje que han enviado. 
 
    La casilla Llave requiere un número que te ayudara a fijar el desplazamiento del código, por ejemplo si escoges 3 el abecedario comenzará en la letra D, así tu mensaje se irá codificando. Por esto es importante que cuando envíes el número de desplazamiento, junto con el mensaje y el link de la página.

    ¡Espero que lo disfrutes y te diviertas!
## Diseño

    Llegar al diseño no fue fácil, me inspire en varios cifrados césar que están por la web, decidí hacer un diseño amigable con el usuario. Hice una prueba con personas de distintas edades para decidir el tipo de diseño, quería que fuera sencillo, fácil de entender y claro. La interfaz paso por distintos cambios modificando el color, imagenes y letras, entre otros, pero siempre manteniendo el bosquejo original de flujo. 


##  Un vistazo a la función del cifrado por si te interesa usarlo.

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

