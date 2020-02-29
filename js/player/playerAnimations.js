class PlayerAnimations{

    constructor(sprites){
        this.sprites = sprites;

        this.sprites.idle.animate = this.animateIdle;
        this.sprites.left.animate = this.animateLeft;
        this.sprites.right.animate = this.animateRight;

        this.currentAnimation = sprites.idle;
        this.rawIndex = 0;

    }


    static loadSprites(){
        let frames = playerSheet.data.frames;
        let order = ["idle","left","right"];
        let sprites = {};
        for(let j = 0; j<frames.length; j++) {
            let sequencedata = frames[j];
            let sequence = [];
            for (let i = 0; i < sequencedata.length; i++) {
                let pos = sequencedata[i].position;
                let sprite = playerSheet.sheet.get(pos.x, pos.y, pos.w, pos.h);
                sprite.name = order[j];
                sequence.push(sprite);
            }
            sprites[order[j]] = sequence;
        }
        return sprites;
    }

    setCurrentAnimation(animation){
        this.currentAnimation = animation;
    }

    animate(pos){
        this.currentAnimation.animate(this, pos);
    }

    draw(animations, index, pos){
        image(this.currentAnimation[index], pos.x, pos.y);
        animations.rawIndex+=0.2;
    }

    idle(){
        return this.sprites.idle;
    }

    left(){
        return this.sprites.left;
    }

    right(){
        return this.sprites.right;
    }

    animateIdle(animations, pos){
        let index = floor(animations.rawIndex) % animations.currentAnimation.length;
        animations.draw(animations, index, pos);
    }

    animateLeft(animations, pos){
        let index = floor(animations.rawIndex) % animations.currentAnimation.length;
        animations.draw(animations, index, pos);
    }

    animateRight(animations, pos){
        let index = floor(animations.rawIndex) % animations.currentAnimation.length;
        animations.draw(animations, index, pos);
    }
}