import _ from "https://cdn.skypack.dev/lodash-es";
console.log("Here I am. Ahihi" + _.now());
// document.getElementsByTagName("body")[0].innerHTML = "Hahahahah";
// document.getElementById("my-div").innerHTML = "Hahahahah";
document.getElementsByClassName("my-abc")[0].innerHTML = "Hahahahah";
document.getElementById("my-div").dodo = "2";

let child = document.createElement("div");
child.innerText = "I'm a baby";

document.getElementById("my-div").appendChild(child);
// document.getElementById("my-btn").onclick = clickMePlease;
window.addEventListener("DOMContentLoaded",()=>{
  function clickMePlease(e) {
    document.getElementById("my-div").dodo = "2";
    let child = document.createElement("div");
    child.innerText = "I'm a baby";
    document.getElementById("my-div").appendChild(child);
  }
})