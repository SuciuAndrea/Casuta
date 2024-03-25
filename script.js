function setup() {
    createCanvas(600, 400); 
  }
  
  function draw() {
    background(135, 206, 235); 
  
    
    fill(144, 238, 144); 
    rect(0, height / 2, width, height / 2); 
  
    
    fill(255, 255, 0); 
    circle(100, 100, 40); 
  
   
    fill(255, 255, 0); 
    let numRays = 20; 
    for (let i = 0; i < numRays; i++) {
      let angle = i * TWO_PI / numRays;
      let x1 = 100 + cos(angle) * 25; 
      let y1 = 100 + sin(angle) * 25; 
      let x2 = 100 + cos(angle + PI / numRays) * 40; 
      let y2 = 100 + sin(angle + PI / numRays) * 40; 
      let x3 = 100 + cos(angle) * 45; 
      let y3 = 100 + sin(angle) * 45; 
      triangle(x1, y1, x2, y2, x3, y3);
    }
  
    
    fill(199, 172, 229); 
    rect(150, 150, 300, 300); 
  
    
    fill(255, 192, 203); 
    triangle(150, 150, 450, 150, 300, 50); 
  
    
    fill(139, 69, 19); 
    rect(265, 300, 70, 100); 
    fill(0); 
    circle(320, 350, 10); 
  
    fill(0, 191, 255); 
    rect(247, 215, 66, 66); 
  
    fill(135, 206, 235); 
    rect(247, 215, 33, 33); 
    rect(280, 215, 33, 33); 
    rect(247, 248, 33, 33); 
    rect(280, 248, 33, 33); 
  
    fill(173, 216, 230); 
    ellipse(500, 100, 100, 50); 
    ellipse(540, 90, 80, 40); 
    ellipse(480, 90, 70, 30); 
    ellipse(530, 110, 80, 40); 
  }
  