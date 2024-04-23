let intersectionOptions = {
  threshold: 0.9
}

function addAnimation(el, observer) {
  el.classList.add('animateMobile');
  observer.disconnect();
  return observer.unobserve(el);
}

function animateIcons() {
  const svgList = document.querySelectorAll('.svgAnimate');
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio != 1 && entry.intersectionRatio > 0) {
        entry.isIntersecting == true ? addAnimation(entry.target, observer) : null;
      }
    });
  };
  [...svgList].forEach(svg => {
    let observer = new IntersectionObserver(callback, intersectionOptions);

    observer.observe(svg);
  });
}

export default animateIcons;
