var proxy = "PROXY 192.168.1.172:3456";

//使用代理
var keywords = [
    '1e100',
    'abema',
    'appledaily',
    'avtb',
    'beetalk',
    'blogspot',
    'dropbox',
    'facebook',
    'fbcdn',
    'github',
    'gmail',
    'google',
    'instagram',
    'porn',
    'sci-hub',
    //'spotify',
    'telegram',
    'twitter',
    'whatsapp',
    'youtub'
];

var hostKeywords =[
  'eu',
  'hk',
  'jp',
  'kr',
  'sg',
  'tw',
  'uk',
  'us',
  'googlevideo.com',
  'gvt2.com',
  'youtu.be',
  'youtube.com',
  'ytimg.com',
];

var hosts = [
 'youtubei.googleapis.com',
 'yt3.ggpht.com',
];

function FindProxyForURL(url, host) {
    //url
    for (var i = 0; i < keywords.length; i++) {
          let keyword = "*"+ keywords[i]+"*";
          //关键词匹配成功
          if (shExpMatch(url, keyword)){
              return proxy;
          }
    }
    //host
    for (var j = 0; j < hostKeywords.length; j++) {
          let hostname = "."+ hostKeywords[j];
          //关键词匹配成功
          if (dnsDomainIs(host, hostname)){
              return proxy;
          }
    }
    //完全相等
    for (var k = 0; k < hosts.length; k++)
    {
      //匹配成功
        if (host == hosts[k] ){
            return proxy;
        }
    }
  //默认直连
  return 'DIRECT';
}
