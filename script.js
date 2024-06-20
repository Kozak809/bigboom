const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let WindowWidth = window.innerWidth;
let WindowHeight = window.innerHeight;
canvas.width = WindowWidth-10;
canvas.height = WindowHeight-10;

let n = prompt('Сколько точек?', 100);

function create2DArray() {
    let karta = [];
    for (let i = 0; i < WindowWidth; i++) {
        karta[i] = [];
        for (let j = 0; j < WindowHeight; j++) {
            karta[i][j] = 0;
        }
    }
    return karta;
}
let a = [];
for(let i=0;i<n;i++){
    a[i]=WindowHeight/2;
}
let myArray = create2DArray();
function draw(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	for(let j = 0; j < WindowWidth; j++)
    for(let i = 0; i < WindowHeight; i++){
        a[i]+=Math.floor(Math.random()*100)%9-4;
        myArray[j][i] = a[i];
        ctx.fillStyle = 'white';
        ctx.fillRect(j, myArray[j][i], 1, 1);
    }
	console.log(myArray);
 }

draw()

