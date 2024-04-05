function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

init();



var menu = document.querySelector("#rnav #lines")
var full = document.querySelector("#full-scr-nav")

var flag = 0;

menu.addEventListener("click",function(){
if (flag == 0){
    full.style.top = "0%"
    document.querySelector("#nav h2").style.color = "#222"
    document.querySelector("#nav h3").style.color = "#222"
    document.querySelector("#lines #line1").style.backgroundColor = "#222"
    document.querySelector("#lines #line2").style.backgroundColor = "#222"
    flag = 1;
}else{
    full.style.top = "-100%"
    flag = 0;
    document.querySelector("#nav h2").style.color = "#d1d1d1"
    document.querySelector("#nav h3").style.color = "#d1d1d1"
    document.querySelector("#lines #line1").style.backgroundColor = "#d1d1d1"
    document.querySelector("#lines #line2").style.backgroundColor = "#d1d1d1"
    
}

})

var tl = gsap.timeline();

tl
    .from("#page1 h1",{
        y:20,
        opacity:0,
        duration:0.7
    })

    .from("#page1 h2",{
        y:30,
        opacity:0,
        duration:0.7,
        delay: "-0.2"
    })

    .from("#page1 h3",{
        y:40,
        opacity:0,
        duration:0.7,
        delay: "-0.3"
    })

    gsap.to("#page2 img",{
        scale: 1,
        scrollTrigger:{
            trigger: "#page2 img",
            scroller: "#main",
            // markers: true,
            start: "top 75%",
            end: "top -10%",
            scrub: 3
        }
    })

    gsap.from("#page3 h1",{
        rotateX: "90deg",
        opacity: 0,
        scrollTrigger:{
            trigger: "#page3 h1",
            scroller: "#main",
            // markers:true,
            start: "top 60%",
            end: "top 58%",
            scrub: 3
        }
    })

    gsap.to("#page4 #line",{
        width: "90%",
        duration: 1.5,
        scrollTrigger:{
            trigger: "#page4 #line",
            scroller: "#main",
            // markers:true,
            start: "top 90%",
            end: "top 10%",
            scrub: 3
        }
    })

    gsap.to("#page6 img",{
        rotate: "360deg",
        repeat: -1,
        duration: 2.5,
        ease: "none"
    })

    var slide1h1 = document.querySelectorAll("#page7 .slide1h1 h1");
    slide1h1.forEach(function(elem){
        // console.log(elem)
        gsap.to(elem,{
            transform: 'translateX(-100%)',
            duration: 4,
            scrollTrigger:{
                trigger: "#page7",
                scroller: "#main",
                scrub: 3
            }
        })
    })

    var slide2h1 = document.querySelectorAll("#page7 .slide2h1 h1");
    slide2h1.forEach(function(elem){
        // console.log(elem)
        gsap.to(elem,{
            transform: 'translateX(0%)',
            duration: 4,
            scrollTrigger:{
                trigger: "#page7",
                scroller: "#main",
                scrub: 3
            }
        })
    })

    document.querySelector("#opt1").addEventListener("mousemove",function(dets){
        document.querySelector("#opt1 img").style.opacity = 1
        document.querySelector("#opt1 img").style.left = `${dets.x -230}px`
        document.querySelector("#opt1 img").style.top = `${dets.y -530}px`
    })

    document.querySelector("#opt1").addEventListener("mouseleave",function(dets){
        document.querySelector("#opt1 img").style.opacity = 0
    })

    document.querySelector("#opt2").addEventListener("mousemove",function(dets){
        document.querySelector("#opt2 img").style.opacity = 1
        document.querySelector("#opt2 img").style.left = `${dets.x -830}px`
        document.querySelector("#opt2 img").style.top = `${dets.y -530}px`
    })

    document.querySelector("#opt2").addEventListener("mouseleave",function(dets){
        document.querySelector("#opt2 img").style.opacity = 0
    })