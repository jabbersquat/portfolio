
var txt1a = document.getElementById('txt1a'),
	txt1b = document.getElementById('txt1b'),
	txt2a = document.getElementById('txt2a'),
  txt2b = document.getElementById('txt2b'),
  txt3a = document.getElementById('txt3a'),
  txt3b = document.getElementById('txt3b'),
  cta = document.getElementById('cta');

var greater = document.getElementById('greater'),
    chicago = document.getElementById('chicago'),
    food = document.getElementById('food-wrapper'),
    depository = document.getElementById('depository-wrapper'),
    
    icon = document.getElementById('icon'),
    leavesInner = document.getElementById('leaves-inner'),
    leavesOuter = document.getElementById('leaves-outer'),
    
    leafInner1 = document.getElementById('leaf-inner-bottom'),
    leafInner2 = document.getElementById('leaf-inner-2'),
    leafInner3 = document.getElementById('leaf-inner-3'),
    leafInner4 = document.getElementById('leaf-inner-top'),
    leafInner5 = document.getElementById('leaf-inner-5'),
    leafInner6 = document.getElementById('leaf-inner-6'),
    
    leafOuter1 = document.getElementById('leaf-outer-bottom'),
    leafOuter2 = document.getElementById('leaf-outer-2'),
    leafOuter3 = document.getElementById('leaf-outer-3'),
    leafOuter4 = document.getElementById('leaf-outer-4'),
    leafOuter5 = document.getElementById('leaf-outer-top'),
    leafOuter6 = document.getElementById('leaf-outer-6'),
    leafOuter7 = document.getElementById('leaf-outer-7');

var allLeaves = [
  {object: leafInner1, scaleStart: 0.99, delay: 0.25, duration: 2},
  {object: leafInner2, scaleStart: 0.96, delay: 0.25, duration: 2},
  {object: leafInner3, scaleStart: 0.75, delay: 0.25, duration: 2},
  {object: leafInner4, scaleStart: 0.99, delay: 0.25, duration: 2},
  {object: leafInner5, scaleStart: 0.9, delay: 0.25, duration: 2},
  {object: leafInner6, scaleStart: 0.75, delay: 0.75, duration: 2},
  {object: leafOuter1, scaleStart: 0.77, delay: 0.5, duration: 2},
  {object: leafOuter2, scaleStart: 0.85, delay: 0.5, duration: 2},
  {object: leafOuter3, scaleStart: 0.98, delay: 0.5, duration: 2},
  {object: leafOuter4, scaleStart: 0.8, delay: 1, duration: 1.25},
  {object: leafOuter5, scaleStart: 0.85, delay: 0.5, duration: 2},
  {object: leafOuter6, scaleStart: 0.92, delay: 0.5, duration: 2},
  {object: leafOuter7, scaleStart: 0.82, delay: 0.5, duration: 2}  
];

function animateLogo() {
  for(var i = 0; i < allLeaves.length; i++) {
    console.log(allLeaves[i].object);
    gsap.set(allLeaves[i].object, {svgOrigin: '82 74', scale: allLeaves[i].scaleStart, rotation:0.01});
    gsap.to(allLeaves[i].object, {duration: allLeaves[i].duration, scale: 1, ease: "power2.out", delay: allLeaves[i].delay});
  }

  gsap.set([leavesInner,leavesOuter], {svgOrigin: '82 74', scale: 1, rotation:0.01});
  gsap.set(leavesInner, {rotation: -6, scale: 1.27});
  gsap.set(leavesOuter, {rotation: -12, scale: 1.44});

  gsap.to(leavesInner, {duration: 3, rotation: 0, scale: 1, ease: "power3.out", delay: 0.25});
  gsap.to(leavesOuter, {duration: 3, rotation: 0, scale: 1, ease: "power3.out", delay: 0.25});
  gsap.to(icon, {duration: 1, opacity: 1, delay: 0.25});
  gsap.to(greater, {duration: 1, opacity: 1, delay: 2});
  gsap.to(chicago, {duration: 1, opacity: 1, delay: 2.05});
  gsap.to(food, {duration: 1, opacity: 1, delay: 2.1});
  gsap.to(depository, {duration: 1, opacity: 1, delay: 2.15});
}

function animate() {
  gsap.to(txt1a, {duration: 1, opacity: 1})
  gsap.to(txt1b, {duration: 1, opacity: 1, delay: 1})

  gsap.delayedCall(3.5, animate2);
}

function animate2() {
  gsap.to([txt1a,txt1b],{duration:1, opacity:0, delay:0});
  gsap.to(txt2a,{duration:1, opacity:1, delay:0});
  gsap.to(txt2b,{duration:1, opacity:1, delay:1});  
  gsap.delayedCall(3.5, animate3);
}

function animate3() {
  gsap.to([txt2a,txt2b],{duration:1, opacity:0, delay:0});
  gsap.to(txt3a,{duration:1, opacity:1, delay:0});
  gsap.to(txt3b,{duration:1, opacity:1, delay:1});
  
  gsap.delayedCall(3.5, animate4);
}

function animate4() {
  gsap.to([txt3a,txt3b],{duration:1, opacity:0, delay:0});
  animateLogo();
  gsap.to(cta,{duration:1, opacity:1, delay:3});  
}


window.onload = function(e) {
	window.ad = new animate();
};