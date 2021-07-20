
//getting all radio with name gender
var genders = document.getElementsByName("gender");

var selectedGender;


//adding change event listener on all rafios with name gender

for (var i =0; i<genders.length;i++){
  genders[i].addEventListener('change',function(e){
    
    // callback function body check which radio is selected and gets its value
    
    
    for (var i = 0; i < genders.length; i++) {
  if (genders[i].checked)
    selectedGender = genders[i].value;
}

console.log(selectedGender)

    
  })
}

/*

*/