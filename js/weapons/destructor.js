class Destructor extends Weapon{
    constructor(damage){
        super(damage);
        this.bullets = [];
        this.frame=0;
    }

    shoot(player){
        if(this.frame % 3 == 0)
            this.bullets.push(
                new Bullet(
                    this.damage,
                    createVector(player.pos.x,player.pos.y), 
                    createVector(0,-7), 
                    createVector(0,-2),
                    
                )
            );
        this.frame++;
    }

    run(){
        for (let bullet of this.bullets){
            bullet.run();
        }
    }
}