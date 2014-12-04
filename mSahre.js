/**
 * mSahre 移动端分享功能 新闻客户端
 */
/* ua */
var UA = function(){
    var userAgent = navigator.userAgent.toLowerCase();
    return {
        ipad: /ipad/.test(userAgent),
        iphone: /iphone/.test(userAgent),
        android: /android/.test(userAgent),
        qqnews: /qqnews/.test(userAgent),
        weixin: /micromessenger/.test(userAgent)
    };
}
var mShare = {
    main: function(o){
        var _this = this;
        var d = {
            title: o.title || document.title,
            pic: o.pic || "",
            des: o.des || "",
            url: o.url || document.location.href
        };
        var ua = UA();
        switch(true){
            case ua.qqnews:
                window.TencentNews.shareFromWebView(d.title, d.des, d.pic);
                break;
            case ua.weixin:
                $(".wx_tips").show();
                $('.wx_tips').off('click').on('click',function(){
                   $('.wx_tips').hide();
                });
                //执行
                document.addEventListener('WeixinJSBridgeReady', function() {
                    onBridgeReady();
                });
                break;
            default:
                window.location = "http://share.v.t.qq.com/index.php?c=share&a=index&appkey=801378464&url="
                                + d.url + "&title="
                                + d.title + "&pic="
                                + d.pic;
                break;
        };
    },
    init: function(o){
        var _this = this;
        $(o.btn).bind("click", function(){
            var _o = $(this);
            $("#mc_result").addClass("mc_result_click");
            _this.main({
                title: _o.attr("data-title"),
                pic: _o.attr("data-pic"),
                des: _o.attr("data-des"),
                url: _o.attr("data-url")
            });
        });
    }
};
mShare.init({btn: ".sharebtn"});
