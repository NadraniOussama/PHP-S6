window.onload = function() {
	var xx = document.getElementById("bodyContent").offsetHeight;
	xx+=40;
 document.getElementById("leftNav").style.height = xx+"px"; 

}

function openNav() {
  document.getElementById("leftNavcontent").style.display = "block";
  document.getElementById("leftNav").style.width = "16%";
   document.getElementById("leftNavDisplay").style.display = "none"
     document.getElementById("bodyContent").style.width = "80%";


}

function closeNav() {
  document.getElementById("leftNavcontent").style.display = "none";
  document.getElementById("leftNavDisplay").style.display = "block";
  document.getElementById("leftNav").style.width = "47px";
  document.getElementById("bodyContent").style.width = "91%";

}