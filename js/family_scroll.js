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