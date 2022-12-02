Webcam.set({width: 300, height: 300, image_format:'png', png_quality: 90 });
Webcam.attach(document.getElementById("camera"));
function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img src="+data_uri+" id='res'>";
    })
}
console.log("ml5 version is: ",ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MNYVYP4XY/model.json", modelLoaded);
function modelLoaded()
{
    console.log("Model has been loaded succesfully");
}
function speak()
{
  Synth = window.speechSynthesis;
  speak_data = "The first prediction is"+pd1+"  And the second prediction is"+pd2;
  var ut = new SpeechSynthesisUtterance(speak_data);
  Synth.speak(ut);
}
function predict()
{
    img = document.getElementById("res");
    Classifier.classify(img,gotResults);
}
function gotResults(error, results)
{
 if(error)
 {
    console.error(error);
 }
 else
 {
    console.log(results);
 }
 document.getElementById("p1n").innerHTML = results[0].label;
 document.getElementById("p2n").innerHTML = results[1].label;
 pd1 = results[0].label;
 pd2 = results[1].label;
 speak();
 if(results[0].label=="Happy")
 {
    document.getElementById("p1e").innerHTML = "😊";
 }
 else if(results[0].label=="Angry")
 {
    document.getElementById("p1e").innerHTML = "😡";
 }
 else if(results[0].label=="Sad")
 {
    document.getElementById("p1e").innerHTML = "😣";
 }
 if(results[1].label=="Happy")
 {
    document.getElementById("p2e").innerHTML = "😊";
 }
 else if(results[1].label=="Angry")
 {
    document.getElementById("p2e").innerHTML = "😡";
 }
 else if(results[1].label=="Sad")
 {
    document.getElementById("p2e").innerHTML = "😣";
 }

}