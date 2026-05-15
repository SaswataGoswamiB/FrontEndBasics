gsap.from("#Page1 .circle",{
    scale: 0,
    delay : 1,
    duration : 2,
    ease : "back",
    rotate : 360,
});
gsap.from("#Page2 .circle",{
    scale: 0,
    delay : 1,
    duration : 2,
    ease : "back",
    rotate : 360,
    scrollTrigger : "#Page2 .circle"
});
gsap.from("#Page3 .circle",{
    scale: 0,
    delay : 1,
    duration : 2,
    ease : "back",
    rotate : 360,
    scrollTrigger : {
        trigger : "#Page3 .circle",
        scroller : "body", 
        markers : true,
        start : "top 90%",
        end : "top 20%",
        scrub : true
    }
});