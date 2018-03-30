$(document).ready(function(){
    document.vm = { selectedNavItemId: null };

    /* build nav menu from page headers */
    $("main h2, main h3").each(function(){
      $("#sidebarNavList").append("<li class='nav-item tag-" + this.nodeName.toLowerCase() + "'><a class='nav-link' href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
      var itemId = $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'');
      $(this).attr("id", itemId);    
    });

    /* set first element active and save it's id */
    var firstNavItem = $("#sidebarNavList li:first-child a");
    firstNavItem.addClass("active");
    document.vm.selectedNavItemId = firstNavItem.attr('href');

    $("#sidebarNavList li").on("click", "a", function(event) {
      var position = $($(this).attr("href")).offset().top - 51;
      $("html, body").animate({scrollTop: position}, 400);
      $("a[href='" + document.vm.selectedNavItemId + "']").removeClass("active");
      document.vm.selectedNavItemId = $(this).attr('href');
      $(this).addClass("active");
      event.preventDefault();
    });

  });