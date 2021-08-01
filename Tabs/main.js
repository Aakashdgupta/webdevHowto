let tabs = document.getElementsByClassName('tab')
let body =document.getElementsByClassName('tab-body')

body[0].style.display='block'




for(let i =0;i<tabs.length;i++){

    tabs[i].addEventListener('click',function(e){
        

        //hideing all tabs 

        for(let j=0;j<body.length;j++){
                body[j].style.display='none'
            }

        //showing clicked tab


        if(body[i].style.display ='none'){
            body[i].style.display='block'
            
        }

        //changing tabs background color

        for(let i=0;i<tabs.length;i++){
             tabs[i].classList.remove('active')
        }
          
        tabs[i].classList.add('active')
     
    })
}


