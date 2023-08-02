/*
plugin Name -> Tech Lightbox
*/



// function to include html popup code

function includePopupHtml() {
    let html = '<div id="vis-popup"><span id="close" onclick = closePopup()><img id="npop" src="./image/cut.png" alt="" height="100px" width="100px" style="border-radius: 50%;"></span><img id="leftArrow" src="./image/left-arrow.webp" alt="" height="100px" width="100px"><img id="rightArrow" src="./image/arrow-right.webp" alt="" height="100px" width="100px"><img id="mainPopupImage" src="https://img.freepik.com/free-photo/scenic-sunrise-high-mountains-alpes-generative-ai_191095-494.jpg" alt=""></div>'

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChil)
}


// function to initialize plugin
let img;
let current;

function imagePopupInt(target) {

    // Select all Images with class target
    img = document.getElementsByClassName(target)

    // add event listner on all selected images
    for (var i = 0; i < img.length; i++) {
        // add pointer
        img[i].style.cursor = "pointer";

        // add event listner
        img[i].addEventListener("click", function() {
            document.getElementById("mainPopupImage").src = this.src;
            document.getElementById("vis-popup").style.display = 'block';
            checkArrow();
        })
    }

    includePopupHtml();

    // next button
    document.getElementById("rightArrow").addEventListener("click", function() {
        nxtImg();
    })

    // previuos button
    document.getElementById("leftArrow").addEventListener("click", function() {
        prevImg();
    })
}


// close button
function closePopup() {
    document.getElementById("mainPopupImage").src = "";
    document.getElementById("vis-popup").style.display = 'none';
}


// next image
function nxtImg() {
    getCurrentIamge();
    current ++;
    document.getElementById("mainPopupImage").src = img[current].src;
    checkArrow();
}


// previous image
function prevImg() {
    getCurrentIamge();
    current --;
    document.getElementById("mainPopupImage").src = img[current].src;
    checkArrow();
}


function getCurrentIamge() {
    for (var i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById("mainPopupImage").src) {
            current = i;
    }
}
}

function checkArrow() {
    getCurrentIamge();
    if (current == "0") {
        document.getElementById("leftArrow").style.display = "none";
        document.getElementById("rightArrow").style.display = "block";
    } else if (current == img.length - 1) {
        document.getElementById("rightArrow").style.display = "none";
        document.getElementById("leftArrow").style.display = "block";

    } else {
        document.getElementById("leftArrow").style.display = "block";
        document.getElementById("rightArrow").style.display = "block";
    }
}