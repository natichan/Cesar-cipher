
myFunction=()=> {
//función botón cifrar
    let mes = document.getElementById("message1").value;
    //llamando al mensaje que escribe el usuario en HTML.
    let key = parseInt(document.getElementsByTagName("input")[0].value);
    //llamando a la llave en HTML que será el offset.
    document.getElementById("result").innerHTML = 
    //se escribe el resultado en el recuadro resultado.
    window.cipher.encode(mes, key);
    //llamo a la función encode.
}
myFunction2=()=> {
//función botón descifrar
    let mes = document.getElementById("message1").value;
    let key = parseInt(document.getElementsByTagName("input")[0].value);
    document.getElementById("result").innerHTML = 
    window.cipher.decode(mes, key);
    //llamo a la función decode.

}
    