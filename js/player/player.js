class Player{
    constructor(pos, weapon, health, stamina, playerAnimations, playerController){
        this.pos = pos;
        this.vel = createVector(0,0);
        this.animations = playerAnimations;
        this.health = health;
        this.stamina = stamina;
        this.weapon = weapon;
        this.controller = playerController;
    }

    run(){
        this.weapon.run();
        this.controller.control(this);
        this.animate();
        this.refreshPosition();
    }

    animate(){
        this.animations.animate(this.pos);
    }

    refreshPosition(){
        this.pos.add(this.vel);
    }

    shoot(){
        this.weapon.shoot(this);
    }
}