(function () {

  function init(){
    $('#vender').click(venderHandler);

  }




  function venderHandler (evt) {
    
    var pro=JSON.parse(localStorage.getItem('productos'));
    var json1=JSON.stringify(pro);

     var formlogin = document.getElementById('formcarrito');

      //prevent form submission
      evt.preventDefault();
      evt.stopPropagation();

      $('#post-results-container').fadeOut();
      $('.ajaxLoader').css('display', 'inline-block');


      //make the AJAX call
      $.ajax({
        url: '/form3',
        type: 'POST',
        data: {
          vender10: formlogin.vender10.value,
          objeto: json1,

         
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
   



    $('#post-results-container').fadeIn();
  };

//init on document ready
$(document).ready(init);
})();