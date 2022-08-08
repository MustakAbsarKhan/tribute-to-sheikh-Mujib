//quote slider

let qslideIndex = 0;
let qslides = document.getElementsByClassName("quotemySlides");
let qdots = document.getElementsByClassName("quotedot");

//hiding each image through loop
const qhidenLoop = ()=>{
    let j;
    for (j = 0; j < qslides.length; j++) {
      qslides[j].style.display = "none";
    }
}

//running the slide
const qautoslideRun = ()=>{
    qslideIndex++;
    if (qslideIndex > qslides.length) {
        qslideIndex = 1;
    }
    qhidenLoop();
    qslides[qslideIndex-1].style.display = "block";
}

qshowSlides();

//all slide functions running here
function qshowSlides() {
    qautoslideRun();
  setTimeout(qshowSlides, 10000); // Change image every 10 seconds
}

