$(document).ready(function(){

    /*
    document.getElementById('root').addEventListener('click', function(e){

        e.preventDefault()

    })

    */
    /* -----------------------------------------------
                btn-menu-toggle
    ----------------------------------------------- */
    
    // Quand on click sur le btn-toggle
    $("nav a.btn-menu-toggle").click(function(e){
        // nav menu 
        $('nav .menu').css('top' , '0');

        // nav btn-close
        // nav menu 
        $('nav .btn-menu-close svg').css('top' , '0');

        e.preventDefault();

    });


    // Quand on click sur le btn-close
    $("nav .btn-menu-close").click(function(e){
        // nav menu 
        $('nav .menu').css('top' , '-100vh');

        // nav btn-close
        // nav menu 
        $('nav .btn-menu-close svg').css('top' , '-100vh');

        e.preventDefault();

    });


    // -----------------------------------------------
    //                  MEDIA QUERY
    //-----------------------------------------------
    
    if (window.matchMedia("(max-width: 700px)").matches) {
        $("nav .menu a").click(function(e){
            // nav menu 
            $('nav .menu').css('top' , '-100vh');
            $('nav .btn-menu-close svg').css('top' , '-100vh');
            
        });
      } else {
        
      }


    


});


