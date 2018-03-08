var angle = 0, img = document.getElementById('tennis-img');
document.getElementById('button').onclick = function() {
    angle = (angle+90)%360;
    img.className = "rotate"+angle;
}