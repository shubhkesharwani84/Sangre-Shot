class Fence{
  constructor(x, y){
      this.body = createSprite(x,y, displayWidth, 10)
      this.image = loadImage("images/side-fence.png")
      this.body.addImage("small fence",this.image)
  }
    display(){

    drawSprites();
    }
}