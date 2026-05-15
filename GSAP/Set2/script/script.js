var timeline = gsap.timeline();

timeline.from("#image-intro img",{
    x:100,
    opacity:0,
    delay : 0.4,
});

timeline.from("#nav h3",{
y:-50,
duration : 0.5,
opacity:0,
stagger : 0.2
});

timeline.from("#main h1 span",{
    x : -500,
    duration : 0.6,
    opacity : 0,
    stagger : 0.4,
});
