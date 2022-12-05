$(document).ready(function($) {
    $('.casesTabsContainer').hide();
    $('.casesTabsContainer:first').show();
    $('.tabs li:first').addClass('active');
    $('.tabs li').click(function(event) {
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('.casesTabsContainer').hide();
  
      var selectTab = $(this).find('a').attr("href");
  
      $(selectTab).fadeIn();
    });
  });