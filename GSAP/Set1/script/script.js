// gsap.to("#box",{
//     x:1000,
//     rotate : 360,
//     backgroundColor : "blue",
//     durataion:2,
//     delay : 1,
// });

// gsap.from("#box",{
//     x:1000,
//     rotate : 360,
//     backgroundColor : "blue",
//     durataion:2,
//     delay : 1,

// })

//GSAP Time-line

// var gsapa = gsap.timeline();

// gsap.to("#box1",{
//     x:1200,
//     rotate:360,
//     scale: 0.6,
//     durataion:2,
//     delay:1
// })
// gsapa.to("#box2",{
//     x:1200,
//     rotate:360,
//     scale: 0.6,
//     durataion:2,
// })
// gsapa.to("#box3",{
//     x:1200,
//     rotate:360,
//     scale: 0.6,
//     durataion:2,
// })

//GSAP TIME-LINE


var gsap = gsap.timeline();

gsap.to("#box",{
    x:1300,
    rotate : 720,
    backgroundColor : "black",
    scale : 0.6,
    duration : 4,
    delay : 2
});

gsap.from("#box1",{
    x:1300,
    rotate : 720,
    backgroundColor : "orange",
    scale : 0.6,
    duration : 4,
    delay : 2 
})
gsap.to("#box2",{
    x:1300,
    rotate : 720,
    backgroundColor : "black",
    scale : 0.6,
    duration : 4,
    delay : 2
});

gsap.from("#box3",{
    x:1300,
    rotate : 720,
    backgroundColor : "orange",
    scale : 0.6,
    duration : 4,
    delay : 2 
})