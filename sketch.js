let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let letrasCayendo = [];

function setup() {
  createCanvas(600, 400);
  background(0);
  textFont("Arial", 16);
  frameRate(255);
}

function draw() {
  background(0);

  letrasCayendo.push(new Letra(random(width), 0, floor(random(caracteres.length))));

  for (let i = letrasCayendo.length - 1; i >= 0; i--) {
    let letra = letrasCayendo[i];
    letra.mostrar();
    letra.mover();

    if (letra.y > height) {
      letrasCayendo.splice(i, 1);
    }
  }
}

class Letra {
  constructor(x, y, indiceCaracter) {
    this.x = x;
    this.y = y;
    this.velocidad = random(1, 5);
    this.caracter = caracteres.charAt(indiceCaracter);
  }

  mostrar() {
    if (dist(this.x, this.y, mouseX, mouseY) < 10) {
      fill(255, 0, 0); // Rojo si el mouse está cerca
    } else {
      fill(0, 255, 0); // Verde por defecto
    }
    text(this.caracter, this.x, this.y);
  }

  mover() {
    this.y += this.velocidad;
  }
}