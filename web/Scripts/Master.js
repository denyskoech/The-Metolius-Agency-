jQuery('document').ready(function() {
   var nav = $('.nav-container');
    $(window).scroll(function() {
       if($(this).scrollTop() > 50){
           nav.addClass('f-nav');
       } else {
           nav.removeClass('f-nav');
       }
    });
});

$(function(){
	
		$('a[href*=#]').each(function(){
			
				if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')
				&& location.hostname==this.hostname && this.hash.replace(/#/,'')){
			
				var $targetId=$(this.hash),$targetAnchor=$('[name='+this.hash.slice(1) +']');
				var $target=$targetId.length ? $targetId:$targetAnchor.length?$targetAnchor:false;
				
					if($target){
						
						var targetOffSet=$target.offset().top;
						$(this).click(function(){
							
							$('.nav li a').removeClass('active');
							$(this).addClass('active');
							
							$('html , body').animate({scrollTop: targetOffSet},200);
							return false;
						});
					}
				
				}
					
		});
	
});

$("#slider > div:gt(0)").hide();

setInterval(function() { 
  $('#slider > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider');
},  3000);


