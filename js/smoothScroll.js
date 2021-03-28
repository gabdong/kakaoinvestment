function smoothScroll(target, duration){

    target = document.querySelector('.' + target); // 스크롤대상
    const targetPosition = target.getBoundingClientRect().top - 48; // 스크롤대상 높이
    const startPosition = window.pageYOffset; // 시작높이 - 페이지높이값
    let startTime = null;

    // 애니메이션 함수
    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        };

        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);

        window.scrollTo(0, run);

        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        };
    };
    function ease(t, b, c, d){
        t /= d;
        return -c * t*(t-2) + b;
    };

    requestAnimationFrame(animation);
};

// event
const scrollBtn = document.getElementsByClassName('btn');

for(var i = 0 ; i < scrollBtn.length ; i++ ){
    scrollBtn[i].onclick = function(){
        const btnId = this.getAttribute('id');
        smoothScroll(btnId, 1000);
    };
};

function toTop(duration){

    const startPosition = window.pageYOffset; // 시작높이 - 페이지높이값
    const targetPosition = -startPosition; // 스크롤대상 높이
    let startTime = null;

    // 애니메이션 함수
    function animation(currentTime){
        if(startTime === null){
            startTime = currentTime;
        };

        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);

        window.scrollTo(0, run);

        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        };
    };
    function ease(t, b, c, d){
        t /= d;
        return -c * t*(t-2) + b;
    };

    requestAnimationFrame(animation);
};

const topBtn = document.querySelector('#topBtn');

topBtn.addEventListener('click', function(){
    toTop(1000);
});