//IFrame Player APIの読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var url1 = document.getElementById('ytp1url');
var url2 = document.getElementById('ytp2url');
var url3 = document.getElementById('ytp3url');
var url4 = document.getElementById('ytp4url');
var displayBtn1 = document.getElementById('ytp1btn');
var displayBtn2 = document.getElementById('ytp2btn');
var displayBtn3 = document.getElementById('ytp3btn');
var displayBtn4 = document.getElementById('ytp4btn');
var videoId1;
var videoId2;
var videoId3;
var videoId4;
var player1Ready = false;
var player2Ready = false;
var player3Ready = false;
var player4Ready = false;

// URL入力欄から動画IDを取得
url1.addEventListener('input', function() {
    // URLのv=以降が動画id
    videoId1 = url1.value.split('v=')[1];
    // 正しいurlの形式だったとき&=クエリパラーメターがついていることがあるので取り除く
    if (videoId1) {
        const ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition != -1) {
            videoId1 = videoId1.substring(0, ampersandPosition);
        }
    }
}, false);

url2.addEventListener('input', function() {
    // urlのv=以降が動画id
    videoId2 = url2.value.split('v=')[1];
    // 正しいurlの形式だったとき&=クエリパラーメターがついていることがあるので取り除く
    if (videoId2) {
        const ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition != -1) {
            videoId2 = videoId2.substring(0, ampersandPosition);
        }
    }
}, false);

url3.addEventListener('input', function() {
    // urlのv=以降が動画id
    videoId3 = url3.value.split('v=')[1];
    // 正しいurlの形式だったとき&=クエリパラーメターがついていることがあるので取り除く
    if (videoId3) {
        const ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition != -1) {
            videoId3 = videoId3.substring(0, ampersandPosition);
        }
    }
}, false);

url4.addEventListener('input', function() {
    // urlのv=以降が動画id
    videoId4 = url4.value.split('v=')[1];
    // 正しいurlの形式だったとき&=クエリパラーメターがついていることがあるので取り除く
    if (videoId4) {
        const ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition != -1) {
            videoId4 = videoId4.substring(0, ampersandPosition);
        }
    }
}, false);

//表示ボタンが押されたらプレーヤーを生成する
displayBtn1.addEventListener('click', function() {
    //YouTubeプレーヤー生成
    ytPlayer1 = new YT.Player('ytPlayer1', {
        videoId: videoId1
    })
}, false);

displayBtn2.addEventListener('click', function() {
    //YouTubeプレーヤー生成
    ytPlayer2 = new YT.Player('ytPlayer2', {
        videoId: videoId2
    })
}, false);

displayBtn3.addEventListener('click', function() {
    //YouTubeプレーヤー生成
    ytPlayer3 = new YT.Player('ytPlayer3', {
        videoId: videoId3
    })
}, false);

displayBtn4.addEventListener('click', function() {
    //YouTubeプレーヤー生成
    ytPlayer4 = new YT.Player('ytPlayer4', {
        videoId: videoId4
    })
}, false);

document.getElementById('play').addEventListener('click', function() {
    ytPlayer1.playVideo();
    ytPlayer2.playVideo();
    ytPlayer3.playVideo();
    ytPlayer4.playVideo();
}, false);

document.getElementById('pause').addEventListener('click', function() {
    ytPlayer1.pauseVideo();
    ytPlayer2.pauseVideo();
    ytPlayer3.pauseVideo();
    ytPlayer4.pauseVideo();
}, false);

document.getElementById('mute').addEventListener('click', function() {
    ytPlayer1.mute();
    ytPlayer2.mute();
    ytPlayer3.mute();
    ytPlayer4.mute();
}, false);

document.getElementById('unMute').addEventListener('click', function() {
    ytPlayer1.unMute();
    ytPlayer2.unMute();
    ytPlayer3.unMute();
    ytPlayer4.unMute();
}, false);