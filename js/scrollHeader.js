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