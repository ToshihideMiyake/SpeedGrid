"use strict";
var Flexsamples=document.getElementById("flexbox-samples");
var Flexslidercodes=document.getElementById("flex-slider-codes");
function createboxes(){
    // お掃除
    while(Flexsamples.firstChild){
        Flexsamples.removeChild(Flexsamples.firstChild);
    }
    // 作成
    var boxesFragment=document.createDocumentFragment();
    for(let i=0; i<3; i++){
        var newboxes=document.createElement("div");
        boxesFragment.appendChild(newboxes);
    }
    Flexsamples.appendChild(boxesFragment);
}
// 
function leftcenter(){
Flexsamples.className="slider-window flex-left-middle";
Flexsamples.style="display: flex; justify-content: flex-start; align-items: center;";
Flexslidercodes.innerHTML="flex-left-middle";
}
function leftbottom(){
Flexsamples.className="slider-window flex-left-bottom";
Flexsamples.style="display: flex; justify-content: flex-start; align-items: flex-end;";
Flexslidercodes.innerHTML="flex-left-bottom";
}
function centertop(){
Flexsamples.className="slider-window flex-center-top";
Flexsamples.style="display: flex; justify-content: center; align-items: flex-start;";
Flexslidercodes.innerHTML="flex-center-top";
}
function center(){
Flexsamples.className="slider-window flex-center-middle";
Flexsamples.style="display: flex; justify-content: center; align-items: center;";
Flexslidercodes.innerHTML="flex-center-middle";
}
function centerbottom(){
Flexsamples.className="slider-window flex-center-bottom";
Flexsamples.style="display: flex; justify-content: center; align-items: flex-end;";
Flexslidercodes.innerHTML="flex-center-bottom";
}
function righttop(){
Flexsamples.className="slider-window flex-right-top";
Flexsamples.style="display: flex; justify-content: flex-end; align-items: flex-start;";
Flexslidercodes.innerHTML="flex-right-top";
}
function rightcenter(){
Flexsamples.className="slider-window flex-right-middle";
Flexsamples.style="display: flex; justify-content: flex-end; align-items: center;";
Flexslidercodes.innerHTML="flex-right-middle";
}
function rightbottom(){
Flexsamples.className="slider-window flex-right-bottom";
Flexsamples.style="display: flex; justify-content: flex-end; align-items: flex-end;";
Flexslidercodes.innerHTML="flex-right-bottom";
}
function betweentop(){
Flexsamples.className="slider-window flex-between-top";
createboxes();
Flexsamples.style="display: flex; justify-content: space-between; align-items: flex-start;";
Flexslidercodes.innerHTML="flex-between-top";
}
function betweencenter(){
Flexsamples.className="slider-window flex-between-middle";
createboxes();
Flexsamples.style="display: flex; justify-content: space-between; align-items: center;";
Flexslidercodes.innerHTML="flex-between-middle";
}
function betweenbottom(){
Flexsamples.className="slider-window flex-between-bottom";
createboxes();
Flexsamples.style="display: flex; justify-content: space-between; align-items: flex-end";
Flexslidercodes.innerHTML="flex-between-bottom";
}
function aroundtop(){
Flexsamples.className="slider-window flex-around-top";
createboxes();
Flexsamples.style="display: flex; justify-content: space-around; align-items: flex-start";
Flexslidercodes.innerHTML="flex-around-top";
}
function aroundcenter(){
Flexsamples.className="slider-window flex-around-middle";
createboxes();
Flexsamples.style="display: flex; justify-content: space-around; align-items: center";
Flexslidercodes.innerHTML="flex-around-middle";
}
function aroundbottom(){
Flexsamples.className="slider-window flex-around-bottom";
createboxes();
Flexsamples.style="display: flex; justify-content: space-around; align-items: flex-end";
Flexslidercodes.innerHTML="flex-around-bottom";
}
function evenlytop(){
Flexsamples.className="slider-window flex-evenly-top";
createboxes();
Flexsamples.style="display: flex; justify-content: space-evenly; align-items: flex-start";
Flexslidercodes.innerHTML="flex-evenly-top";
}
function evenlycenter(){
Flexsamples.className="slider-window flex-evenly-middle";
createboxes();
Flexsamples.style="display: flex; justify-content: space-evenly; align-items: center";
Flexslidercodes.innerHTML="flex-evenly-middle";
}
function evenlybottom(){
Flexsamples.className="slider-window flex-evenly-bottom";
createboxes();
Flexsamples.style="display: flex; justify-content: space-evenly; align-items: flex-end";
Flexslidercodes.innerHTML="flex-evenly-bottom";
}
// 
document.getElementById("flex-next").addEventListener("click",()=>{
    if(Flexsamples.classList.contains("flex-left-top")){
        leftcenter();
    }else if(Flexsamples.classList.contains("flex-left-middle")){
        leftbottom();
    }else if(Flexsamples.classList.contains("flex-left-bottom")){
        centertop();
    }else if(Flexsamples.classList.contains("flex-center-top")){
        center();
    }else if(Flexsamples.classList.contains("flex-center-middle")){
        centerbottom();
    }else if(Flexsamples.classList.contains("flex-center-bottom")){
        righttop();
    }else if(Flexsamples.classList.contains("flex-right-top")){
        rightcenter();
    }else if(Flexsamples.classList.contains("flex-right-middle")){
        rightbottom();
    }else if(Flexsamples.classList.contains("flex-right-bottom")){
        betweentop();
    }else if(Flexsamples.classList.contains("flex-between-top")){
        betweencenter();
    }else if(Flexsamples.classList.contains("flex-between-middle")){
        betweenbottom();
    }else if(Flexsamples.classList.contains("flex-between-bottom")){
        aroundtop();
    }else if(Flexsamples.classList.contains("flex-around-top")){
        aroundcenter();
    }else if(Flexsamples.classList.contains("flex-around-middle")){
        aroundbottom();
    }else if(Flexsamples.classList.contains("flex-around-bottom")){
        evenlytop();
    }else if(Flexsamples.classList.contains("flex-evenly-top")){
        evenlycenter();
    }else if(Flexsamples.classList.contains("flex-evenly-middle")){
        evenlybottom();
    }
    else{
    while(Flexsamples.firstChild){
        Flexsamples.removeChild(Flexsamples.firstChild);
        }
        var newbox=document.createElement("div");
        Flexsamples.appendChild(newbox);
        Flexsamples.className="slider-window flex-left-top";
        Flexsamples.style="display: flex; justify-content: flex-start; align-items: flex-start";
        Flexslidercodes.innerHTML="flex-left-top";
    }
});

