# KaKao Investment - Clone Coding

## [ViewSite](http://gabdong.dothome.co.kr/kakaoinvestment)

***
기존 KaKao Investment의 사이트를 클론코딩하였습니다.

플러그인 사용없이 Vanilla Js를 이용하여 작업하였습니다.

***

## Smooth Scroll

scrollAnimation 함수를 한든뒤 requestAnimationFrame()메서드를 이용하여 애니메이션을 구현하였습니다.

### scroll Animation Function
- 지속시간과 실행 시간을 구하여 실행시간이 지속시간보다 작다면 함수가 다시 실행되도록 하였습니다.
- window.scrollTo메서드를 이용하였고 ease function을 이용해 top값이 유동적으로 변할수 있게 하였습니다.

```javascript
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
```

***

## Scroll Animation

- 타겟의 높이값, 페이지의 기본높이값을 구한뒤 타겟의 높이 - 페이지 기본높이값이 0보다 작다면 클래스 변경이 돼 애니메이션이 실행되도록 하였습니다.
- scale변화 slideUp, fadein, backbground 변경 등의 애니메이션 기능을 만들었습니다.

```javascript
function scrollAnimation(){

    function fadeIn(){
        
        let elements = '';
        let windowHeight = window.innerHeight;
    
        function inIt(){
            elements = document.querySelectorAll('.hidden-fade-in');
        };
    
        function checkPosition(){
            for(var i = 0 ; i < elements.length ; i++){
                const element = elements[i];
                const positionFromTop = element.getBoundingClientRect().top;
    
                if(positionFromTop - windowHeight <= 0){
                    element.classList.add('fade-in-element');
                    element.classList.remove('hidden-fade-in');
                };
            };
        };
    
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', inIt);
    
        inIt();
        checkPosition();
    };
    fadeIn();

    function slideUp(){

        let elements = '';
        let windowHeight = window.innerHeight;

        function inIt(){
            elements = document.querySelectorAll('.hidden-slide-up');
        };

        function checkPosition(){
            for(var i = 0 ; i < elements.length ; i++){
                const element = elements[i];
                const positionFromTop = element.getBoundingClientRect().top;

                if(positionFromTop - windowHeight <= 0){
                    element.classList.add('slide-up-element');
                    element.classList.remove('hidden-slide-up');
                };
            };
        };

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', inIt);

        inIt();
        checkPosition();
    };
    slideUp();

    function bgChange(){
        
        let element = '';
        let windowHeight = window.innerHeight;

        function inIt(){
            element = document.querySelector('.hidden-bg-change');
        };

        function checkPosition(){

            const positionFromTop = element.getBoundingClientRect().top;

            if(positionFromTop - windowHeight <= 0){
                element.classList.add('bg-change-element');
                element.classList.remove('hidden-bg-change');
            };
        };

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', inIt);

        inIt();
        checkPosition();
    };
    bgChange();

    function scale(){

        let elements = '';
        let windowHeight = window.innerHeight;

        function inIt(){
            elements = document.querySelectorAll('.hidden-scale');
        };

        function checkPosition(){
            for(var i = 0 ; i < elements.length ; i++){
                const element = elements[i];
                const positionFromTop = element.getBoundingClientRect().top;

                if(positionFromTop - windowHeight <= 0){
                    element.classList.add('scale-element');
                    element.classList.remove('hidden-scale');
                };
            };
        };

        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', inIt);

        inIt();
        checkPosition();
    };
    scale();
};
scrollAnimation();
```
***

## Scroll Header

- 페이지의 스크롤값을 구하여 스크롤 위치에 따라 헤더가 변경되는 함수를 만들었습니다.

```javascript
var scrollHeader = function(){

    let gnb = document.querySelector('.gnb_inner');

    function onScrollInterval(){
        window.onscroll = function(){
            if(document.documentElement.scrollTop > 768){
                gnb.classList.add('scrollOn');
            }else if(document.documentElement.scrollTop <= 768){
                gnb.classList.remove('scrollOn');
            };;
        };
    };

    setInterval(onScrollInterval, 1000);
};

scrollHeader();
```

***

## Family Scroll

- Family Section의 버튼 클릭시 id값을 받아와 해당 Family 화면으로 슬라이드 되는 함수입니다.
- for문을 이용하여 familyitem의 클래스값과 버튼아이디값을 대조한뒤 같은 item의 index를 받아 마진값을 변경시켜 슬라이더를 구현하였습니다.

```javascript
function familyScroll(id){

    const familyItems = document.querySelectorAll('.family_item');
    const familyDisplay = document.querySelector('.family_display');
    const comparing = document.querySelector('.' + id);
    const familyListHeight = 653;
    let multiplication = 0;

    function familyItemsMarginChane(){

        for(var i = 0 ; i < familyItems.length ; i++){
            if(familyItems[i] === comparing){
                multiplication = i;
            };
        };

        familyDisplay.style['margin-top'] = -familyListHeight * multiplication + 'px';
    };
    familyItemsMarginChane();
};

// event
const btn = document.querySelectorAll('.family_btn');

for(var i = 0 ; i < btn.length ; i++ ){
    btn[i].onclick = function(){
        const btnId = this.getAttribute('id');
        familyScroll(btnId);
    };
};
```
