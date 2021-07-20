console.log('hello')

let togle = document.getElementById('togle');

console.log(togle.checked)

togle.onchange =function(){
  if(togle.checked){
    console.log('its Checked')
  }else{
    console.log('its Not Checked')
  }
}