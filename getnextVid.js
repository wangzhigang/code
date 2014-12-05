//获取vid
function getVid(vid){
  var nextvid = '';
  for(var i = 0;i < videos.length;i++){
      if(videos[i].vid == vid && i < videos.length-1){
          nextvid = videos[i+1].vid;
          break;
      }
  }
}

