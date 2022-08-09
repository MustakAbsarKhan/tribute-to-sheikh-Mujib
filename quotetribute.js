//quote slider

let qslideIndex = 0;
let qslides = document.getElementsByClassName("quotemySlides");
let qdots = document.getElementsByClassName("quotedot");
let timeoutHolder = null;

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
    timeoutHolder = setTimeout(qshowSlides, 10000); // Change image every 10 seconds
}

//freezing slider on hover
const disableAutoSlideOnHover = () => {
  const container = document.querySelector( ".quoteslideshow-container" );
  container.addEventListener( "mouseover", function() {
    clearTimeout( timeoutHolder );
    timeoutHolder = null;
  } );
  container.addEventListener( "mouseleave", function() {
    setTimeout( () => qshowSlides(), 10000 )
  } );
}
disableAutoSlideOnHover();

