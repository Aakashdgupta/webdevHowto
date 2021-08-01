let heads = document.getElementsByClassName('accordion-head')
        let body = document.getElementsByClassName('accordion-body')

        for(let i =0 ;i<heads.length;i++){
            heads[i].addEventListener('click',function (e){
                if(body[i].style.maxHeight){
                    body[i].style.maxHeight=null
                }
                else{
                    body[i].style.maxHeight=body[i].scrollHeight +'px'
                }
        
            })
        }