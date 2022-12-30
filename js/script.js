

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
$(function(){
    // here, the website is loaded
    // this will fade the body out and then fade in again
    $('button').click(function(){
        $.get('https://simple-books-api.glitch.me/status',  // url
      function (data, textStatus, jqXHR) {  // success callback
          alert('status: ' + textStatus + ', data:' + data);
    });
    })
});