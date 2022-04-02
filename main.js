function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    video.position(175,120)
    canvas= createCanvas(550,550);
    canvas.position(650,120);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background('grey');
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}