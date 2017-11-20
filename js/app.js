window.onload = function() {
/* haciendo referencia a las etiquetas */
  var btnSave = document.getElementById('btn-save');
  var insertTwe = document.getElementById('insert-twe');
  var containerTwits = document.getElementsByClassName('container-twits')[0];
  var characterCounter = document.getElementById('character-counter');
  var ContenedorTwist = document.querySelector('.tweetform-content');


  insertTwe.addEventListener('keydown', validacion);
  insertTwe.addEventListener('keyup', validacion);
  insertTwe.addEventListener('keydown', autosize);
  btnSave.addEventListener('click', addtwet);

  function addtwet() {
    if (insertTwe.value) { /* creando elementos*/
      var contentNewTwit = document.createElement('div');
      var contentHeader = document.createElement('div');
      var contentfooter = document.createElement('div');
      var contentTwitText = document.createElement('div');
      var elemtContainerTwit = document.createElement('p');
      elemtContainerTwit.textContent = insertTwe.value;
      contentNewTwit.classList.add('content-new-twit');

      /* agreando Nodos al DOM*/
      contentTwitText.appendChild(elemtContainerTwit);
      contentNewTwit.appendChild(contentHeader);
      contentNewTwit.appendChild(contentTwitText);
      contentNewTwit.appendChild(contentfooter);
      containerTwits.appendChild(contentNewTwit);
      insertTwe.value = '';
    }
  }

  function validacion()   {  
  /* Activar y desactivar el boton*/
    var numerodeLetras = insertTwe.value.length;
    var letrasMax = 140;
    if (numerodeLetras > letrasMax || numerodeLetras <= 0) {
      btnSave.disabled = true;
    } else if (numerodeLetras < letrasMax || numerodeLetras >= 0) {
      btnSave.disabled = false;
    }
  
    /* Agregar estilos desde el css y js*/
    (numerodeLetras > 120 && numerodeLetras < 130) ? characterCounter.className = 'blue':
      (numerodeLetras >= 130 && numerodeLetras <= 140) ? characterCounter.className = 'red':characterCounter.className = 'black';
    characterCounter.value = letrasMax - numerodeLetras;
  }


  /* autodimensionar el área de texto*/
  function autosize() {
    var el = this;
    setTimeout(function() {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }
};