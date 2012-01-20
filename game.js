//(function(){
////RE|Build engine
//by Forsvunnet

//Document size:
var w = 80;var h = 120;
var scale = 4;var sscale = scale*scale;

//Global vars:
var canvas;     //The canvas element
var cData;      //The canvas pixels

//Timing Vars:
var time;       //Time
var beginning;  //Beginning of time (Since started)
var fps = 23.9; //Frames per second

$(document).ready(function(){
  //Init pixel arrays
  buffer = new Array();
  plate  = new Array();
  //Define the canvas
  canvas = document.getElementById('game');
  
  //Init time
  var d = new Date();
  beginning = d.getTime();
  
  setInterval(draw, 20); //50 calls/frames per second | every 20 ms
  
  /**
   * Toggle the html console
   */
  $('#device').click(function(){
    //$("#console").html();
    //alert($('#device').css('width'));
    if($('#device').css('width')!='320px')
      $('#device').animate({'width':320}, 1000);
    else
      $('#device').animate({'width':320+600}, 1000);
  });
  init();
});
var fC = 0;
function log(output){
  $("#console").prepend(output + "<br />");
}
function draw() {
  //determine when to call an etch
  var d = new Date();
  time = d.getTime() - beginning;
  var cF=Math.round(time/fps);
  if(cF!=fC){
    //The current frame is not equal to frame count
    etch();   //Etch a new frame
    fC = cF;  //Update the frame count
  }
  
}
var dbg = 0;
var dbgx = 0;
var test = true;
var bdrop;
function init(){
  bdrop = new Backdrop("bdrop.png");
  bdrop.y=20;
}
function etch(){
  var ctx = canvas.getContext('2d');
  //DRAW STUFFS HERE:
  //console.log(bdrop).draw();
  ctx.fillStyle = "#FFFFFF";
  ctx.rect(0,0,w, h);
  ctx.fill();
  bdrop.draw(ctx);
  
}

