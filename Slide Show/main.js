let slides = document.getElementsByClassName('slide')
        n = 0
        showslide()

 let next = document.getElementsByClassName('next')[0].addEventListener('click',showNext)
 let prev = document.getElementsByClassName('prev')[0].addEventListener('click',showPrevious)



 function showNext(){
      if( n !=0){slides[n-1].style.display ='none'}
            else{
                slides[slides.length -1].style.display ='none'
            }
           
            showslide()
        }


    function showPrevious(){
        if (n == 1){
           slides[n-1].style.display='none'
                n=slides.length-1
                showslide()
                return
            
            }
            else if (n == 0){
                slides[slides.length-1].style.display='none'
                n=slides.length-2
                showslide()
                return
            }
            else{
                slides[n-1].style.display='none'
                n=n-2
                showslide()
                return
            }

        }
        

        function showslide(){
            slides[n].style.display ='grid'
            n = (n+1) % slides.length
            console.log(n)

        }


        //automatic slideshow


        setInterval(() => {
            showNext()  
      }, (5000));

        
        


   