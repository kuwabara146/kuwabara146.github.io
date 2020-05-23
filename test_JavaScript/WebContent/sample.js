//IFrame Player APIの読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var url = document.getElementById('ytp1url');
var btn = document.getElementById('ytp1btn');
var videoId;
// 表示ボタンが押されたら動画生成開始
btn.addEventListener('click', function() {
    //URL入力欄を非表示

    //ボタンを非表示
    btn.style.display = 'none';
    // urlのv=以降が動画id
    videoId = url.value.split('v=')[1];
    // 正しいurlの形式だったとき
    if (videoId) {
        // &=クエリパラーメターがついていることがあるので取り除く
        const ampersandPosition = videoId.indexOf('&');
        if(ampersandPosition != -1) {
            videoId = videoId.substring(0, ampersandPosition);
        }
    }
    //YouTubeプレーヤー生成
    ytPlayer = new YT.Player('ytPlayer', {
        width: '640',
        height: '390',
        videoId: videoId
    })
}, false);