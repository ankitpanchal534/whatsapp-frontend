function change() {
  let x = document.getElementById("mainScreen");
  let y = document.getElementById("SS");
  let z = document.getElementById("call");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

  } else {
    x.style.display = "block";
     y.style.display = "none";
     z.style.display = "none";
    
  } 

}
function change_two() {
  let x = document.getElementById("mainScreen");
  let y = document.getElementById("SS");
  let z = document.getElementById("call");

  if (y.style.display === "none") {
    y.style.display = "block";
    x.style.display = "none";
    z.style.display = "none";

  } else {

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

    } } 

function change_three(){
  let x = document.getElementById("mainScreen");
  let y = document.getElementById("SS");
  let z = document.getElementById("call"); 
if (z.style.display === "none"){
	z.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";

} else {
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "block";
}

}