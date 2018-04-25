function playVideo(){
    var headVideo = document.getElementById("head-video");
    if (headVideo.paused){
        headVideo.play();
    }else{
        headVideo.pause();
    }
    
    
}