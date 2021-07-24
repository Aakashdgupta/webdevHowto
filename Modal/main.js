var click = document.getElementById('click').addEventListener('click',function(e){
         document.getElementsByClassName('modal')[0].style.display='grid'
     })

document.addEventListener("click",(e)=>{
	
	var modal = document.querySelector(".modal")
	
	if(e.target==modal){
		modal.style.display="none"
	}
	
})