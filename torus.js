function setup() {
    var torus = createCanvas(800, 800, WEBGL);
        torus.parent('torus');
    frameRate(60)
  }
  
  let rotation = 0;
  let torusSize = 200;
  let boxSize = 100;
  let boxDensity = 0.04;
  
  function draw() {
    torusSize = map(sin(rotation * 0.1), -1, 1, 150, 200);
    rotateY(radians(rotation));
    rotateX(radians(rotation));
    clear();
    for(let angle = 0; angle < TWO_PI; angle += boxDensity){
      let x = cos(angle) * torusSize;
      let y = sin(angle) * torusSize;
      push();
      translate(x, y);
      rotateX(angle + radians(rotation));
      rotateY(angle + radians(rotation));
      rotateZ(angle + radians(rotation));
      noFill();
      stroke(20,170);
      box(boxSize);
      pop();
    }
    rotation += 0.2;
  }
  
  function windowResized(){
    resizeCanvas(windowWidth, windowHeight - 20);
  }