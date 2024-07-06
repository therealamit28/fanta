function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

smoothScroll();

var tl = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "0% 90%",
    end: "0% 20%",
    // markers: true,
    scrub: 2,
  },
});

tl.to("#fanta",{
    top: "120%",
    left:"-6%",
    zIndex:"999"
},'orange')

tl.to("#orange",{
    top: "160%",
    left:"18%",
    zIndex:"99"
},'orange'),

tl.to("#orange1",{
    width:"15%",
    top: "167%",
    left:"75%",
    zIndex:"99999"
},'orange')

tl.to("#leaf4",{
    width:"15%",
    top: "100%",
    left:"70%",
    zIndex:"99",
    rotate: "360deg"
},'orange')


var tl2 = gsap.timeline({
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page3",
      start: "0% 78%",
      end: "0% 20%",
    //   markers: true,
      scrub: 2,
    },
  });

  tl2.to("#fanta",{
    top: "209%",
    left:"31.5%",
    width: "35%",
  },'orange')

  tl2.to("#orange",{
    top: "197%",
    left:"40%",
    width: "20%",
  },'orange');

  tl2.from("#sprite",{
    rotate:"-90deg",
  },'orange')

  tl2.from("#coco",{
    left:"-70%",
    rotate:"360deg",
    zIndex:"9999"
  },'orange')

  tl2.from("#page3lemon2",{
    right:"-70%",
    rotate:"-90deg",
  },'orange')

  tl2.from("#page3lemon",{
    left:"-70%",
    rotate:"-90deg",
  },'orange')