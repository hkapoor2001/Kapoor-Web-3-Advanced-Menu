import {gsap} from "gsap";
gsap.set(".navdiv", {y:-500})

export const divAnimation = new gsap.timeline({paused:true});

divAnimation.to(".navdiv", {y:0, duration:.3, stagger:-.05, ease: "linear"})