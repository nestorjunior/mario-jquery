$(document).ready(function(){
    // Jump the Mario
    $('.btn-custom').click(function(){
        $('img').effect('bounce', {times:3}, '500');
    });

    //Running the Mario
    $(document).keydown(function(key){
        switch (parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left:'-=10px'}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top:'-10px'}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left:'+=10px'}, 'fast');
                break;
            // Down Array Pressed
            case 40:
                $('img').animate({top:'+10px'}, 'fast');
                break;
        }  
    });

    //Secret: Explode the Mario
    $('img').dblclick(function(){
        $(this).toggle('explode');
    });

});