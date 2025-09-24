window.addEventListener("load", handleLoad);
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let color: string;
let color2: string;
let size: number;
let particleArray: any;
let mouseX: number;
let mouseY: number;
let speed: number
let animationID: number
let colorSelect: HTMLSelectElement;
let speedSelect: HTMLSelectElement;
let sizeSelect: HTMLSelectElement;

function handleLoad(): void {
    canvas = <HTMLCanvasElement>document.getElementById("canvas");
    ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
    colorSelect = <HTMLSelectElement>document.getElementById("colorSelect");
    speedSelect = <HTMLSelectElement>document.getElementById("speedSelect");
    sizeSelect = <HTMLSelectElement>document.getElementById("sizeSelect");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight-100;
    color = "blue";
    color2 = "rgba(0, 0, 0, 0.02" ;
    size = 20;
    speed = 1;
    particleArray = [];

    console.log(colorSelect, sizeSelect.value, speedSelect.value)
    
    canvas.addEventListener("click", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        let rocket0 = new Rocket(ctx, canvas.width, canvas.height);
        let rocket1 = new Rocket(ctx, canvas.width, canvas.height);
        let rocket2 = new Rocket(ctx, canvas.width, canvas.height);
        let rocket3 = new Rocket(ctx, canvas.width, canvas.height);
        let rocket4 = new Rocket(ctx, canvas.width, canvas.height);
        let rocket5 = new Rocket(ctx, canvas.width, canvas.height);
        rocket0.chose()
        rocket0.explosion(1*speed, -3*speed);
        rocket1.explosion(-1*speed, -3*speed);
        rocket2.explosion(2*speed, -3*speed);
        rocket3.explosion(-2*speed, -3*speed);
        rocket4.explosion(3*speed, -3*speed);
        rocket5.explosion(-3*speed, -3*speed);
    });

}


class Rocket {
    _ctx: CanvasRenderingContext2D;
    _width: number;
    _height: number;
    _color: string;
    _size: number;
    _mouseX: number;
    _mouseY: number;
    _mouseX2: number;
    _mouseY2: number;

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number){
        this._ctx = ctx;
        this._width = width;
        this._height = height;
        this._color = color;
        this._ctx.strokeStyle = color;
        this._ctx.fillStyle = color;
        this._size = size;
        this._mouseX = mouseX
        this._mouseY = mouseY
        this._mouseX2 = mouseX
        this._mouseY2 = mouseY
    }

    draw(_mouseX: number, _mouseY: number): void{
        this._ctx.fillStyle = color;
        this._ctx.beginPath();
        this._ctx.arc(this._mouseX, this._mouseY, this._size, 0, Math.PI * 2, false);
        this._ctx.stroke();
        this._ctx.fill();
    }

   

    explosion(_directionX: number, _directionY: number): void{
        this._ctx.fillStyle = color2;
        this._ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.draw(this._mouseX, this._mouseY);
        this._mouseX += _directionX;
        this._mouseY += _directionY;

        this._size += -0.1

        console.log(this._mouseY);
        console.log(this._mouseY2)
        console.log(_directionY)

        if(this._mouseY < this._mouseY2-200){
            console.log("test")
            _directionY = speed*3;
            
        }

        if(this._size < 10){
            _directionX = 0
            
        }
        animationID = requestAnimationFrame(() => this.explosion(_directionX, _directionY));  
   }

   chose(): void{
    if(colorSelect.value == "blue"){
        color = "blue";
    }
    
    if(colorSelect.value == "green"){
        color = "green";
    }
    
    if(colorSelect.value == "red"){
        color = "red";
    }

    if(speedSelect.value == "slow"){
        speed = 1;
    }

    if(speedSelect.value == "normal"){
        speed = 2;
    }

    if(speedSelect.value == "fast"){
        speed = 3;
    }

    if(sizeSelect.value == "small"){
        size = 15;
    }

    if(sizeSelect.value == "normal"){
        size = 20;
    }

    if(sizeSelect.value == "big"){
        size = 25;
    }

    
    
}}
