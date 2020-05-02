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

    // let op = 0;

    // let promise = new Promise((resolve,reject) => {
    //   console.log("started");
    //   let interval = setInterval(() => {
    //     if(op <= 0.1){
    //       clearInterval(interval);
    //     }
    //     obj.style.opacity = op;
    //     op -= 0.1;
    //   }, 100)
    // });

    // promise.resolve().then( () => console.log('resolved'));

    // document.getElementById(fruitid).style.display = 'none');

    async function doThis() {  
      var op = 1;  // initial opacity
      document.getElementById(fruitid).style.top = '20px';
      document.getElementById(fruitid).style.left = '50%';
      var timer = setInterval(function () {
          if (op <= 0.1){
            document.getElementById(fruitid).style.display = 'none';
            clearInterval(timer);
          }
          obj.style.opacity = op;
          op -= 0.1;
      }, 100);
      return;
  } 

  doThis().then(console.log('then'));


  }