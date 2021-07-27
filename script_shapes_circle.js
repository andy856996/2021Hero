document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.to(".shape_circle", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });
});