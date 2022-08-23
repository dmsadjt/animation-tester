/**@type {HTMLCanvasElement}**/

const canvas = document.getElementById('tester');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 500;
const image = new Image();
image.src = 'hurt.png';
let gameFrame = 0;
let frame = 0;

function animate(){
    
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(image, 400 * frame, 0, 400, 400, CANVAS_WIDTH/ 2 - 200 , CANVAS_HEIGHT / 2 - 200, 400,400);
    if (gameFrame % 25 == 0){
        frame > 3 ? frame = 0 : frame++;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}


animate();