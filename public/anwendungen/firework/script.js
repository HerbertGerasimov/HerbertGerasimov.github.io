window.addEventListener("load", handleLoad);
var canvas;
var ctx;
var color;
var color2;
var size;
var particleArray;
var mouseX;
var mouseY;
var speed;
var animationID;
var colorSelect;
var speedSelect;
var sizeSelect;
function handleLoad() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    colorSelect = document.getElementById("colorSelect");
    speedSelect = document.getElementById("speedSelect");
    sizeSelect = document.getElementById("sizeSelect");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    color = "blue";
    color2 = "rgba(0, 0, 0, 0.02";
    size = 20;
    speed = 1;
    particleArray = [];
    console.log(colorSelect, sizeSelect.value, speedSelect.value);
    canvas.addEventListener("click", function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        var rocket0 = new Rocket(ctx, canvas.width, canvas.height);
        var rocket1 = new Rocket(ctx, canvas.width, canvas.height);
        var rocket2 = new Rocket(ctx, canvas.width, canvas.height);
        var rocket3 = new Rocket(ctx, canvas.width, canvas.height);
        var rocket4 = new Rocket(ctx, canvas.width, canvas.height);
        var rocket5 = new Rocket(ctx, canvas.width, canvas.height);
        rocket0.chose();
        rocket0.explosion(1 * speed, -3 * speed);
        rocket1.explosion(-1 * speed, -3 * speed);
        rocket2.explosion(2 * speed, -3 * speed);
        rocket3.explosion(-2 * speed, -3 * speed);
        rocket4.explosion(3 * speed, -3 * speed);
        rocket5.explosion(-3 * speed, -3 * speed);
    });
}
var Rocket = /** @class */ (function () {
    function Rocket(ctx, width, height) {
        this._ctx = ctx;
        this._width = width;
        this._height = height;
        this._color = color;
        this._ctx.strokeStyle = color;
        this._ctx.fillStyle = color;
        this._size = size;
        this._mouseX = mouseX;
        this._mouseY = mouseY;
        this._mouseX2 = mouseX;
        this._mouseY2 = mouseY;
    }
    Rocket.prototype.draw = function (_mouseX, _mouseY) {
        this._ctx.fillStyle = color;
        this._ctx.beginPath();
        this._ctx.arc(this._mouseX, this._mouseY, this._size, 0, Math.PI * 2, false);
        this._ctx.stroke();
        this._ctx.fill();
    };
    Rocket.prototype.explosion = function (_directionX, _directionY) {
        var _this = this;
        this._ctx.fillStyle = color2;
        this._ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.draw(this._mouseX, this._mouseY);
        this._mouseX += _directionX;
        this._mouseY += _directionY;
        this._size += -0.1;
        console.log(this._mouseY);
        console.log(this._mouseY2);
        console.log(_directionY);
        if (this._mouseY < this._mouseY2 - 200) {
            console.log("test");
            _directionY = speed * 3;
        }
        if (this._size < 10) {
            _directionX = 0;
        }
        animationID = requestAnimationFrame(function () { return _this.explosion(_directionX, _directionY); });
    };
    Rocket.prototype.chose = function () {
        if (colorSelect.value == "blue") {
            color = "blue";
        }
        if (colorSelect.value == "green") {
            color = "green";
        }
        if (colorSelect.value == "red") {
            color = "red";
        }
        if (speedSelect.value == "slow") {
            speed = 1;
        }
        if (speedSelect.value == "normal") {
            speed = 2;
        }
        if (speedSelect.value == "fast") {
            speed = 3;
        }
        if (sizeSelect.value == "small") {
            size = 15;
        }
        if (sizeSelect.value == "normal") {
            size = 20;
        }
        if (sizeSelect.value == "big") {
            size = 25;
        }
    };
    return Rocket;
}());
//# sourceMappingURL=script.js.map