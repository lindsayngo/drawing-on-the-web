function dragStart(event) {
    console.log("drag start");
    console.log(event.target.id);
    event.dataTransfer.setData("ID", event.target.id);
    event.dataTransfer.setData("fruit", event.target);
  }
  
  function allowDrop(event) {
    event.preventDefault();
    console.log("allowDrop");
  }
  
  function drop(event) {
    event.preventDefault();
    var fruitid = event.dataTransfer.getData("ID");
    var fruit = event.dataTransfer.getData("fruit");
    console.log(fruitid);
    console.log(fruit);
    event.target.appendChild(document.getElementById(fruitid));
    var obj = event.target;

    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        obj.style.opacity = op;
        op -= 0.1;
    }, 100);
    
    console.log("dropped");
  }