const wheelEventName = (/Firefox/i.test(navigator.userAgent)) ? "wheel" : "mousewheel";
const layers = [...document.querySelectorAll('.layer')];
const tracker = document.querySelector('.track-active');
const trackerNumber = document.querySelector('.track-number');
let itemDisplayed = 0;
let animationPlaying = false;


function resetClasses() {
  for (let i = 0; i < 1; i++) {
    layers[0].children[i].classList.remove('item-displayed');
    layers[1].children[i * 2].classList.remove('item-displayed');
  }
}

document.addEventListener(wheelEventName, event => {
  if (!animationPlaying) {
    const nextItem = itemDisplayed + Math.sign(event.deltaY);
    if (nextItem >= 0 && nextItem <= 1) {
      itemDisplayed += Math.sign(event.deltaY);
      layers[0].style = `transform: translateX(${-itemDisplayed * 85}vw);`;
      layers[1].style = `transform: translateX(${- itemDisplayed * 85 * 2}vw);`;
      layers[1].children[itemDisplayed * 2].classList.add('item-revealed');

      resetClasses();
      layers[0].children[itemDisplayed].classList.add('item-displayed');
      layers[1].children[itemDisplayed * 2].classList.add('item-displayed');

      tracker.style = `transform: translateX(${itemDisplayed * 100}%);`;
      trackerNumber.innerText = `0${itemDisplayed + 1}`;
      setTimeout(() => {
        animationPlaying = false;
      }, 2200);
      animationPlaying = true;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        console.log(container);
        container.classList.add("animating");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("animating");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;
      container.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

document.addEventListener(wheelEventName, event => {
  if (!animationPlaying) {
    const nextItem = itemDisplayed + Math.sign(event.deltaY);
    if (nextItem >= 0 && nextItem <= 1) {
      itemDisplayed += Math.sign(event.deltaY);
      layers[0].style = `transform: translateX(${-itemDisplayed * 85}vw);`;
      layers[1].style = `transform: translateX(${- itemDisplayed * 85 * 2}vw);`;
      layers[1].children[itemDisplayed * 2].classList.add('item-revealed');

      resetClasses();
      layers[0].children[itemDisplayed].classList.add('item-displayed');
      layers[1].children[itemDisplayed * 2].classList.add('item-displayed');

      tracker.style = `transform: translateX(${itemDisplayed * 100}%);`;
      trackerNumber.innerText = `0${itemDisplayed + 1}`;
      setTimeout(() => {
        animationPlaying = false;
      }, 2200);
      animationPlaying = true;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  // IMAGE ANIMATION

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container02 = entry.target;

      if (entry.isIntersecting) {
        console.log(container02);
        container02.classList.add("animating");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container02.classList.remove("animating");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".reveal").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

  // TEXT ANIMATION

  let fadeupCallback = (entries) => {
    entries.forEach((entry) => {
      let container02 = entry.target;
      container02.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        container02.classList.add("fading-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container02.classList.remove("fading-up");
      }
    });
  };

  let fadeupObserver = new IntersectionObserver(fadeupCallback, options);

  document.querySelectorAll(".fadeup").forEach((fadeup) => {
    fadeupObserver.observe(fadeup);
  });
});


let winHeight = $(window).height();
$(window).on('resize', function () {
  winHeight = $(window).height();
});

$('ul li').on('click', function () {
  let i = $(this).index();
  $('html, body').animate({
    scrollTop: winHeight * i
  });
}); // ul>li click

function scrollPage() {
  let scr = $(window).scrollTop();
  for (let i = 0; i < $('ul li').length; i++) {
    if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
      $('ul li').removeClass('on');
      $('ul li').eq(i).addClass('on');
    }
  }
}//function scrollPage

$(window).on('scroll', scrollPage);
scrollPage();

$('#wrap>div').on('mousewheel', function (e, d) {
  if (d > 0) {//스크롤을 올렸을 때
    let prv = $(this).prev().offset().top;
    $('html, body').stop().animate({
      scrollTop: prv
    });

  } else if (d < 0) {//스크롤을 내렸을 때
    let nxt = $(this).next().offset().top;
    $('html, body').stop().animate({
      scrollTop: nxt
    })
  }
})








