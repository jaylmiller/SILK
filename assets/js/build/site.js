var site=function($){var idfive={};return idfive.domReady=function(){idfive.hero(),idfive.slideshow()},idfive.hero=function(){$(".hero").length&&$(".hero").each(function(){var image=$(this).find("img").attr("src");$(this).css("background-image","url("+image+")")})},idfive.slideshow=function(){swift({container:".swift-slide",elements:"li"})},idfive}(jQuery);!function($){site.domReady()}(jQuery);