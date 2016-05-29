
 $(window).load(function () {
     defilement();
    $('.element').hover(function () {
        
        $(this).find('.text').fadeIn();
    }, function () {
        $(this).find('.text').fadeOut();
        });
    $('.element').focusin(function () {
        
        $(this).find('.text').fadeIn();
    });
     $('.element').focusout(function () {
        $(this).find('.text').fadeOut();
        });
    
     
 
 })

$(document).ready(function () {
    $(window).scroll(function () {
        fixationNav()
    })
});

function fixationNav(){
    var $nav = $('.navbar-default'); 
			//var navPos = $nav.offset().top;
			var topOfWindow = $(window).scrollTop();
			var heightScreen = $(window).height();	
			
			if ( topOfWindow > heightScreen-50 ) {				
				$nav.addClass('fixed-nav');
				flag = true; 
			
			} else {
				$nav.removeClass('fixed-nav');
			} 
}

function clique(section){
    secNum = section.id.charAt(2);
    secId = "#section" + secNum;
    console.log(secId)
    $('html, body').animate({scrollTop: ($(secId).offset().top) - 50}, 200);
}

var  full=0;
$(window).scroll(function(){
		  defilement()	
		});


function defilement(){
			winTop = $(window).scrollTop();
			winHeight = $(window).height();

			var sectionsTop = new Array();
			var hauteurs = new Array();
            var pos = new Array();
            pos[0] = -$(".pointeur").width();
			for (var i = 1; i < 5; i++)
			{
				var id = '#section' + i;
				sectionsTop[i] = $(id).offset().top;
                var id = '#li'+i;
                pos[i] = (pos[i-1]+($(id).width()));
                
                
			}
            pos[4] = $(".nav").width();
            pos[4] -= $(".pointeur").width();
            sectionsTop[5]=sectionsTop[4]+$('#section4' ).height();
            //console.log("-------------------------")
            //console.log("distance du haut    : ",winTop);
            
            console.log(pos);
            //console.log("hauteur des elements: ",hauteurs);

			for (var i = 1; i < 5; i++)
			{
				var id = '#marqueur' + i;
                 
				    $( id ).removeClass( "foc" )
				

				if ((sectionsTop[i] < (winTop+100)) && ((sectionsTop[i+1]-100> (winTop))))
				{
                    var res = pos[i]+'px';
				    console.log(id);
                    $(".pointeur").stop().animate({left: res});
                    
                    if (id == "#marqueur3" && full == 0){
                        for (var i=1;i<8;i++){
                            tmp = "b"+i;
                            var w = document.getElementById(tmp).innerHTML;
                            
                            $("."+tmp).stop().animate({width: w});
                        }
                    } 
                    //$( id ).addClass( "foc" );
				}
				else
				{
				   //$( id ).removeClass( "foc" )
				}	

				
			}
		}
 
 