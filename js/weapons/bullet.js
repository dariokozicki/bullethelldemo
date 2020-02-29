class Bullet{
    constructor(damage, pos, vel, acc, color){
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
    }


    run(){
        fill(198,40,89);
        triangle(this.pos.x-3, this.pos.y, 
            this.pos.x+3, this.pos.y, 
            this.pos.x, this.pos.y-30
        );
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    setVel(vel){
        this.vel = vel;
    }

    setAcc(acc){
        this.acc = acc;
    }

    setPos(pos){
        this.pos = pos;
    }
}