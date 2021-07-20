console.log('Hello World!');

var slider = document.getElementById('slider');
var demo = document.getElementById('demo');
slider.oninput= function showval(e) {
  demo.innerText=this.value;
}
