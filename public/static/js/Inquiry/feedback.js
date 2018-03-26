document.writeln('<link href="/images/feedback.css" rel="stylesheet" type="text/css" />');
document.writeln('<div class="feedbackForm" id="F1" name="F1">');
document.writeln('  <form name="feedbackForm" action=\'\' id="feedbackForm" method="post">');
document.writeln('    <table border="0" align="center" cellspacing="0" cellpadding="0">');
document.writeln("      <tr>");
document.writeln('        <td class="ftxt"><div class="lable">' + $lang.tdName + '</div></td>');
document.writeln('        <td class="fput"><input id="SubmitName" name="SubmitName" class="text" maxlength="40" /></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln('        <td><div class="lable"><span class="xh">*</span>' + $lang.tdEmail + '</div></td>');
document.writeln('        <td><input id="SubmitEmail" name="SubmitEmail" class="text" maxlength="50" placeholder="' + $lang.tdstips + '" ></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln('        <td><div class="lable">' + $lang.tdPhone + '</div></td>');
document.writeln('        <td><input id="SubmitPhone" name="SubmitPhone" class="text"  maxlength="40" /></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln('        <td><div class="lable">' + $lang.tdCompanyName + '</div></td>');
document.writeln('        <td><input id="SubmitCompanyName" name="SubmitCompanyName" class="text"  maxlength="140"  /></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln('        <td><div class="lable">' + $lang.tdTitle + '</div></td>');
document.writeln('        <td><input id="SubmitTitle" name="SubmitTitle" class="text"  maxlength="340"  /></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln('        <td valign="top"><div class="lable"><span class="xh">*</span>' + $lang.tdContent + ':</div></td>');
document.writeln('<td><textarea name="SubmitContent\" id="SubmitContent" class="atextarea" cols="50" rows="5" maxlength="2000" placeholder="' + $lang.tdxtips + '" ></textarea></td>');
document.writeln("      </tr>");
document.writeln("      <tr>");
document.writeln("        <td></td>");
document.writeln('        <td><div class="fsbtn"><button class="submita" id="ImgSend" >' + $lang.btnSubmit + '</button><span id="msg"></span></div></td>');
document.writeln("      </tr>");
document.writeln("    </table>");
document.writeln("  </form>");
document.writeln("</div>");
function FixJqText(c) {
    var d = c.replace(/\+/g, "＋");
    return d;
}
$.fn.formreset = function () {
    $(this).each(function () {
        this.reset();
    });
    $("#msg").text("");
};
$("#ImgSend").click(function () {
    var g = $.trim($("#SubmitName").val());
    if (g.length > 400) {
        alert($lang.msgTooLongName);
        $("#SubmitName").focus();
        return false;
    }
    var j = $.trim($("#SubmitEmail").val());
    if (j == "") {
        alert($lang.msgInputEmail);
        $("#SubmitEmail").focus();
        return false;
    }
    var i = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!i.test(j)) {
        alert($lang.msgCheckEmail);
        $("#SubmitEmail").focus();
        return false;
    }
    var h = $.trim($("#SubmitTitle").val());
    if (h.length > 340) {
        alert($lang.msgTooLongTitle);
        $("#SubmitTitle").focus();
        return false;
    }
    var f = $.trim($("#SubmitContent").val());
    if (f == "") {
        alert($lang.msgInputContent);
        $("#SubmitContent").focus();
        return false;
    }
    if (f.length > 2000) {
        alert($lang.msgTooLongContent);
        $("#SubmitContent").focus();
        return false;
    }
    $(this).attr("disabled", "disabled");
    $("#msg").text($lang.txtSubmit);
    $.ajax({
        type: "POST",
        url: "/OutOpen/AddInquiry",
        data: {
            name: escape(FixJqText(g)),
            company: escape(FixJqText($("#SubmitCompanyName").val())),
            proId: $.trim($("#productID").val()),
            phone: $("#SubmitPhone").val(),
            email: j,
            title: escape(FixJqText(h)),
            content: escape(FixJqText(f)),
            pageUrl: document.URL
        },
        dataType: "json",
        error: function () {
            alert($lang.msgSendFailed);
            $("#ImgSend").removeAttr("disabled");
            $("#msg").text("");
        },
        success: function (a) {
            $("#ImgSend").removeAttr("disabled");
            if (a == "1") {
                alert($lang.msgSendSucess);
                $("#feedbackForm").formreset();
            } else if (a == "2") {
                alert($lang.msgSameContent);
            } else {
                alert($lang.msgSendFailed);
            }
            $("#msg").text("");
        },
        async: false
    });

    return false;
});