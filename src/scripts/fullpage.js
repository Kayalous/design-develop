let body = document.querySelector("body");
window.onload = function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = document.querySelector(".slide.active");
    let fullpageContainer = document.querySelector("#fullpage");
    let allowSlideAction = true;
    let allowArrowAction = true;
    //transition time in ms. Play around with this to change the feel of the scroll.
    let transitionTime = 500;
    //when the viewport is resized scroll the current slide into view.
    window.onresize = function () {
        currentSlide.scrollIntoView();
    };

    document.onwheel = e => {
        //deltaY describes the movement of the mouse,
        //if it's a positive value the user is scrolling down,
        //if it's a negative value the user is scrolling up.
        if (e.deltaY > 0) goToNextSlide();
        else if (e.deltaY < 0) goToPreviousSlide();
    };

    let touchStart;
    let touchEnd;
    let minAmountToDrag = 15;
    document.addEventListener('touchstart', e => {
        touchStart = e.touches[0].screenY;
    });
    document.addEventListener('touchmove', e => {
        touchEnd = e.touches[0].screenY;
        if (touchStart > touchEnd + minAmountToDrag)
            goToNextSlide();
        else if (touchStart + minAmountToDrag < touchEnd)
            goToPreviousSlide();
    });

    document.onkeyup = e => {
        if (allowArrowAction) {
            arrowTimeout();
            switch (e.keyCode) {
                //Up key
                case 38:
                    goToPreviousSlide();
                    break;
                    //Down key
                case 40:
                    goToNextSlide();
                    break;
            }
        }
    };

    function goToNextSlide() {
        if (allowSlideAction) {
            slideTimeout();
            if (currentSlide.nextSibling !== null) {
                currentSlide.classList.remove("active");
                currentSlide.nextSibling.classList.add("active");
                currentSlide = document.querySelector(".slide.active");
                currentSlide.scrollIntoView();
            } else {}
        }
    }

    function goToPreviousSlide() {
        if (allowSlideAction) {
            slideTimeout();
            if (currentSlide.previousSibling !== null) {
                currentSlide.classList.remove("active");
                currentSlide.previousSibling.classList.add("active");
                currentSlide = document.querySelector(".slide.active");
                currentSlide.scrollIntoView();
            } else {}
        }
    }

    function slideTimeout() {
        //stopping execution of slide
        allowSlideAction = false;
        //after transitionTime allow next transition
        setTimeout(() => {
            allowSlideAction = true;
        }, transitionTime);
    }

    function arrowTimeout() {
        //stopping execution of slide
        allowArrowAction = false;
        //after transitionTime allow next transition
        setTimeout(() => {
            allowArrowAction = true;
        }, transitionTime);
    }
};