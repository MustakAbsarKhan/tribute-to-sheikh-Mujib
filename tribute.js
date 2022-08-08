//slider

let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

//hiding each image through loop
const hidenLoop = ()=>{
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
}

//running the slide
const autoslideRun = ()=>{
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    hidenLoop();
    slides[slideIndex-1].style.display = "block";
}

// Next/previous controls
const plusSlides=(n)=>{

    const specificSlides=(n)=>{
        let i;  
        if (n > slides.length || slideIndex>3) {//getting to the beginning when input exceeds length
            slideIndex = 1;
        }else if (n < 1) {//getting to the end when at the beginning
            slideIndex = slides.length;
        }else if(slideIndex == 1){
            slideIndex = 1;
        }else if(slideIndex == 2){
            slideIndex = 2;
        }else if(slideIndex == 3){
            slideIndex = 3;
        }
        hidenLoop();
        slides[slideIndex-1].style.display = "block";
      }
    specificSlides(slideIndex += n);//calling the function by adding button value as input
}

// Dot image controls
const dotcurrentSlide = (n)=>{
        
    const dotslides = (slideIndex)=>{
        let i;
        //disabling all slides active mode
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          hidenLoop();
        //activating dot on click
        dots[slideIndex-1].className += " active";
        slides[slideIndex-1].style.display = "block";
    }
    dotslides(n);
}

showSlides();

//all slide functions running here
function showSlides() {
    autoslideRun();
  setTimeout(showSlides, 6000); // Change image every 3 seconds
}

//Qote slider

let quoteslideIndex = 0;
let quoteslides = document.getElementsByClassName("mySlides");
let quotedots = document.getElementsByClassName("dot");

//hiding each image through loop
const quotehidenLoop = ()=>{
    let j;
    for (j = 0; j < quoteslides.length; j++) {
      quoteslides[j].style.display = "none";
    }
}

//running the slide
const quoteautoslideRun = ()=>{
    quoteslideIndex++;
    if (quoteslideIndex > quoteslides.length) {
        quoteslideIndex = 1;
    }
    quotehidenLoop();
    quoteslides[quoteslideIndex-1].style.display = "block";
}

// Next/previous controls
const quoteplusSlides=(m)=>{

    const quotespecificSlides=(m)=>{
        let j;  
        if (m > quoteslides.length || quoteslideIndex>3) {//getting to the beginning when input exceeds length
            quoteslideIndex = 1;
        }else if (m < 1) {//getting to the end when at the beginning
            quoteslideIndex = quoteslides.length;
        }else if(quoteslideIndex == 1){
            quoteslideIndex = 1;
        }else if(quoteslideIndex == 2){
            quoteslideIndex = 2;
        }else if(quoteslideIndex == 3){
            quoteslideIndex = 3;
        }
        quotehidenLoop();
        quoteslides[quoteslideIndex-1].style.display = "block";
      }
    quotespecificSlides(quoteslideIndex += m);//calling the function by adding button value as input
}

// Dot image controls
const quotedotcurrentSlide = (m)=>{
        
    const quotedotslides = (quoteslideIndex)=>{
        let j;
        //disabling all quoteslides active mode
        for (j = 0; j < quotedots.length; j++) {
            quotedots[j].className = quotedots[j].className.replace(" active", "");
          }
          quotehidenLoop();
        //activating dot on click
        quotedots[quoteslideIndex-1].className += " active";
        quoteslides[quoteslideIndex-1].style.display = "block";
    }
    quotedotslides(m);
}

quoteshowSlides();

//all slide functions running here
function quoteshowSlides() {
    quoteautoslideRun();
  setTimeout(quoteshowSlides, 6000); // Change image every 3 seconds
}

