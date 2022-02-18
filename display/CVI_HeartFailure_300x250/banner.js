
var txt1a = document.getElementById('txt1a'),
  txt1b = document.getElementById('txt1b'),
  txt1c = document.getElementById('txt1c'),
  logo = document.getElementById('logo'),
  txt3a = document.getElementById('txt3a'),

  proof1 = document.getElementById('proof1'),
  proof2 = document.getElementById('proof2'),
  proof3 = document.getElementById('proof3'),
  
  imageMain = document.getElementById('image-main'),
  imageMultiplied = document.getElementById('image-multiplied'),
  imageMultipliedClipping = document.getElementById('multiply-clipping-path')
  line = document.getElementById('line'),
  frame1Wrap = document.getElementById('frame1-wrapper'),
  
  ekgLineLead = document.getElementById('ekg-dash-lead'),
  ekgLineFull = document.getElementById('ekg-dash-full'),
  ekgLineRed = document.getElementById('ekg-dash-red');

	
function animate() {
  gsap.set([imageMain, imageMultiplied, imageMultipliedClipping], {scale:1, rotation:0.01, z:0, transformOrigin:"50% 50%"});

  gsap.to([imageMain, imageMultiplied],{duration:12, scale: 1.2, delay:0, ease: "none"});
  gsap.to([txt1a,txt1b],{duration:1, opacity:1, delay:0.2});

  gsap.to(txt1b,{duration:1, opacity:0, delay:3});
  gsap.to(txt1c,{duration:1, opacity:1, delay:3.5});

  gsap.delayedCall(5, animate2);
}

function animate2() {
  gsap.to(imageMultipliedClipping,{duration:0.75, attr: {y: 0}, delay:0, ease: "power1.inOut"});
  gsap.to(line,{duration:0.5, opacity: 1, attr: {x2: 68}, delay:0.25, ease: "power1.inOut"});
  gsap.to([txt1a,txt1c],{duration:1, opacity:0, delay:0});
  gsap.to(proof1,{duration:1, opacity:1, delay:0.75});

  gsap.to(proof1,{duration:1, fill: "#ffffff", delay:2.5});
  gsap.to(proof2,{duration:1, opacity:1, delay:2.6});

  gsap.to(proof2,{duration:1, fill: "#ffffff", delay:4.25});
  gsap.to(proof3,{duration:1, opacity:1, delay:4.35});

  gsap.to(proof3,{duration:1, fill: "#ffffff", delay:6});
  gsap.to([proof1,proof2,proof3,line,frame1Wrap],{duration:1, opacity:0, delay:8});
  
  gsap.to(ekgLineLead, {duration: 1, strokeDashoffset: 875, delay: 8, ease: "power1.inOut"});
  gsap.to(ekgLineFull, {duration: 1, strokeDashoffset: 1775, delay: 8, ease: "power1.inOut"});
  gsap.to(ekgLineRed, {duration: 1, opacity: 1, delay: 8.25, ease: "power1.inOut"});
  gsap.to(txt3a,{duration:1, opacity:1, delay:9});
}



window.onload = function(e) {
	window.ad = new animate();
};