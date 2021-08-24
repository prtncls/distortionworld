$(".tierra").mousemove(function(e) {
    //parallaxIt(e, ".tierra1", -160);
    parallaxIt(e, ".tierra2", -200);
    parallaxIt(e, ".tierra3", -100);
    parallaxIt(e, ".tierra4", -50);
  });
  
  function parallaxIt(e, target, movement) {
    let $this = $(".tierra");
    let relX = e.pageX - $this.offset().left;
    let relY = e.pageY - $this.offset().top;
  
    let tl_moveAll = gsap.timeline()
    
    
    tl_moveAll.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }