document.writeln("<style type=\'text/css\'>");
document.writeln(".main-im{position:fixed;right:10px;top:200px;z-index:100;width:160px;height:auto;z-index: 999999999999999999999}");
document.writeln(".main-im .close-im{position:absolute;right:6px;top:12px;z-index:9999999999;display:block;width:36px;height:36px;}");
document.writeln(".main-im .open-im{cursor:pointer;margin-left:94px;width:75px;height:229px;background:url(/images/Common3/ssss_1.png) no-repeat left top;-webkit-box-shadow:0 0 6px #ddd;-moz-box-shadow:0 0 6px #ddd;box-shadow:0 0 6px #ddd; border-radius:3px;}");
document.writeln(".main-im .open-im span.ss_kf{display:block;height:84px;}");
document.writeln(".main-im .open-im span.ss_fb{display:block;height:81px;}");
document.writeln(".main-im .open-im span.ss_top{display:block;height:65px;}");
document.writeln(".main-im .im_main{background:# ;background:#fff;display:none;}.main-im .im_main #cont_im{border:1px solid #badcee;}");
document.writeln(".main-im .im_main .fb_im{background:url(/images/Common3/ssss_2.png) no-repeat; height:44px;}");
document.writeln(".cico{padding:8px 0 3px 8px;color:#333;font-size:12px!important;}.cico a{color:#333; text-decoration:none}");
document.writeln(".cico li{display:block;height:29px; line-height:29px ; text-align:left;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}.cico li img{vertical-align:middle}");
document.writeln(".follow{padding:0 0 8px 0;text-align:center;border-top:1px solid #ddd;}");
document.writeln(".follow img{margin:0 3px; display:inline}.follow span{display:block; height:20px; clear:both;padding-top:4px; text-align:left; text-indent:12px;color:#666}");
document.writeln(".im-inquiry{position:relative}.im-feedback{height:44px;background:url(/images/Common3/ssss_3.png) no-repeat; cursor:pointer}");
document.writeln("#sendinquiry{display:none;width:420px;position:absolute;left:-480px; top:-160px;background:#fff; border:1px solid #c6d2a4; padding:20px; -webkit-box-shadow: 2px 2px 2px #ddd; -moz-box-shadow: 2px 3px 3px #ddd; box-shadow: 2px 2px 2px #ddd;}");
document.writeln(".im-inquiry .fbinfo{padding:12px 0;font-size:14px; background:#f1f1f1; margin:0 20px;color:#666}");
document.writeln(".im-inquiry h3{font-size:22px; text-align:left;margin:8px auto;padding:0;}");
document.writeln(".im-inquiry #SubmitEmail_Float{border:1px solid #e2e2e2; width:418px; height:32px; line-height:32px; text-indent:12px; padding:0; margin:16px auto;}");
document.writeln(".im-inquiry #SubmitContent_Float{border:1px solid #e2e2e2; width:418px; height:128px; line-height:32px; text-indent:12px; padding:0; margin:0;}");
document.writeln(".im-inquiry #ImgSend_Float{display:block;width:418px;background:#92b61f; height:32px; line-height:32px; text-align:center; padding:0; margin:12px 0; border-radius:3px;color:#fff; cursor:pointer; border:0; font-size:16px;}");
document.writeln(".im-inquiry #ImgSend_Float:hover{background:#88b203; text-decoration:none}.email{word-break: break-all;}");
document.writeln(".im-inquiry .shut{background:url(/images/Common3/ssss_btn.png) top right no-repeat;float:right;width:36px; height:36px; cursor:pointer}");
document.writeln("</style>");


document.writeln("<div class=\"main-im\">");
document.writeln("  <div id=\"open_im\" class=\"open-im\"><span class=\"ss_kf\"></span> <span class=\"ss_fb\">&nbsp;</span> <span class=\"ss_top\"></span></div>");
document.writeln("  <div class=\"im_main\" id=\"im_main\">");
document.writeln("    <div id=\"fb_im\" class=\"fb_im\"><a href=\"javascript:void(0);\" title=\"close\" id=\"close_im\" class=\"close-im\"> </a></div>");
document.writeln("    <div id=\"cont_im\">");
document.writeln("      <ul class=\"cico\">");

document.writeln("        <li class='email'><a href='mailto:foreignerhr@sina.com' ><img src='/images/Common3/eico9.png' alt='email' /> foreignerhr@sina.com </a></li>");

document.writeln("      </ul>");
document.writeln("      <div class=\"follow\"> <span>Follow us :</span> <a href='#' target='_blank'><img src='/images/Common3/fico9.png' alt='facebook' /></a><a href='#' target='_blank'><img src='/images/Common3/tico9.png' alt='Twitter' /></a><a href='#' target='_blank'><img src='/images/Common3/lico9.png' alt='Linkedin' /></a><a href='#' target='_blank'><img src='/images/Common3/pico9.png' alt='Pinterest' /></a><a href='#' target='_blank'><img src='/images/Common3/gico9.png' alt='GooglePlus' /></a></div>");
document.writeln("    </div>");
document.writeln("    <div class=\"im-inquiry\" onselectstart=\"return false;\">");
document.writeln("      <div id=\"sendinquiry\"><span class=\"shut\"> </span>");
document.writeln("          <h3>Feedback</h3>");
document.writeln("          <p class=\"message\">Please include your contact information if you\'d like to receive a reply.</p>");
document.writeln("          <p>");
document.writeln("            <input type=\"text\" name=\"SubmitEmail_Float\" id=\"SubmitEmail_Float\" placeholder=\"E-mail\" >");
document.writeln("          </p>");
document.writeln("          <textarea name=\"SubmitContent_Float\" id=\"SubmitContent_Float\"></textarea>");
document.writeln("          <a class=\"submit\" onclick=\"submitFloatInquiry()\" id=\"ImgSend_Float\">Submit</a> </div>");
document.writeln("    </div>");
document.writeln("    <div class=\"im-feedback\"></div>");
document.writeln("  </div>");
document.writeln("</div>");


$(function(){$('.ss_fb').click(function(){$('#main-im').css("height","auto");$('#im_main').show();$('#open_im').hide();$('#sendinquiry').show()});$('.ss_top').click(function(){$("html, body").animate({scrollTop:0},1)});$('#close_im').click(function(){$('#main-im').css("height","0");$('#im_main').hide();$('#sendinquiry').hide();$('#open_im').show()});$('#open_im .ss_kf').click(function(e){$('#main-im').css("height","auto");$('#im_main').show();$('#open_im').hide()});$('.im-feedback').click(function(){$('#sendinquiry').show()});$('.shut').click(function(){$('#sendinquiry').hide()})});