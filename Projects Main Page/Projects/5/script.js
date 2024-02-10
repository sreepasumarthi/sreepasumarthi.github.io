jQuery('.clickMe').click(function(e) {
    e.preventDefault();
    var txt = jQuery(this).attr('data-text');
    jQuery('.box-output').html('<p> You clicked on <br/> '+ txt +' </p>');
    });