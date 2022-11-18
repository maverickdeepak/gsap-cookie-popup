const timeline = gsap.timeline({
  defaults: { duration: 0.75, ease: "power1.out" },
});
timeline.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5 }
);
timeline.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);
timeline.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

// cookies jumping
timeline.fromTo(
  ".cookie",
  { y: 0, rotation: "0deg" },
  { y: -20, rotation: "-15deg", yoyo: true, repeat: -2 }
);

// Hide the cookies container on button click
const button = document.querySelector("button");
button.addEventListener("click", () => {
  gsap.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power1.out",
  });
});
