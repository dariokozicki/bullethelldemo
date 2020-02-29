class PlayerController{

    constructor(){
        this.modifier = 5;
    }

    up(player){
        player.vel.y = -this.modifier;
        player.animations.setCurrentAnimation(player.animations.idle());
    }

    down(player){
        player.vel.y = this.modifier;
        player.animations.setCurrentAnimation(player.animations.idle());
    }

    left(player){
        player.vel.x = -this.modifier;
        player.animations.setCurrentAnimation(player.animations.left());
    }

    right(player){
        player.vel.x = this.modifier;
        player.animations.setCurrentAnimation(player.animations.right());
    }

    still(direction){
        player.vel[direction] = 0;
        player.animations.setCurrentAnimation(player.animations.idle());
    }

    control(player){
        if (keys["ArrowUp"]){
            this.up(player);
        } else {
            if (keys["ArrowDown"]){
                this.down(player);
            } else {
                this.still("y");
            }
        }
        if (keys["ArrowLeft"]){
            this.left(player);
        } else {
            if (keys["ArrowRight"]){
                this.right(player);
            } else {
                this.still("x");
            }
        }
        if(keys["z"]){
            player.shoot();
        }

    }
}