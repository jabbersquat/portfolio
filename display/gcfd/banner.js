
var txt1 = document.getElementById('txt1'),
	txt2 = document.getElementById('txt2'),
	txt3 = document.getElementById('txt3'),
	tag = document.getElementById('tag'),
  cta = document.getElementById('cta'),
  greenBg = document.getElementById('green-bg'),
  
  img = document.getElementById('img-wrapper'),
  uncropped = document.getElementById('uncropped'),
  face = document.getElementById('face');

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
  gsap.set(img, {scale: 1, left:'-27%',top:'-34.4%', rotation:0.1, z: 0.1, transformOrigin:"0% 0%"});

  gsap.to(txt1, 1,{ opacity:1, delay:0});
  gsap.to(txt2, 1,{ opacity:1, delay:1.5});
  gsap.to(txt3, 1,{ opacity:1, delay:3});

  gsap.to(img, 6,{ scale:0.35,left:'25%',top:'12%', delay: 1, ease: "power2.out"})
  gsap.to(uncropped, 4,{ opacity:0, delay: 4})
  gsap.to(face, 4,{ opacity:1, delay: 5})

  gsap.to(greenBg, 1,{ opacity:1, delay:10});
  gsap.delayedCall(10, animateLogo);
  gsap.to(tag, 1,{ opacity:1, delay:11});
  gsap.to(cta, 1,{ opacity:1, delay:12});

  gsap.delayedCall(15, reset);
}

function reset() {
  gsap.set([txt1,txt2,txt3,face], {opacity: 0});
  gsap.set(uncropped, {opacity: 1});
  gsap.set(img, {scale: 1, left:'-27%',top:'-34.4%', rotation:0.1, z: 0.1, transformOrigin:"0% 0%"});
  gsap.to([cta,tag], {duration: 0.75, opacity: 0});
  gsap.to(["#greater","#chicago","#food-wrapper","#depository-wrapper","#icon"], {duration: 0.75, opacity: 0});
  gsap.to(greenBg, {duration: 0.75, opacity: 0, delay: 0.75});

  gsap.delayedCall(1, animate);
}

window.onload = function(e) {
	window.ad = new animate();
};