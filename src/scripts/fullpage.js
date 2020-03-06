let body = document.querySelector("body");
window.onload = function() {
	let slides = document.querySelectorAll(".slide");
	let currentSlide = document.querySelector(".slide.active");
	let fullpageContainer = document.querySelector("#fullpage");
	let allowSlideAction = true;
	let allowArrowAction = true;
	let finishedScrolling = true;
	//transition time in ms. Play around with this to change the feel of the scroll.
	let transitionTime = 500;
	let finishedScrollTimeout = setTimeout(() => {}, 0);
	let scrollEventTimeout = setTimeout(() => {}, 0);
	let scrollEventCount = 0;
	//when the viewport is resized scroll the current slide into view.
	window.onresize = function() {
		currentSlide.scrollIntoView();
	};

	document.onwheel = e => {
		scrollEventCount++;
		resetScrollEventCount();
		console.log(scrollEventCount);
		if (scrollEventCount > 60 || !finishedScrolling) {
			resetFinishedScrolling();
			return;
		}
		if (e.deltaY === 1 || e.deltaY === -1) {
			//deltaY describes the movement of the scroll action on the y axis,
			//if it's a positive value the user is scrolling down,
			//if it's a negative value the user is scrolling up.
			if (e.deltaY === 1 && allowSlideAction) goToNextSlide();
			else if (e.deltaY === -1 && allowSlideAction) goToPreviousSlide();
		} else {
			return;
		}
	};

	let touchStart;
	let touchEnd;
	let minAmountToDrag = 15;
	document.addEventListener("touchstart", e => {
		touchStart = e.touches[0].screenY;
	});
	document.addEventListener("touchmove", e => {
		touchEnd = e.touches[0].screenY;

		if (touchStart > touchEnd + minAmountToDrag) goToNextSlide();
		else if (touchStart + minAmountToDrag < touchEnd) goToPreviousSlide();
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
				console.log("Sliding ", finishedScrolling);
				currentSlide.classList.remove("active");
				currentSlide.nextSibling.classList.add("active");
				currentSlide = document.querySelector(".slide.active");
				currentSlide.scrollIntoView();
			} else {
			}
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
			} else {
			}
		}
	}

	function slideTimeout() {
		//stopping execution of slide
		allowSlideAction = false;
		//after transitionTime allow next transition
		setTimeout(() => {
			allowSlideAction = true;
			resetFinishedScrolling();
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
	function resetFinishedScrolling() {
		allowSlideAction = false;
		finishedScrolling = false;
		clearTimeout(finishedScrollTimeout);
		finishedScrollTimeout = setTimeout(() => {
			allowSlideAction = true;
			finishedScrolling = true;
			console.log("resetting finished scrolling");
		}, 40);
	}
	function resetScrollEventCount() {
		clearTimeout(scrollEventTimeout);
		scrollEventTimeout = setTimeout(() => {
			scrollEventCount = 0;
		}, 50);
	}
};
