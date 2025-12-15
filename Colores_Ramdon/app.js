
(function() {


  function cambiarColor(){

   let num1 = Math.floor(Math.random() * 256);
   let num2 = Math.floor(Math.random() * 256);
   let num3 = Math.floor(Math.random() * 256);
  

    document.body.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
    // se pasa los numeros aletorios a rgb  , se utiliza `` para concatenar 


  }


window.onload = function() {
  let bonton  = document.getElementById("boton");
  let bandera = false ;
  let id ;

  // tenemos que primero esta el false
  // entonces primero si se hace pasa al else
  // despues como ya esta activo vuelve a presionar el boton
  // y ahora como es true cae en el if y se vuelve false y se detiene
  

  boton.onclick = function(){

    if(bandera==true){
      bandera = false;
      clearInterval(id);
    }else{

      id = setInterval(cambiarColor,100);
      bandera=true;
    }




  }

  

}


 })();
