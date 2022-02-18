
var txt1a = document.getElementById('txt1a'),
	txt1c = document.getElementById('txt1c'),
	txt1b_ABN = document.getElementById('txt1b-abn'),
	txt1b_ORMAL = document.getElementById('txt1b-ormal'),
	txt1b_HEA = document.getElementById('txt1b-hea'),
	txt1b_RT = document.getElementById('txt1b-rt'),
	txt1b_RHY = document.getElementById('txt1b-rhy'),
	txt1b_THMS = document.getElementById('txt1b-thms'),
  logo = document.getElementById('logo'),
  txt3a = document.getElementById('txt3a'),

  proof1 = document.getElementById('proof1'),
  proof2 = document.getElementById('proof2'),
  proof3 = document.getElementById('proof3'),
  
  imageMain = document.getElementById('image-main'),
  imageMultiplied = document.getElementById('image-multiplied'),
  imageMultipliedClipping = document.getElementById('multiply-clipping-path'),
  line = document.getElementById('line'),
  frame1Wrap = document.getElementById('frame1-wrapper'),
  
  ekgLineLead = document.getElementById('ekg-dash-lead'),
  ekgLineFull = document.getElementById('ekg-dash-full'),
  ekgLineRed = document.getElementById('ekg-dash-red');

	
function animate() {
  gsap.set([imageMain, imageMultiplied, imageMultipliedClipping], {scale:1, rotation:0.1,z:0.1, transformOrigin:"50% 50%"});
	gsap.set([txt1b_ABN,txt1b_ORMAL,txt1b_HEA,txt1b_RT,txt1b_RHY,txt1b_THMS], {scale:0.75 });
	gsap.set(txt1b_ABN, {transformOrigin:"22% 45%" });
	gsap.set(txt1b_ORMAL, {transformOrigin:"66% 45%" });
	gsap.set(txt1b_HEA, {transformOrigin:"36% 63%" });
	gsap.set(txt1b_RT, {transformOrigin:"63% 63%" });
	gsap.set(txt1b_RHY, {transformOrigin:"27% 82%" });
	gsap.set(txt1b_THMS, {transformOrigin:"63% 82%" });

  gsap.to([imageMain, imageMultiplied],{duration:12, scale: 1.2, delay:0, ease: "none"});
  
  gsap.to(txt1a, {duration: 1, opacity:1, delay:0.25 });
	gsap.to(txt1b_ABN, {duration: 0.35, opacity:1, scale:1, delay:1.25, ease: Elastic.easeOut.config(2, 1) });
	gsap.to(txt1b_ORMAL, {duration: 0.35, opacity:1, scale:1, delay:1.45, ease: Elastic.easeOut.config(2, 1) });
	
	gsap.to(txt1b_HEA, {duration: 0.35, opacity:1, scale:1, delay:2, ease: Elastic.easeOut.config(2, 1) });
	gsap.to(txt1b_RT, {duration: 0.35, opacity:1, scale:1, delay:2.2, ease: Elastic.easeOut.config(2, 1) });
	
	gsap.to(txt1b_RHY, {duration: 0.35, opacity:1, scale:1, delay:3, ease: Elastic.easeOut.config(2, 1) });
	gsap.to(txt1b_THMS, {duration: 0.35, opacity:1, scale:1, delay:3.4, ease: Elastic.easeOut.config(2, 1) });
  gsap.to(txt1c, {duration: 1, opacity:1, delay:4 });

  gsap.delayedCall(6, animate2);
}

function animate2() {
  gsap.to(imageMultipliedClipping,{duration:0.75, attr: {y: 0}, delay:0, ease: "power1.inOut"});
  gsap.to(line,{duration:0.5, opacity: 1, attr: {x2: 68}, delay:0.25, ease: "power1.inOut"});
  gsap.to([txt1a,txt1b_ABN,txt1b_ORMAL,txt1b_HEA,txt1b_RT,txt1b_RHY,txt1b_THMS,txt1c], {duration: 1, opacity:0, delay:0 });
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

  gsap.delayedCall(15, reset);
}

function reset() {
  gsap.set([imageMain, imageMultiplied, imageMultipliedClipping], {scale:1});
  gsap.to([txt3a,ekgLineRed],{opacity: 0, duration: 0.75});
  gsap.to(frame1Wrap,{opacity: 1, duration: 0.75});
  gsap.to(line,{attr: {x2: 28}, duration: 0.01});
  gsap.to(imageMultipliedClipping,{duration:0.75, attr: {y: 300}, delay:0, ease: "power1.inOut"});
  gsap.set(ekgLineLead, {strokeDashoffset: 700, delay: 1});
  gsap.set(ekgLineFull, {strokeDashoffset: 1600, delay: 1});
  gsap.set(proof1,{fill: "#8FD8F8", delay: 1});

  gsap.delayedCall(1, animate);
}



window.onload = function(e) {
	window.ad = new animate();
};