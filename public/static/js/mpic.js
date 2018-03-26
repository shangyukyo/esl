(function($){$.fn.jqueryzoom=function(options){var settings={xzoom:200,yzoom:200,offset:0,position:"right",lens:1,preload:1};if(options){$.extend(settings,options)}var noalt="";$(this).hover(function(){var imageLeft=this.offsetLeft;var imageRight=this.offsetRight;var imageTop=$(this).get(0).offsetTop;var imageWidth=$(this).children("img").get(0).offsetWidth;var imageHeight=$(this).children("img").get(0).offsetHeight;if(imageWidth<380){imageWidth=380;imageHeight=imageHeight*(380/imageHeight)}noalt=$(this).children("img").attr("alt");var bigimage=$(this).children("img").attr("jqimg");$(this).children("img").attr("alt","");if($("div.zoomdiv").get().length==0){$(this).after("<div class='zoomdiv'><img class='bigimg' src='"+bigimage+"'/></div>");$(this).append("<div class='jqZoomPup'></div>")}if(settings.position=="right"){if(imageLeft+imageWidth+settings.offset+settings.xzoom>screen.width){leftpos=imageLeft-settings.offset-settings.xzoom}else{leftpos=imageLeft+imageWidth+settings.offset}}else{leftpos=imageLeft-settings.xzoom-settings.offset;if(leftpos<0){leftpos=imageLeft+imageWidth+settings.offset}}$("div.zoomdiv").css({top:imageTop,left:leftpos});$("div.zoomdiv").width(settings.xzoom);$("div.zoomdiv").height(settings.yzoom);$("div.zoomdiv").show();if(!settings.lens){$(this).css("cursor","crosshair")}$(document.body).mousemove(function(e){mouse=new MouseEvent(e);var bigwidth=$(".bigimg").get(0).offsetWidth;var bigheight=$(".bigimg").get(0).offsetHeight;var scaley="x";var scalex="y";if(isNaN(scalex)|isNaN(scaley)){var scalex=(bigwidth/imageWidth);var scaley=(bigheight/imageHeight);$("div.jqZoomPup").width((settings.xzoom)/scalex);$("div.jqZoomPup").height((settings.yzoom)/scaley);if(settings.lens){$("div.jqZoomPup").css("visibility","visible")}}xpos=mouse.x-$("div.jqZoomPup").width()/2-imageLeft;ypos=mouse.y-$("div.jqZoomPup").height()/2-imageTop;if(settings.lens){xpos=(mouse.x-$("div.jqZoomPup").width()/2<imageLeft)?0:(mouse.x+$("div.jqZoomPup").width()/2>imageWidth+imageLeft)?(imageWidth-$("div.jqZoomPup").width()-2):xpos;ypos=(mouse.y-$("div.jqZoomPup").height()/2<imageTop)?0:(mouse.y+$("div.jqZoomPup").height()/2>imageHeight+imageTop)?(imageHeight-$("div.jqZoomPup").height()-2):ypos}if(settings.lens){$("div.jqZoomPup").css({top:ypos +(380-imageHeight)/2,left:xpos})}scrolly=ypos;$("div.zoomdiv").get(0).scrollTop=scrolly*scaley;scrollx=xpos;$("div.zoomdiv").get(0).scrollLeft=(scrollx)*scalex})},function(){$(this).children("img").attr("alt",noalt);$(document.body).unbind("mousemove");if(settings.lens){$("div.jqZoomPup").remove()}$("div.zoomdiv").remove()});count=0;if(settings.preload){$(this).each(function(){var imagetopreload=$(this).children("img").attr("jqimg");var content=jQuery("div.jqPreload"+count+"").html();jQuery("div.jqPreload"+count+"").html(content+'<img src="'+imagetopreload+'">')})}}})(jQuery);function MouseEvent(e){this.x=e.pageX;this.y=e.pageY}function preview(img){$("#preview .jqzoom img").attr("src",$(img).attr("bimg"));$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"))}$(function(){$(".jqzoom").jqueryzoom({xzoom:380,yzoom:380})});$(function(){var tempLength=0;var viewNum=4;var moveNum=2;var moveTime=300;var scrollDiv=$(".spec-scroll .items ul");var scrollItems=$(".spec-scroll .items ul li");var moveLength=scrollItems.eq(0).width()*moveNum;var countLength=(scrollItems.length-viewNum)*scrollItems.eq(0).width();$(".spec-scroll .next").bind("click",function(){if(tempLength<countLength){if((countLength-tempLength)>moveLength){scrollDiv.animate({left:"-="+moveLength+"px"},moveTime);tempLength+=moveLength}else{scrollDiv.animate({left:"-="+(countLength-tempLength)+"px"},moveTime);tempLength+=(countLength-tempLength)}}});$(".spec-scroll .prev").bind("click",function(){if(tempLength>0){if(tempLength>moveLength){scrollDiv.animate({left:"+="+moveLength+"px"},moveTime);tempLength-=moveLength}else{scrollDiv.animate({left:"+="+tempLength+"px"},moveTime);tempLength=0}}})});var TINY={};function T$(i){return document.getElementById(i)}TINY.box=function(){var p,m,b,fn,ic,iu,iw,ih,ia,f=0;return{show:function(c,u,w,h,a,t){if(!f){p=document.createElement("div");p.id="tinybox";m=document.createElement("div");m.id="tinymask";b=document.createElement("div");b.id="tinycontent";document.body.appendChild(m);document.body.appendChild(p);p.appendChild(b);m.onclick=TINY.box.hide;window.onresize=TINY.box.resize;f=1}if(!a&&!u){p.style.width=w?w+"px":"auto";p.style.height=h?h+"px":"auto";p.style.backgroundImage="none";b.innerHTML=c}else{b.style.display="none";p.style.width=p.style.height="100px"}this.mask();ic=c;iu=u;iw=w;ih=h;ia=a;this.alpha(m,1,80,3);if(t){setTimeout(function(){TINY.box.hide()},1000*t)}},fill:function(c,u,w,h,a){if(u){p.style.backgroundImage="";var x=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){TINY.box.psh(x.responseText,w,h,a)}};x.open("GET",c,1);x.send(null)}else{this.psh(c,w,h,a)}},psh:function(c,w,h,a){if(a){if(!w||!h){var x=p.style.width,y=p.style.height;b.innerHTML=c;p.style.width=w?w+"px":"";p.style.height=h?h+"px":"";b.style.display="";w=parseInt(b.offsetWidth);h=parseInt(b.offsetHeight);b.style.display="none";p.style.width=x;p.style.height=y}else{b.innerHTML=c}this.size(p,w,h,4)}else{p.style.backgroundImage="none"}},hide:function(){TINY.box.alpha(p,-1,0,5)},resize:function(){TINY.box.pos();TINY.box.mask()},mask:function(){m.style.height=TINY.page.theight()+"px";m.style.width="";m.style.width=TINY.page.twidth()+"px"},pos:function(){var t=(TINY.page.height()/2)-(p.offsetHeight/2);t=t<10?10:t;p.style.top=(t+TINY.page.top())+"px";p.style.left=(TINY.page.width()/2)-(p.offsetWidth/2)+"px"},alpha:function(e,d,a,s){clearInterval(e.ai);if(d==1){e.style.opacity=0;e.style.filter="alpha(opacity=0)";e.style.display="block";this.pos()}e.ai=setInterval(function(){TINY.box.twalpha(e,a,d,s)},20)},twalpha:function(e,a,d,s){var o=Math.round(e.style.opacity*100);if(o==a){clearInterval(e.ai);if(d==-1){e.style.display="none";e==p?TINY.box.alpha(m,-1,0,3):b.innerHTML=p.style.backgroundImage=""}else{e==m?this.alpha(p,1,100,5):TINY.box.fill(ic,iu,iw,ih,ia)}}else{var n=o+Math.ceil(Math.abs(a-o)/s)*d;e.style.opacity=n/100;e.style.filter="alpha(opacity="+n+")"}},size:function(e,w,h,s){e=typeof e=="object"?e:T$(e);clearInterval(e.si);var ow=e.offsetWidth,oh=e.offsetHeight,wo=ow-parseInt(e.style.width),ho=oh-parseInt(e.style.height);var wd=ow-wo>w?-1:1,hd=(oh-ho>h)?-1:1;e.si=setInterval(function(){TINY.box.twsize(e,w,wo,wd,h,ho,hd,s)},20)},twsize:function(e,w,wo,wd,h,ho,hd,s){var ow=e.offsetWidth-wo,oh=e.offsetHeight-ho;if(ow==w&&oh==h){clearInterval(e.si);p.style.backgroundImage="none";b.style.display="block"}else{if(ow!=w){e.style.width=ow+(Math.ceil(Math.abs(w-ow)/s)*wd)+"px"}if(oh!=h){e.style.height=oh+(Math.ceil(Math.abs(h-oh)/s)*hd)+"px"}this.pos()}}}}();TINY.page=function(){return{top:function(){return document.body.scrollTop||document.documentElement.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight},theight:function(){var d=document,b=d.body,e=d.documentElement;return Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight))},twidth:function(){var d=document,b=d.body,e=d.documentElement;return Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))}}}();$(document).ready(function(){var eee="";T$("ooooo").onclick=function(){eee=$(this).find("img").attr("src");var content2="<img maxwidth='800' maxheight='600' id='imgee' src='"+eee+"' />";TINY.box.show(content2,0,0,0,1)}});
document.writeln("<style type=\'text/css\'>");
document.writeln(".jqzoom{width:380px;height:380px;border:none;position:relative;top:-1px;padding:0px;cursor:pointer;margin:0px;display:block;overflow:hidden;text-align:center;vertical-align:middle;display:table-cell;}.jqzoom img{max-width:380px;max-height:380px;margin:0 auto;_margin-top:expression_r((300-this.height)/2);}.zoomdiv{z-index:99999;position:absolute;top:0px;left:0px;width:380px;height:380px;background:#FFF;border:1px solid #FAFAFA;display:none;text-align:center;overflow:hidden;}.jqZoomPup{z-index:10;visibility:hidden;position:absolute;top:0px;left:0px;width:20px;height:20px;border:1px solid #FAFAFA;background:#FAFAFA;opacity:0.5;-moz-opacity:0.5;-khtml-opacity:0.5;filter:alpha(Opacity=50);}.jqZoomPup img{min-width:380px;}.spec-preview{width:380px;height:380px;border:1px solid #FAFAFA;}.spec-scroll{clear:both;margin-top:5px;width:382px;height:54px;}.spec-scroll .prev{float:left;margin-right:8px;background:url(/images/duo_left.gif) center no-repeat}.spec-scroll .next{float:right;background:url(/images/duo_right.gif) center no-repeat}.spec-scroll .prev,.spec-scroll .next{display:block;text-align:center;width:19px;height:54px;cursor:pointer;}.spec-scroll .prev:hover,.spec-scroll .next:hover{background-color:none}.spec-scroll .items{float:left;position:relative;width:324px;height:56px;overflow:hidden;}.spec-scroll .items ul{position:absolute;width:640px;height:56px;overflow:hidden;}.spec-scroll .items ul li{float:left;width:67px;}.spec-scroll .items ul li span {display:table-cell;vertical-align:middle;width:50px;height:50px;text-align:center;border:1px solid #FAFAFA;padding:2px;margin:0px 4px;}.spec-scroll .items ul li img{max-width:50px;max-height:50px;cursor:pointer;}.spec-scroll .items ul li span:hover{border:2px solid #db241e;padding:1px;}#tinybox{position:absolute;display:none;padding:10px;background:#fff url(/images/preload.gif) no-repeat 50% 50%;border:10px solid #e3e3e3;z-index:99997;}#tinymask{position:absolute;display:none;top:0;left:0;height:100%;width:100%;background:#000;z-index:99997;}#tinycontent{background:#fff;}.spec-scroll .items ul li img{margin:0 auto}");
document.writeln("</style>");