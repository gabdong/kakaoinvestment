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