let body = document.querySelector("body");
window.onload = function () {
	let slides = document.querySelectorAll(".slide");
	let currentSlide = document.querySelector(".slide.active");
	let currentDot = document.querySelector(".dot.active");
	let fullpageContainer = document.querySelector("#fullpage");
	let allowSlideAction = true;
	let allowArrowAction = true;
	let finishedScrolling = true;
	//transition time in ms. Play around with this to change the feel of the scroll.
	let transitionTime = 500;
	//to avoid errors in timer resets
	let finishedScrollTimeout = setTimeout(() => {}, 0);
	let scrollEventTimeout = setTimeout(() => {}, 0);
	//making sure the events arent double firing on devices that have a smooth scroll
	//such as trackpads
	let scrollEventCount = 0;
	//when the viewport is resized scroll the current slide into view.
	window.onresize = function () {
		currentSlide.scrollIntoView();
	};
	//handling the scrolling with mouse/trackpad
	document.onwheel = e => {
		//spam prevention
		scrollEventCount++;
		resetScrollEventCount();
		if (scrollEventCount > 60 || !finishedScrolling) {
			resetFinishedScrolling();
			return;
		}

		//deltaY describes the movement of the scroll action on the y axis,
		//if it's a positive value the user is scrolling down,
		//if it's a negative value the user is scrolling up.
		if (e.deltaY > 0 && allowSlideAction) goToNextSlide();
		else if (e.deltaY < 0 && allowSlideAction) goToPreviousSlide();
	};

	//handling scrolling with touch screens
	let touchStart;
	let touchEnd;
	//travel distance to activate the slide transition in pixels
	let minAmountToDrag = 15;
	document.addEventListener("touchstart", e => {
		touchStart = e.touches[0].screenY;
	});
	document.addEventListener("touchmove", e => {
		touchEnd = e.touches[0].screenY;

		if (touchStart > touchEnd + minAmountToDrag) goToNextSlide();
		else if (touchStart + minAmountToDrag < touchEnd) goToPreviousSlide();
	});

	//handling arrow up and arrow down keys
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
		} else currentSlide.scrollIntoView();
	};

	//next / prev slides
	function goToNextSlide() {
		if (allowSlideAction) {
			slideTimeout();
			//I have no idea why this bug happens. Sometimes React renders a " " value at the end or the begining 
			//of the slide component and this is the fastest way I could mitigate that particular bug  
			if (currentSlide.nextSibling)
				if (currentSlide.nextSibling.classList)
					if (currentSlide.nextSibling.classList.contains('slide')) {
						currentSlide.classList.remove("active");
						currentDot.classList.remove('active');

						currentSlide.nextSibling.classList.add("active");
						currentDot.nextSibling.classList.add("active");

						currentSlide = document.querySelector(".slide.active");
						currentDot = document.querySelector(".dot.active");

						//Fixing a bug in some browsers where no scrolling would happen
						window.location.href = "#";
						window.location.href = "#" + currentSlide.id;
						//scroll into view
						currentSlide.scrollIntoView();
					} else {}
		}
	}

	function goToPreviousSlide() {
		if (allowSlideAction) {
			slideTimeout();
			//I have no idea why this bug happens. Sometimes React renders a " " value at the end or the begining 
			//of the slide component and this is the fastest way I could mitigate that particular bug
			if (currentSlide.previousSibling)
				if (currentSlide.previousSibling.classList)
					if (currentSlide.previousSibling.classList.contains('slide')) {
						currentSlide.classList.remove("active");
						currentDot.classList.remove('active');

						currentDot.previousSibling.classList.add("active");
						currentSlide.previousSibling.classList.add("active");

						currentSlide = document.querySelector(".slide.active");
						currentDot = document.querySelector(".dot.active");

						//Fixing a bug in some browsers where no scrolling would happen
						window.location.href = "#";
						window.location.href = "#" + currentSlide.id;
						//scroll into view
						currentSlide.scrollIntoView();


					} else {}
		}
	}

	//timeout for scolling

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

	//scroll spam prevention سيب وانا اسيب
	function resetFinishedScrolling() {
		allowSlideAction = false;
		finishedScrolling = false;
		clearTimeout(finishedScrollTimeout);
		finishedScrollTimeout = setTimeout(() => {
			allowSlideAction = true;
			finishedScrolling = true;
		}, 40);
	}

	function resetScrollEventCount() {
		clearTimeout(scrollEventTimeout);
		scrollEventTimeout = setTimeout(() => {
			scrollEventCount = 0;
		}, 50);
	}


	let dots = document.querySelectorAll('.dot');
	for (let i = 0; i < dots.length; i++) {
		dots[i].onclick = () => {
			if (allowSlideAction) {
				currentSlide.classList.remove('active');
				currentDot.classList.remove('active');
				slides[i].classList.add('active');
				dots[i].classList.add('active');
				currentSlide = document.querySelector(".slide.active");
				currentDot = document.querySelector(".dot.active");
			}
		}
	}
};