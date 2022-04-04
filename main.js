objects=[];
status="";
function preload(){

}

function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO);
video.hide()
}
function start(){
coocssd_model=objectDetector('cocossd',modelLoded)
document.getElementById("status").innerHTML="Detecting Objects"
text_input=document.getElementById("text_input").value;
}
function modelLoded(){
    console.log("Model Loaded")
    status=true;
    
}
function gotResults(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results);
    objects=results;
}
}
function draw(){
 image(video,0,0,400,400)
if (status !=""){
coocssd_model.detect(video,gotResults);

for (var i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML="Objects Detected"
    document.getElementById("no_objects").innerHTML=objects.length;

    fill("red")
    percent=floor(objects[i].confidence*100)
    text( objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
    noFill()
    stroke("red")
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}