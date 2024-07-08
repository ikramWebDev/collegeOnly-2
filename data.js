const aboutCard = [
    {
      img: "./assets/check icon.png",
      h4: "Creative design",
      paragraph: "Through a blend of aesthetics and functionality, CollegeOnly flaunts a sleek and new design with every element attentively crafted to improve the college experience and user engagement.",
    },
    {
      img: "./assets/check icon.png",
      h4: "Easy to use",
      paragraph: "CollegeOnly's intuitive interface makes it easier to manage. Whether you are sending friend requests or checking any event updates, everything is just a click away.",
    },
    {
      img: "./assets/check icon.png",
      h4: "Best user experience",
      paragraph: "Relish all-in-one interactions with the CollegeOnly app that optimize performance, ensuring fast load times, minimal glitches, and an overall smooth user experience.",
    },
  ];
  function togglePlayPause() {
    const video = document.getElementById('videoElement');
    const playIcon = document.getElementById('playIcon');
    const videoContainer = document.querySelector('.video-container');
    
    if (video.paused) {
      video.play();
      videoContainer.classList.add('playing');
    } else {
      video.pause();
      videoContainer.classList.remove('playing');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.resetCheckbox');

    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  });

  // Mobiles Slider

$(document).ready(function () {
  // Function to initialize the carousel with different number of slides
  function initializeCarousel(numVisible, dist) {
 let error =  $(".carousel")
 console.log('error',error)
 error.carousel({
      // Transition duration in milliseconds.
      duration: 200,

      // Perspective zoom. If 0, all items are the same size.
      dist: dist,

      // Set the spacing of the center item.
      shift: 0,

      // Set the padding between non center items.
      padding: 80,

      // Set the number of visible items.
      numVisible: numVisible,

      // Make the carousel a full width slider
      fullWidth: false,

      // Set to true to show indicators.
      indicators: true,

      // Don't wrap around and cycle through items.
      noWrap: false,

      // Callback for when a new slide is cycled to.
      onCycleTo: null,
    });

    // Set up autoplay
    setInterval(function () {
      $(".carousel").carousel("next");
    }, 3500);
  }

  // Function to adjust carousel settings based on window width
  function adjustCarousel() {
    var windowWidth = $(window).width();

    if (windowWidth <= 575) {
      initializeCarousel(2, -200);
    } else if (windowWidth <= 767) {
      initializeCarousel(3, -300);
    } else if (windowWidth <= 991) {
      initializeCarousel(4, -200);
    } else if (windowWidth <= 1199) {
      initializeCarousel(4, -100);
    } else {
      initializeCarousel(5, -100);
    }
  }

  // Initialize the carousel based on the current window width
  adjustCarousel();

  // Re-adjust the carousel settings when the window is resized
  $(window).resize(function () {
    adjustCarousel();
  });

  // Arrow button controls
  $(".carousel-arrow.left").click(function () {
    $(".carousel").carousel("prev");
  });

  $(".carousel-arrow.right").click(function () {
    $(".carousel").carousel("next");
  });

})