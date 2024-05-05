const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from("#hero-section #nav",{
    y:20,
    opacity:0,
    duration:1,
    ease:Power3,
    stagger:0.5
});
gsap.from("#left",{
    x:"-100%",
    opacity:0,
    duration:1,
    ease:Power4
});
gsap.from("#right",{
    x:"100%",
    opacity:0,
    duration:1,
    ease:Power4
});
gsap.from("#image",{
    y:100,
    opacity:0,
    duration:1,
    ease:Power3
})
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.textAnimate("#image h1",{
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.makeMagnet("#video-section button" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#icon-circle", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
 const videoShow=()=>{
    document.querySelector("#video-section button").addEventListener(
        "mouseover", function(){
            gsap.to("#video-section video",{
                opacity:1,
                duration:1,
                ease:Power3
            })
        }
    )
    document.querySelector("#video-section button").addEventListener(
        "mouseleave", function(){
            gsap.to("#video-section video",{
                opacity:0,
                duration:1,
                ease:Power3
            })
        }
    )
  }
  videoShow();

Shery.imageEffect("#left img",{
    style:5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.6,"range":[-1,1]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.7142857142857143},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.00048337483086761105},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});
Shery.imageEffect(".img-effect img",{
    style:5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.6,"range":[-1,1]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.7142857142857143},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0.00048337483086761105},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});
Shery.imageEffect("#card-image",{
    style:5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.88,"range":[-1,1]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1.744867700729927},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true
});