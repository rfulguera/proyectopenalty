(function () {

  function init(){
    $('#verificarlogin').click(verificarloginHandler);
  }

  function verificarloginHandler (evt) {
     var formlogin = document.getElementById('formlogin');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      $('#post-results-container').fadeOut();
      $('.ajaxLoader').css('display', 'inline-block');


      //make the AJAX call
      $.ajax({
        url: '/form2',
        type: 'POST',
        data: {
          email: formlogin.email.value,
          password: formlogin.password.value,
        },
        success: postSuccessHandler
      });
  }

  function postSuccessHandler (jsonData) {
    var $data = $('#post-results-container .data');

    //reset the UI
    $data.html('');
    $('.ajaxLoader').hide();

    //update the UI with the data returned from the AJAX call 
    
    $('.nomusuario').text('BIENVENIDO: '+jsonData.email);
    $('.codusuario').text('CODIGO: '+jsonData.password);



      var obtjetousuario={'usuario':jsonData.email,'codigo':jsonData.password};

      var json1=JSON.stringify(obtjetousuario);

      localStorage.setItem('login',json1);
    



    $('#post-results-container').fadeIn();
  };

//init on document ready
$(document).ready(init);
})();