function jsFullScreen(dom) {
    if(dom.requestFullscreen) {
        return dom.requestFullScreen();
    }else if(dom.webkitRequestFullScreen){
        return dom.webkitRequestFullScreen();
    }else if(dom.mozRequestFullScreen){
        return dom.mozRequestFullScreen();
    }else{
        return dom.msRequestFullscreen();
    }
}
function jsExitFullScreen() { 
    if(document.exitFullscreen) { 
        document.exitFullscreen(); 
    } else if(document.mozExitFullScreen) { 
        document.mozExitFullScreen(); 
    } else if(document.webkitExitFullscreen) { 
        document.webkitExitFullscreen(); 
    } else if(document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.cancelFullScreen) {
        document.cancelFullScreen();
    }
} 
function jsIsFullScreen() {
    if (document.webkitIsFullScreen) {
        return document.webkitIsFullScreen;
    } else if (document.mozFullScreen) {
        return document.mozFullScreen;
    } else if(document.fullScreen) {
        return document.fullScreen;
    }
}
    
function download(src) {
    var a = document.createElement('a');
    a.setAttribute("href", src);
    a.setAttribute("download", "");

    var evObj = document.createEvent('MouseEvents');
    evObj.initMouseEvent( 'click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null);
    a.dispatchEvent(evObj);
};