const obj = document.getElementById("dgif");
let animation = requestAnimationFrame(moveGif);
let animation2 = requestAnimationFrame(backwards);
let position = 150;
   
function moveGif(){
     
      if (position < 220){ 
        position += 1; 
        obj.style.left = position + 'px';
        animation = requestAnimationFrame(moveGif);
      }
      else if(position == 220) {
        console.log('here')
        position -= 1;
        obj.style.right = position + 'px';
        animation = requestAnimationFrame(backwards);
      }
      else if(position == 150){
          position += 1;
          obj.style.left = position + 'px';
      }
    
}

function backwards(){
    if (position > 150){
        position -= 1;
        obj.style.left = position + 'px';
        animation2 = requestAnimationFrame(backwards);
        console.log('hereeee');
        console.log(position)
    } else {
        animation = requestAnimationFrame(moveGif);
    }
}

window.addEventListener('load', moveGif);