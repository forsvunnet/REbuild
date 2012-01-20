
function Backdrop(src){
  this.image = new Image();
  this.image.loaded = false;
  this.image.onload = function() {
    this.loaded = true;
  }
  this.image.src = src;
  this.repeat_x = true;
  this.repeat_y = false;
  this.x=0;
  this.y=0;
  this.draw = function(ctx){if(this.image.loaded){
    //if()
    //Draw the image to to x and y. repeats the image within 0<w & 0<h
    this.x = this.x%this.image.width;
    this.y = this.y%this.image.height;
    var lix = 0;var oliy = 0;
    if(this.x>0 && this.repeat_x)lix-=1;
    if(this.y>0 && this.repeat_y)oliy-=1;
    var hix = 1;var hiy = 1;
    if(this.x+this.image.width >w && this.repeat_x)hix+=1;
    if(this.y+this.image.height>h && this.repeat_y)hiy+=1;
    //My pretty loops:
    //console.log(this.image.src);
    while(lix<hix){
      var liy = oliy;
      while(liy<hiy){ 
      ctx.drawImage(this.image,
        lix*this.image.width +this.x,
        liy*this.image.height+this.y);
        //console.log(lix, liy);*/
      liy++;}
    lix++;}
  this.x+=2;//test
    
  }}
}

