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