$(document).ready(function(){
    $("main h1, main h2").each(function(){
      $("#sidebarNav").append("<li class='nav-item tag-" + this.nodeName.toLowerCase() + "'><a class='nav-link' href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
      $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
      //$("nav ul li:first-child a").parent().addClass("active");
    });
  
    $("#sidebarNav li").on("click", "a", function(event) {
      var position = $($(this).attr("href")).offset().top - 190;
      $("html, body").animate({scrollTop: position}, 400);
      /*$("nav ul li a").parent().removeClass("active");
      $(this).parent().addClass("active");*/
      event.preventDefault();
    });

  });