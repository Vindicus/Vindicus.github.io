var adjectives=["I am curious","I am detail-oriented and honest","I am observant, patient, and outgoing","I am a team player, organized, and self-motivated", "This is my portfolio and I am Phillip Yang"];

//This code creates a fading animation for the intro using the adjectives variable above
$("h2.center").text(adjectives[0]).fadeIn(1000).addClass("animated bounceIn").delay(1000).fadeOut(1000,function(){
  $(this).removeClass("animated bounceIn");
  $(this).text(adjectives[1]).fadeIn(1000).addClass("animated rubberBand").delay(1000).fadeOut(1000,function(){
    $(this).removeClass("animated rubberBand");
    $(this).text(adjectives[2]).fadeIn(1000).addClass("animated flip").delay(1000).fadeOut(1000,function(){
      $(this).removeClass("animated flip");
      $(this).text(adjectives[3]).fadeIn(1000).addClass("animated rollIn").delay(1000).fadeOut(1000,function(){
        $(this).removeClass("animated rollIn");
        $(this).text(adjectives[4]).fadeIn(1000).addClass("animated rotateInDownRight").fadeOut(1000,function(){
          $(this).removeClass("animated rotateInDownRight");
          $(this).text(adjectives[5]).fadeIn(1000).addClass("animated swing");
        });
      });
    });
  });
});
 
//This code does will make the navbar stay fixed when scrolled to the about-container
$(document).scroll(function(){
  if($(document).scrollTop()>=$("#about-container").offset().top)	{
    $("nav").removeClass("non-sticky").addClass("sticky");
  }else{
    $("nav").removeClass("sticky").addClass("non-sticky");
  }
	
//This code creates a simple bounce animation for the about container
  if($(document).scrollTop()>=$("#about-container").offset().top+15){
    $(".traveling").addClass("animated bounce");	
    $(".gaming").addClass("animated shake");
    $(".technology").addClass("animated pulse");
  }
});	

//The code below for animate the navbar to scroll to the appropriate section on the page
$("#About").click(function(e){
  e.preventDefault();
	
  $("html,body").animate({scrollTop:$("#about-container").offset().top},1500);
});
$("#Projects").click(function(e){
  e.preventDefault();
	
  $("html,body").animate({scrollTop:$("#projects-container").offset().top},1500);
});
$("#Resume").click(function(e){
  e.preventDefault();
	
  $("html,body").animate({scrollTop:$("#resume-container").offset().top},1500);
});
$("#Social").click(function(e){
  e.preventDefault();
	
  $("html,body").animate({scrollTop:$("#social-container").offset().top},1500);
});
		
//THIS SECTION IS FOR POPOVERS
$('.pop-info').popover({
  trigger: 'hover',
  animation: true
});
