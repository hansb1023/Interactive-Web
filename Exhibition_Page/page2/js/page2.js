let x = 0;
let y = 0;
let mx = 0;
let my = 0;
let speed = 0.03;
let scrollTop = 0;
let bg, bgWall, bgInterior, com, comChair, comLight, fgMoonlight, fg;

window.onload = function(){
    progressBar = document.getElementsByClassName("bar")[0];

    //이미지들 연결
    bg = document.getElementById("bg");
    bgWall = document.getElementById("bg-wall");
    bgInterior = document.getElementById("bg-interior");
    com = document.getElementById("com");
    comChair = document.getElementById("com-chair");
    comLight = document.getElementById("com-light");
    fgMoonlight = document.getElementById("fg-moonlight");
    fg = document.getElementById("fg");

    window.addEventListener('resize', stageResize, false);
    window.addEventListener('mousemove', mouseMove, false);
    window.addEventListener('scroll', scrollFunc, false);

    stageResize();
    loop();
}

function scrollFunc(e){
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);     스크롤값 콘솔에 찍어봄

    let per = Math.ceil(scrollTop / (_documentHum - _windowNum) * 100);
    progressBar.style.height = per + "%";   //세로 진행 바 위해

    //패럴렉스 핵심
    bg.style.transform = "translate3d(0px ," + scrollTop * .12 +"px, 0px)";
    bgWall.style.transform = "translate3d(0px ," + scrollTop * .50 +"px , 0px)";
    bgInterior.style.transform = "translate3d(0px ," + scrollTop * .50 +"px , 0px)";
    com.style.transform = "translate3d(0px ," + scrollTop * .35 +"px , 0px)";
    comLight.style.transform = "translate3d(0px ," + scrollTop * .35 +"px , 0px)";
    comChair.style.transform = "translate3d(0px ," + scrollTop * .45 +"px , 0px)";
    fgMoonlight.style.transform = "translate3d(0px ," + scrollTop * .55 +"px , 0px);"
    fg.style.transform = "translate3d(0px ," + scrollTop * 1.5 +"px , 0px)";
}

function stageResize() {        //per를 위한 함수 (document랑 window height값)
    _documentHum = document.body.offsetHeight;
    _windowNum = window.outerHeight;
}

function loop() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    // bgWall.style.transform = "translate("+ mx / 30 +"px ," + -my / 30 +"px)";
    // fgMoonlight.style.transform = "translate("+ mx / 50 +"px ," + -scrollTop * .85 +"px)";
    // fg.style.transform = "translate("+ -mx / 20 +"px ," + -my / 20 +"px)";

    window.requestAnimationFrame(loop);
}


function mouseMove (e) {        //윈도우 width의 가운데 기준
    x = (e.clientX - window.innerHeight / 2);
    y = (e.clientY - window.innerHeight / 2);
}
