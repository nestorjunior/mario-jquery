$(document).ready(function(){
    //Button Click Here
    $('a.btn-custom').click(function(){
        alert("Mario is running to find the princess...");
    });

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
});