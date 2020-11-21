class Fence2{
  constructor(x, y){
      this.body = createSprite(x,y, displayWidth, 10)
      this.image = loadImage("images/side-fence2.png")
      this.body.addImage("samll fence",this.image)
  }
    display(){

    drawSprites();
    }
}