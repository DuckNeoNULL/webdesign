if (typeof document !== 'undefined') {
    var buyBtn=document.querySelectorAll('.js-buy');
    var addClass= document.querySelector('.Modal')
    for(var i=0;i<buyBtn.length;i++) {
        var btnclick=buyBtn[i];
        btnclick.onclick=()=>{
            addClass.classList.add("open");
        }
    }
    var closeBtn=document.querySelector('.js-close')
    closeBtn.onclick=()=>{
        addClass.classList.remove("open");
    }
    var header = document.getElementById('header');
       var mobileMenu = document.querySelector('.menu-btn');
       var headerHeight= header.clientHeight;
       mobileMenu.onclick = ()=>{
         var isClosed= header.clientHeight === headerHeight ;
        if (isClosed){
            header.style.height='auto';
        } else{
            header.style.height=null;
        }
       }
       
       var menuItems= document.querySelectorAll('#nav li a[href*="#"]');
       for (var i=0;i < menuItems.length;i++){
            var menuItem = menuItems[i];
            menuItem.onclick = function(event) {
                var isParentMenu= this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
                if(!isParentMenu){
                     header.style.height=null;
                }else{
                    event.preventDefault();
                }
            }
        }
        // click on 'More' to review the list then close';
        // var subnav= document.querySelector('.subnav')
        // var menuMore= document.querySelector('.menu-more')
        // var subnavHeight= subnav.clientHeight;
        // menuMore.onclick = ()=>{
        //     var isClosed= subnav.clientHeight === subnavHeight ;
        //     if (!isClosed){
        //         subnav.style.height='auto';
        //     } else{
        //         subnav.style.height=0;
        //     }
        // }
}