document.getElementById("flex-pre").addEventListener("click",()=>{
    if(Flexsamples.classList.contains("flex-left-top")){
        evenlybottom();
    }else if(Flexsamples.classList.contains("flex-left-middle")){
        Flexsamples.className="slider-window flex-left-top";
        Flexsamples.style="display: flex; justify-content: flex-start; align-items: flex-start";
        Flexslidercodes.innerHTML="flex-left-top";
    }else if(Flexsamples.classList.contains("flex-left-bottom")){
        leftcenter();
    }else if(Flexsamples.classList.contains("flex-center-top")){
        leftbottom();
    }else if(Flexsamples.classList.contains("flex-center-middle")){
        centertop();
    }else if(Flexsamples.classList.contains("flex-center-bottom")){
        center();
    }else if(Flexsamples.classList.contains("flex-right-top")){
        centerbottom();
    }else if(Flexsamples.classList.contains("flex-right-middle")){
        righttop();
    }else if(Flexsamples.classList.contains("flex-right-bottom")){
        rightcenter();
    }else if(Flexsamples.classList.contains("flex-between-top")){
        while(Flexsamples.firstChild){
            Flexsamples.removeChild(Flexsamples.firstChild);
            }
            var newbox=document.createElement("div");
            Flexsamples.appendChild(newbox);
        rightbottom();
    }else if(Flexsamples.classList.contains("flex-between-middle")){
        betweentop();
    }else if(Flexsamples.classList.contains("flex-between-bottom")){
        betweencenter();
    }else if(Flexsamples.classList.contains("flex-around-top")){
        betweenbottom();
    }else if(Flexsamples.classList.contains("flex-around-middle")){
        aroundtop();
    }else if(Flexsamples.classList.contains("flex-around-bottom")){
        aroundcenter();
    }else if(Flexsamples.classList.contains("flex-evenly-top")){
        aroundbottom();
    }else if(Flexsamples.classList.contains("flex-evenly-middle")){
        evenlytop();
    }
    else{
        evenlycenter();
    }
});
// grid-samples
var GS=document.getElementsByClassName("grid-samples");
var Gridslidercodes=document.getElementById("grid-slider-codes");
var i=0;
function Selected(){
     Array.from(GS).forEach(e=>e.classList.remove("selected"));
     GS[i].classList.add("selected");
     var GSclassname=GS[i].className.replace("grid-samples selected","");
     Gridslidercodes.innerHTML=GSclassname;
}
Selected();
document.getElementById("grid-next").addEventListener("click",()=>{
    switch(i){
        case 0:
        i=1;
        Selected();
        break;
        case 1:
        i=2;
        Selected();
        break;
        case 2:
        i=3;
        Selected();
        break;
        case 3:
        i=4;
        Selected();
        break;
        case 4:
        i=0;
        Selected();
        break;
        default:
        console.log("default");
    }
});
document.getElementById("grid-pre").addEventListener("click",()=>{
    switch(i){
        case 0:
        i=4;
        Selected();
        break;
        case 1:
        i=0;
        Selected();
        break;
        case 2:
        i=1;
        Selected();
        break;
        case 3:
        i=2;
        Selected();
        break;
        case 4:
        i=3;
        Selected();
        break;
        default:
        console.log("default");
    }
});
// gap
var defaultStyle="display: flex; justify-content: center; align-items: center;"
var gapContainer=document.getElementById("gap-samples");
var gapCode=document.getElementById("gap-slider-codes");
function gapx40(){
    gapContainer.style=defaultStyle + "column-gap: 40px;";
    gapContainer.className="slider-window flex-center-middle gapx-40";
    gapCode.innerHTML="flex-center-middle gapx-40";
}
function gapy10(){
    gapContainer.style=defaultStyle + "row-gap: 10px;";
    gapContainer.className="slider-window flex-center-middle gapy-10";
    gapCode.innerHTML="flex-center-middle gapy-10";
}
function gapper15(){
    gapContainer.style=defaultStyle + "gap: 15%;";
    gapContainer.className="slider-window flex-center-middle gap-per-15";
    gapCode.innerHTML="flex-center-middle gap-per-15";
}
function gapxper15(){
    gapContainer.style=defaultStyle + "column-gap: 15%;";
    gapContainer.className="slider-window flex-center-middle gapx-per-15";
    gapCode.innerHTML="flex-center-middle gapx-per-15";
}
function gapyper15(){
    gapContainer.style=defaultStyle + "row-gap: 15%;";
    gapContainer.className="slider-window flex-center-middle gapy-per-15";
    gapCode.innerHTML="flex-center-middle gapy-per-15";
}
function gapem3(){
    gapContainer.style=defaultStyle + "gap: 3em;";
    gapContainer.className="slider-window flex-center-middle gap-em-3";
    gapCode.innerHTML="flex-center-middle gap-em-3";
}
function gapxem05(){
    gapContainer.style=defaultStyle + "column-gap: 0.5em;";
    gapContainer.className="slider-window flex-center-middle gapx-em-0.5";
    gapCode.innerHTML="flex-center-middle gapx-em-0.5";
}
function gapyem3(){
    gapContainer.style=defaultStyle + "row-gap: 3em;";
    gapContainer.className="slider-window flex-center-middle gapy-em-3";
    gapCode.innerHTML="flex-center-middle gapy-em-3";
}
function gap20(){
    gapContainer.style=defaultStyle + "gap: 20px;";
    gapContainer.className="slider-window flex-center-middle gap-20";
    gapCode.innerHTML="flex-center-middle gap-20";
}

