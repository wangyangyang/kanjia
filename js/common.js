// document.write('<script src="./js/md5.js"></script>');

var url = 'http://interalapi.yaolancenter.com';


(function(doc, win) {
    
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);



function timeStamp(){
    var timeStamp = Date.parse(new Date())/1000;
    return timeStamp;
}

function falseToken(url){
    return md5(url+'|web|'+timeStamp());
}

function trueToken(url){
    // md5(URL.'|'.设备标识.'|'.当前时间戳.'|'.登录返回TOKEN.'|'.用户ID)
    var token = sessionStorage.getItem('token');
    var userId = sessionStorage.getItem('userId');
    return md5(url+'|web|'+timeStamp()+'|'+token+'|'+userId);
}

function Token(url){
    var loginState =  JSON.parse(sessionStorage.getItem('loginState'));
    if(loginState){
        // console.log(url+'|web|'+timeStamp()+'|'+loginState.token+'|'+loginState.userId)
        return md5(url+'|web|'+timeStamp()+'|'+loginState.token+'|'+loginState.userId);
    }else{
        return md5(url+'|web|'+timeStamp());
    }
}
function islogin(){
    var loginState =  JSON.parse(sessionStorage.getItem('loginState'));
    if(loginState){
        return 1;
    }else{
        return 0;
    }
}

function back_url(){
    sessionStorage.setItem('back_url',location.href)
    location.href = './login.html';
}


