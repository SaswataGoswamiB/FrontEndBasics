gsap.to("#page2 h1",{
    transform : "translateX(-100%)",
    scrollTrigger :{
        trigger :"#page2 h1",
        scroller : "body",
        scrub : 4,
        pin : true,
        start :"top 0",
        end :"end -100%"
    }
})