//RE|Build engine
//by Forsvunnet

//Document size:
var w = 80;var h = 120;
var scale = 4;var sscale = scale*scale;

//Global vars:
var canvas;     //The canvas element
var cData;      //The canvas pixels
var time;       //Time
var beginning;  //Beginning of time (Since started)
var fps = 23.9; //Frames per second
var plate;      //All the pixels that have been drawn
var buffer;     //New pixels to be drawn

/**
 * In theory with this engine you should be able to just update the buffer with pixels
 * and the engine will take care of the rest! Speed is the key!
 */

$(document).ready(function(){
  //Init pixel arrays
  buffer = new Array();
  plate  = new Array();
  //Define the canvas
  canvas = document.getElementById('game');
  
  var ctx = canvas.getContext('2d');
  cData = ctx.createImageData(w*scale, h*scale);
  
  //Init time
  var d = new Date();
  beginning = d.getTime();
  
  
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      //Do a check if there is a difference between them, 
      //and write the affected pixels to canvas & update plate.
      var pos = x+y*w;
      buffer[pos] = Math.random(255);
    }
  }
  
  setInterval(draw, 20); //50 calls/frames per second | every 20 ms
  
  $('#device').click(function(){
    //$("#console").html();
    //alert($('#device').css('width'));
    if($('#device').css('width')!='320px')
      $('#device').animate({'width':320}, 1000);
    else
      $('#device').animate({'width':320+650}, 1000);
  });
});
var fC = 0;
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
function etch(){
  dbg = (dbg+1)%10;
  //if(dbg==0)
    //$("#console").prepend(dbgx+"<br/>");
  var ctx = canvas.getContext('2d');
  //var canvasData = ctx.createImageData(w*scale, h*scale);
  
  //should we check for updates before requesting cData?
  /**/
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      //Do a check if there is a difference between them, 
      //and write the affected pixels to canvas & update plate.
      var pos = x+y*w;
      buffer[pos] = Math.random()*255*255*255;
    }
  }
  for (var x = 0; x < w; x++) {
    for (var y = 0; y < h; y++) {
      //Do a check if there is a difference between them, 
      //and write the affected pixels to canvas & update plate.
      var pos = x + y * w;
      if(buffer[pos] != null && plate[pos] != buffer[pos]) {
        plate[pos] = buffer[pos];
        //can we do a bitwise division?
        for(var i = 0; i < sscale; i++){
          var xa = i >> 2;//sqrt scale //oh yes we can!
          //(That means i'm clever btw!)
          var ya = i % scale;
          
          var idx = ((x * scale + xa) + (y * scale + ya) * w * scale ) * 4;
          cData.data[idx+0] = buffer[pos]>>16&0xFF;//red
          cData.data[idx+1] = buffer[pos]>>8&0xFF;//green
          cData.data[idx+2] = buffer[pos]&0xFF;//blue
          cData.data[idx+3] = 255;//alpha always visible
          dbgx++;
        }
      }
    }
  }
  /**/
  
  //should we check for updates before writing cData?
  ctx.putImageData(cData, 0, 0);
}
