function down(){
    var h=getScrollTop();
    var position=h;
    if(true){
        position++;
        scroll(0,position);
        clearTimeout(timer);
        var timer = setTimeout("down()",10);
    }
}
function up(){
    var h=getScrollTop();
    var position=h;
    if(true){
        position--;
        scroll(0,position);
        clearTimeout(timer);
        var timer = setTimeout("up()",10);
    }
}
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}