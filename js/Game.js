class Game {
    constructor() {}
    play() {
        //fuels = new Group();
        // this.addSprites(fuels, 4, fuelImage, 0.02);
        this.showLife();

        if(keyDown("up_arrow")){
            player.y = player.y - 30;
         }
        
         if(keyDown("down_arrow")){
          player.y = player.y + 30;
        }
        
        if(keyDown("right_arrow")){
           player.x = player.x + 40 ;
        }
    
        if(keyDown("left_arrow")){
          player.x = player.x - 40 ;
       }  

       if (mobsGroup.isTouching(border)){
        gameState = "End";
      }

        
    }


    showLife() {
        push();
        image(lifeImage, width / 2 - 130, height - player.positionY - 400, 20, 20);
        fill("white");
        rect(width / 2 - 100, height - player.positionY - 400, 185, 20);
        fill("#f50057");
        rect(width / 2 - 100, height - player.positionY - 400, player.life, 20);
        noStroke();
        pop();
    }

    end() {
        swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
      }
}


/*
if (player.life > 0) {
          player.life -= 185 / 4;
        }
 */