  mo =1;
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  if($(window).width() < 800)
  {
      // JavaScript here 
      // 當視窗寬度小於800px時執行
    setTimeout(function(){
        if(mo==3){
          mo=1;
        }
        gsap.to(".shape_circle", {
        x: $(window).width()/mo,
        y: $(window).height()/mo,
        });
        mo=mo+1;
    },3000);
  } else {
      gsap.to(".shape_circle", {
        x: mouseX,
        y: mouseY,
      stagger: -0.1 });
      // JavaScript here
      // 當視窗寬度不小於800px時執行
  }

});
