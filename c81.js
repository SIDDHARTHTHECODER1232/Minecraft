var mouseEvent="empty";
var lastpositionofx,lastpositionofy;

canvas=document.getElementById('my_canvas');
ctx=canvas.getContext("2d");
color="green";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
  width_of_line=document.getElementById("width_of_the_line").value;
  mouseEvent="mouseDown";
    
   

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop; 
    if(mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last positon of x and y coordinates=");
console.log("x="+lastpositionofx+"y="+lastpositionofy);
ctx.moveTo(lastpositionofx,lastpositionofy);
console.log("current positon of x and y coordinates=");
console.log("x="+currentpositionofmousex+"y="+currentpositionofmousey);
ctx.lineTo(currentpositionofmousex,currentpositionofmousey);
ctx.stroke();
    } 
  lastpositionofx=currentpositionofmousex;
  lastpositionofy=currentpositionofmousey;  
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,camvas.height);
    
}