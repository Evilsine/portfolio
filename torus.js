let containerSize = document.getElementById("torus").offsetWidth;

window.addEventListener("resize", function(){
  containerSize = document.getElementById("torus").offsetWidth;
  console.log(containerSize)
})

function setup() {
    var torus = createCanvas(containerSize, containerSize, WEBGL);
        torus.parent('torus');
    frameRate(60)
  }
  
  let rotation = 0;
  let size = containerSize / 4;
  let boxSize = size / 2;
  let boxDensity = 0.04;
  let torusSize = size;
  
  function draw() {
    size = containerSize / 4;
    boxSize = size / 2;
    torusSize = map(sin(rotation * 0.1), -1, 1, 0.9, 1.2) * size;
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
    resizeCanvas(containerSize, containerSize);
  }