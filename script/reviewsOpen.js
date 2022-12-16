$(document).ready(function(){
    $('.ReviewsnewsContentItem').click(function(){
        $('.newsContentItemBackMain').removeClass('active');
        $(this).closest(".ReviewsnewsContentItem").find('.newsContentItemBackMain').addClass('active');
        $('.newsContentItemBackFooter').removeClass('active');
        $(this).closest(".ReviewsnewsContentItem").find('.newsContentItemBackFooter').addClass('active');
    });
});