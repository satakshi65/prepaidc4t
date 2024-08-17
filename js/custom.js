

$(document).ready(function () {
    

/*Sticky_Header */
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".main-header").addClass("sticky");
        } else {
            $(".main-header").removeClass("sticky");
        }
    }); 

    /*menu-slidetoggle */
    $(".menu-toggle").click(function () {
      $(".full-menu").toggleClass("slide-right");
      $(this).find('i').toggleClass('fa-bars fa-times')
  });
   
    /*Theme Switcher */
    const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
    /**THeme Switcher END */


// Increase/descrease font size

var $affectedElements = $("*"); // Can be extended, ex. $("div, p, span.someClass")

// Storing the original size in a data attribute so size can be reset
$affectedElements.each( function(){
  var $this = $(this);
  $this.data("orig-size", $this.css("font-size") );
});

$("#btn-increase").click(function(){
  changeFontSize(1);
})

$("#btn-decrease").click(function(){
  changeFontSize(-1);
})

$("#btn-orig").click(function(){
  $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , $this.data("orig-size") );
   });
})

function changeFontSize(direction){
    $affectedElements.each( function(){
        var $this = $(this);
        $this.css( "font-size" , parseInt($this.css("font-size"))+direction );
    });
}


    /*inner_page_dropdown */

    /*inner_page_dropdown */


    $(document).ready(function(){
      $(".accordion").on("click", ".heading", function() {
    
      $(this).toggleClass("active").next().slideToggle();
    
      $(".contents").not($(this).next()).slideUp(300);
                   
      $(this).siblings().removeClass("active");
      });
     });


/*dropdown-on-click */

$(document).ready(function(){
  $(".notification").click(function(){
    $(".notify-box").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".user-sec").click(function(){
    $(".user-box").slideToggle("slow");
  });
});


        $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});



  