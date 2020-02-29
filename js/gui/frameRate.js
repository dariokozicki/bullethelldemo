

class FrameRate{
    constructor(){
        this.color = 0;
        this.rateOfView = 50;
        this.index = 0;
        this.currentFrameRate = 60;
    }

    show(){
        this.index++;
        if(this.index % this.rateOfView == 0){
            this.currentFrameRate = floor(frameRate());
        }
        fill(0);
        text(`FPS: ${this.currentFrameRate}`, windowWidth-60, 20);
    }
}