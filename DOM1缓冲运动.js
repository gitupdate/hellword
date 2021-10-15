/**
 * Created by Administrator on 2016/8/4.
 */
window.onload=function(){
    var main=document.getElementById('main');
    var t;
    var speed;
    main.onmouseover=function(){
        move(0);
    };
    main.onmouseout=function(){
        move(-200);
    }
    function move(target){
        clearInterval(t);
        t=setInterval(function(){
            if(main.offsetLeft==target){
                clearInterval(t);
            }else if(main.offsetLeft<target){
                    speed=(target-main.offsetLeft)/5;
                    speed=Math.ceil(speed);
                    main.style.left=main.offsetLeft+speed+'px';
                }else{
                    speed=(target-main.offsetLeft)/5;
                    speed=Math.floor(speed);
                    main.style.left=main.offsetLeft+speed+'px';
                }
        },100);
    }
}