/**
 * Created by thang on 6/26/17.
 */
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function createCircle(){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var radius = Math.floor(Math.random()*80);
    var circle = new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

createCircle();