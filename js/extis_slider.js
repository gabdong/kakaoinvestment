function slider(){

    const prevBtn = document.querySelector('.prev_btn');
    const nextBtn = document.querySelector('.next_btn');
    const sliderList = document.querySelector('.slider_list');

    function prev(){
        sliderList.style.left = -1090 + 'px';
    };
    function next(){
        sliderList.style.left = 0 + 'px';
    };

    prevBtn.addEventListener('click', function(){
        prev();
    });
    nextBtn.addEventListener('click', function(){
        next();
    });
};
slider();