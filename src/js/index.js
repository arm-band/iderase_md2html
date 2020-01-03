$(function() {
    //ページトップへ戻る
    pageTop();

    //ブラー時発動
    $("#mdTextarea").on("blur", function(){
        md2html();
    });
});

//ページトップへ戻る
function pageTop() {
    var returnPageTop = $(".returnPageTop");

    //下にスクロールしたらヘッダの高さを縮小させる
    var startPos = 0;
    $(window).on("scroll", function(){
        var currentPos = $(this).scrollTop();
        //ページトップへスクロールして戻る
        if (currentPos > 400) {
            returnPageTop.fadeIn();
        } else {
            returnPageTop.fadeOut();
        }
    });

    //ページトップへスクロールして戻る
    returnPageTop.on("click", function () {
        $("body, html").animate({ scrollTop: 0 }, 1000, "swing");
        return false;
    });
}

//ID削除
function idEraser(str) {
    var filterdStr = str.replace(/ id="(.)*"/gi, '');

    return filterdStr;
}

//md2html同期
function md2html() {
    // 要素を取得
    var input = $("#mdTextarea");
    var output = $("#htmlTextarea");

    var value = input.val(); //入力テキストエリアから値を取得
    var md = "";
    if(value.length > 0) {
        md = idEraser(marked(value)); //マークダウンから変換し、ID除去フィルタを通す
    }
    output.val(md); //アウトプット
}

window.onload = function() {
    //初期動作
    md2html();

    $("#mdTextarea").select();
};