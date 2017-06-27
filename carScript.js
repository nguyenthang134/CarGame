/**
 * Created by thang on 6/26/17.
 */
const ORIENTATION_LEFT = 1;
const ORIENTATION_RIGHT = 2;
const ORIENTATION_UP = 3;
const ORIENTATION_DOWN = 4;

function objectRandom(xPosition, yPosition, radius){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.radius = radius;
}

var ctx = document.getElementById('myCanvas').getContext('2d');
const ctxWidth = ctx.width;
const ctxHeight = ctx.height;

function createObject(){
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var object = new objectRandom(x, y, 10);
    ctx.beginPath();
    ctx.arc(object.xPosition, object.yPosition, object.radius, 0, 2* Math.PI);
    ctx.fill();
}

function canvasBackground() {
    ctx.fillStyle = "#EAEAEA";
    ctx.fillRect(0, 0, 1366, 768);
}

function car(left, top, speed){
    this.orientation = ORIENTATION_UP;
    this.speed = speed;

    this.show = function () {
        var imageObj = new Image();
        imageObj.onload = function() {
            ctx.clearRect(left-50, top, (imageObj.width/2) + 100, (imageObj.height/2)+ 100);
            ctx.drawImage(imageObj, left, top, imageObj.width/2, imageObj.height/2);
        };
        switch(this.orientation){
            case ORIENTATION_UP:
                imageObj.src = 'Taxi-Top-Yellow-icon.png';
                break;
            case ORIENTATION_RIGHT:
                imageObj.src = 'Taxi-Top-Yellow-icon right.png';
                break;
            case ORIENTATION_DOWN:
                imageObj.src = 'Taxi-Top-Yellow-icon down.png';
                break;
            case ORIENTATION_LEFT:
                imageObj.src = 'Taxi-Top-Yellow-icon left.png';
                break;
        }

    }


    this.move = function () {

        switch(this.orientation){
            case ORIENTATION_UP:
                top -= speed;
                break;
            case ORIENTATION_RIGHT:
                left += speed;
                break;
            case ORIENTATION_DOWN:
                top += speed;
                break;
            case ORIENTATION_LEFT:
                left -= speed;
                break;
        }
    }
}

var newCar = new car(500, 500, 2);
function start() {

    newCar.show();
    newCar.move();
    setTimeout(start, 50);
}

createObject();
start();

function stop(){

}

function controlCar(event) {
    console.log(event);
    switch(event.which){
        case 38:
            newCar.orientation = ORIENTATION_UP;
            break;
        case 39:
            newCar.orientation = ORIENTATION_RIGHT;
            break;
        case 40:
            newCar.orientation = ORIENTATION_DOWN;
            break;
        case 37:
            newCar.orientation = ORIENTATION_LEFT;
            break;
    }
}