document.getElementById("gap-next").addEventListener("click",()=>{
    if(gapContainer.classList.contains("gap-20")){
        gapx40();
    }else if(gapContainer.classList.contains("gapx-40")){
        gapy10();
    }else if(gapContainer.classList.contains("gapy-10")){
        gapper15();
    }else if(gapContainer.classList.contains("gap-per-15")){
        gapxper15();
    }else if(gapContainer.classList.contains("gapx-per-15")){
        gapyper15();
    }else if(gapContainer.classList.contains("gapy-per-15")){
        gapem3();
    }else if(gapContainer.classList.contains("gap-em-3")){
        gapxem05();
    }else if(gapContainer.classList.contains("gapx-em-0.5")){
        gapyem3();
    }else{
        gap20();
    }
});
document.getElementById("gap-pre").addEventListener("click",()=>{
    if(gapContainer.classList.contains("gap-20")){
        gapyem3();
    }else if(gapContainer.classList.contains("gapx-40")){
        gap20();
    }else if(gapContainer.classList.contains("gapy-10")){
        gapx40();
    }else if(gapContainer.classList.contains("gap-per-15")){
        gapy10();
    }else if(gapContainer.classList.contains("gapx-per-15")){
        gapper15();
    }else if(gapContainer.classList.contains("gapy-per-15")){
        gapxper15();
    }else if(gapContainer.classList.contains("gap-em-3")){
        gapyper15();
    }else if(gapContainer.classList.contains("gapx-em-0.5")){
        gapem3();
    }else{
        gapxem05();
    }
});
// Intersection Observer API
var scrtotop=document.getElementById("scrtotop");
  const items = document.querySelectorAll('#footer');
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: 1
  }
  const observer = new IntersectionObserver(itemIntersect, options)

  items.forEach(item => {
    observer.observe(item)
  })
  function itemIntersect (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrtotop.classList.add('is-active')
      } else {
        scrtotop.classList.remove('is-active')
      }
    })
  }
  var body=document.getElementById("all-wrapper");
  scrtotop.addEventListener("click",()=>{
    body.scrollIntoView({
      behavior:"smooth"
    });
  });