 $(document).ready(function() {
    $('.cycle-slideshow').cycle({
		fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
    
    $('.slot2handle').click(function() {
     
     $('.slot2').fadeIn();
     $('.slot1').fadeOut();
     
     });
    
    $('.slot1handle').click(function() {
     
     $('.slot1').fadeIn();
     $('.slot2').fadeOut();
     
     });
});
    
  
    
    
    