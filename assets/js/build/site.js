var site=function($){function twitterTemplate(tweets){for(var element=document.getElementById("twitter-feed"),i=0;i<tweets.length;)element.innerHTML+='<li class="twitter-item">'+tweets[i]+"</li>",i++}var idfive={},instagramConfig={get:"user",userId:"31863373",clientId:"00dbf1c65fd84dd38fa9b69417654cd8",accessToken:"31863373.00dbf1c.9febb535908b473ab6eacaae13a1f230",target:"instagram-feed",limit:1,resolution:"standard_resolution",sortBy:"most-recent",template:'<li class="instagram-item"><a class="instagram-item__link" href="{{link}}"><img class="instagram-item__image" src="{{image}}" /><div class="instagram-item__details"><p class="instagram-item__caption">{{caption}}</p></div></a></li>'},twitterConfig={id:"347099293930377217",domId:"twitter-feed",maxTweets:1,enableLinks:!0,showInteraction:!1,showUser:!1,showTime:!1,lang:"en",customCallback:twitterTemplate};return idfive.domReady=function(){idfive.readySilk(),idfive.hero(),idfive.slideshow(),idfive.instagram(),idfive.twitter()},idfive.readySilk=function(){$(".silk-accordion").silkaccordion(),$(".silk-nav").silknav(),$(".silk-table").silktable(),$(".silk-tabs").silktabs()},idfive.hero=function(){$(".hero").length&&$(".hero").each(function(){var image=$(this).find("img").attr("src");$(this).css("background-image","url("+image+")")})},idfive.slideshow=function(){var swiftSlide=document.querySelector(".swift-slide");document.contains(swiftSlide)&&swift({container:".swift-slide",elements:"li"})},idfive.instagram=function(){var instagramFeed=document.querySelector("#instagram-feed");if(document.contains(instagramFeed)){var feed=new Instafeed(instagramConfig);feed.run()}},idfive.twitter=function(){var twitterFeed=document.querySelector("#twitter-feed");document.contains(twitterFeed)&&twitterFetcher.fetch(twitterConfig)},idfive}(jQuery);!function($){site.domReady()}(jQuery);