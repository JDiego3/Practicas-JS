(function() {



window.onload = function() {

        const comentariosContainer = document.getElementById('comentarios-container');
        const btnAgregar = document.getElementById('boton1');
        const btnQuitar = document.getElementById('boton2');
        const inputNumComentarios = document.getElementById('numComentarios');
        const Formulario = document.getElementById('Formulario');


  btnAgregar.onclick = function(){


     let numeroActual = parseInt(inputNumComentarios.value);
     let numero = numeroActual + 1;

     inputNumComentarios.value = numero.toString();
     const nuevoName = `cometario${numero}`;


     const divFila =  document.createElement('div');
     divFila.setAttribute('class' , 'fila comentario-field');
     divFila.setAttribute('data-index' , numero.toString());


    const divCol2 = document.createElement('div');
    divCol2.setAttribute('class' , 'col-2');

    const label = document.createElement('label');
    label.setAttribute('for' , nuevoName);
    label.textContent = `cometario ${numero}`;
    divCol2.appendChild(label);

    const divCol10 = document.createElement('div');
    divCol10.setAttribute('class', 'col-10')

    const input = document.createElement('input');
    input.setAttribute("type" , "text");
    input.setAttribute("name" , nuevoName);
    input.setAttribute("id" , nuevoName);
    input.setAttribute("placeholder", `Escribe comentario ${numero}`);
    input.setAttribute("required" , "");
    divCol10.appendChild(input);

    divFila.appendChild(divCol2);
    divFila.appendChild(divCol10);

    //el div padre es el primero que creamos 
    // por eso ahora tiene de hijos el div col2 y div-col 10


   comentariosContainer.appendChild(divFila);



  }

  btnQuitar.onclick = function(){

         let campos = comentariosContainer.querySelectorAll('.comentario-field');

         // el .comentario-fiel es lo que tiene el segundo div

    if (campos.length > 0) {
        const ultimo = campos[campos.length - 1];

       
       
        ultimo.style.display="none";

        
        let numeroActual = parseInt(inputNumComentarios.value);
        let numero = numeroActual - 1;

        inputNumComentarios.value = numero.toString();
    } else {
        alert("Tienes que agregar más campos, no puedes eliminar más.");
    }



  }



  
}


 })();
