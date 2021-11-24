img = "";
objectStatus = "";
objects = [];
function preload(){
    img = loadImage("download(1).jpg");
  }
  
  
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
    
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (objectStatus != 0){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "status : Object Detected";
            fill("black");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " "+ percent + "%",objects[i].x,objects[i].y);
        noFill();
        stroke("#db0000");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }

  }
 function modelloaded(){
     console.log("model Loaded");
     objectStatus = true;
     objectDetecter.detect(img,gotResults);
 }
 function gotResults(error,results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    objects = results;
}
 }
  