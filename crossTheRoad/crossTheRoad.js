

 
 
    var elem1 = document.getElementById("car1");   
  var pos1 = -70;
  var id1 = setInterval(frame1, 3);
  function frame1() {
    if (pos1 == 1370) {
      pos1=-140;
    } else {
      pos1+=1; 
      
      elem1.style.right = pos1 + "px"; 
    }
  }
     var elem = document.getElementById("car2");   
  var pos = -140;
  var id = setInterval(frame, 3);
  function frame() {
    if (pos == 1375) {
      pos=-140;
    } else {
      pos+=1; 
      
      elem.style.left = pos + "px"; 
    }
  }
     


 
 
    var elem3 = document.getElementById("car3");   
  var pos3 = -70;
  var id3 = setInterval(frame3, 3);
  function frame3() {
    if (pos3 == 1370) {
      pos3=-140;
    } else {
      pos3+=1; 
      
      elem3.style.right = pos3+ "px"; 
    }
  }
     var elem4 = document.getElementById("car4");   
  var pos4 = -140;
  var id4 = setInterval(frame4, 3);
  function frame4() {
    if (pos4 == 1375) {
      pos4=-140;
    } else {
      pos4+=1; 
      
      elem4.style.left = pos4 + "px"; 
    }
  }
     
     


     var taxi = document.getElementById('car'),
    moveLeft = document.getElementById('left'),
    moveRight = document.getElementById('right'),
    moveUp = document.getElementById('up'),
    moveDown = document.getElementById('down'),
    reqID,
    direction;

function changeDirection(arrow) {
  direction = arrow;
}

function startMoving() {
  if (direction === 'right') {
    taxi.style.left = (taxi.offsetLeft += 2) + 'px';
  } else if (direction === 'left') {
    taxi.style.left = (taxi.offsetLeft -= 2) + 'px';
  } else if (direction === 'up') {
    taxi.style.top = (taxi.offsetTop -= 2) + 'px';
  } else if (direction === 'down') {
    taxi.style.top = (taxi.offsetTop += 2) + 'px';
  }
  
  // tells the browser to keep running the car 60 frames per second.
  reqID = window.requestAnimationFrame(startMoving);
}

function stopMoving() {
  // cancel requestAnimationFrame function to stop moving.
  window.cancelAnimationFrame(reqID);
}

// EventListener Mousedown
moveUp.addEventListener('mousedown', function() {
  changeDirection('up');
  startMoving();
});
moveUp.addEventListener('mouseup', stopMoving);

moveDown.addEventListener('mousedown', function() {
  changeDirection('down');
  startMoving();
});
moveDown.addEventListener('mouseup', stopMoving);

moveLeft.addEventListener('mousedown', function() {
  changeDirection('left');
  startMoving();
});
moveLeft.addEventListener('mouseup', stopMoving);

moveRight.addEventListener('mousedown', function() {
  changeDirection('right');
  startMoving();
});
moveRight.addEventListener('mouseup', stopMoving);