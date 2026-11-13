let mDerecha = [];
let f;
let tempo;
function preload(){
   for (let i = 0; i < 3; i++) {
    mDerecha[i] = loadImage("assets/MoverDerecha/mover" + i + ".png");
}
}
//hola mundo
function setup() {
  createCanvas(800, 400);
  noSmooth();
  f = 0;
  tempo = millis();

}
function draw() {
  background(125);
  
  image(mDerecha[f], 400, 200, 50, 80);

  if (millis() - tempo >= 200) {
    f++;
    tempo = millis(); // <-- Esta es la única línea que faltaba
  }
  if (f >= 3) f = 0;
}
