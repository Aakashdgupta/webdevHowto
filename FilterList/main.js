let inp =document.getElementById('filter-input')


let ul = document.getElementById('collection')
let li= ul.querySelectorAll('li.item')


inp.oninput= function (){
  let filterval=inp.value.toUpperCase()
  
  
  
  for (var i =0; i<li.length;i++){
    
    
   let a = li[i].getElementsByTagName('a')[0]
    
    if(a.innerHTML.toUpperCase().indexOf(filterval) > -1)
    {
      li[i].style.display =''
    }else{
      li[i].style.display='none'
    }
      
    }
  }

