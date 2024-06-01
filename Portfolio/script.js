gsap.to("#nav", {
  backgroundColor: "black",
  duration: 1,
  height: "160px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});


gsap.from(".cards", {
  y: 90,
  opacity: 0,
  duration: 2,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".cards ",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -30,
  x: -30,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 30,
  x: 30,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page3", {
  y: 70,
  scrollTrigger: {
    trigger: "#green-div",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 4,
  },
});
