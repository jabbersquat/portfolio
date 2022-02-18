
var txt1a = document.getElementById('txt1a-use'),
	txt1b = document.getElementById('txt1b-use'),
	txt2Wrap = document.getElementById('txt2-wrap'),
	txt2a = document.getElementById('txt2a-wrap'),
	txt2aColor = document.getElementById('txt2a-color'),
	txt2b = document.getElementById('txt2b-wrap'),
	txt2bColor = document.getElementById('txt2b-color'),
  txt2c = document.getElementById('txt2c-wrap'),
	txt2cColor = document.getElementById('txt2c-color'),
  txt3a = document.getElementById('txt3a-use'),
  txt3b = document.getElementById('txt3b-use'),
  
  swedish = document.getElementById('swedish-lockup-svg'),
  ns = document.getElementById('ns-logo-svg'),
  
  multiplyBottom = document.getElementById('multiply-bottom'),
  multiplyTop = document.getElementById('multiply-top'),
  screenMiddle = document.getElementById('screen-middle'),
  screenMiddleInvert = document.getElementById('screen-middle-invert'),
  solidBottom = document.getElementById('solid-bottom'),
  solidTop = document.getElementById('solid-top'),
  solidMiddle = document.getElementById('solid-middle'),
  
  mainImage = document.getElementById('main-image'),
  screenMiddleImage = document.getElementById('screen-middle-image'),
  multiplyTopImage = document.getElementById('multiply-top-image'),
  multiplyBottomImage = document.getElementById('multiply-bottom-image');

	
function animate() {
  gsap.set([screenMiddle,screenMiddleInvert,multiplyTop,multiplyBottom,solidTop,solidMiddle,solidBottom], {scale:1, rotation:0.01});
  gsap.set([mainImage,screenMiddleImage,multiplyBottomImage,multiplyTopImage], {scale:1, rotation:0.01, transformOrigin:"50% 10%"});
  gsap.set([txt1a,txt1b,txt3a,txt3b], {scale:1, rotation:0.01, transformOrigin:"50% 50%"});
  gsap.set(txt2a, {scale:0.55, rotation:0.01, svgOrigin:"23px 80px"});
  gsap.set(txt2b, {scale:0.55, rotation:0.01, svgOrigin:"23px 130px"});
  gsap.set(txt2c, {scale:0.55, rotation:0.01, svgOrigin:"23px 173px"});

  gsap.to([txt1a,txt1b],{duration:1, opacity:1, delay:0.2});
  gsap.to([txt1a,txt1b],{duration:1, opacity:0, delay:3.5});

  gsap.to([mainImage,screenMiddleImage,multiplyBottomImage,multiplyTopImage],{duration:4.25, scale: 1.07, delay:0, ease: "none"});
  gsap.to(screenMiddle,{duration:3, attr: {points: "322.8,340.4 322.8,76.6 -22.8,76.6"}, delay:0, ease: "power1.in"});
  gsap.to(multiplyTop,{duration:3.4, attr: {points: "300,101.5 300,0 171.5,0"}, delay:0, ease: "power1.inOut"});
  gsap.to(multiplyBottom,{duration:3.45, attr: {points: "0,9.7 0,250 316.2,250"}, delay:0, ease: "power1.inOut"});

  gsap.to(screenMiddle,{duration:0.5, attr: {points: "444.8,433.5 444.8,-16.5 -144.8,-16.5"}, delay:3, ease: "power1.inOut"});
  gsap.to(screenMiddleInvert,{duration:1, attr: {points: "414,323 0,323 0,7"}, delay:3, ease: "power1.inOut"});
  gsap.to(multiplyTop,{duration:0.5, attr: {points: "300,343.1 300,0 -134.4,0"}, delay:3.4, ease: "power1.inOut"});
  gsap.to(multiplyBottom,{duration:0.5, attr: {points: "0,-230.7 0,250 632.5,250"}, delay:3.45, ease: "power1.inOut"});

  gsap.to(solidMiddle,{duration:0.5, attr: {points: "0,-141.6 0,250 515.2,250"}, delay:3.7, ease: "power1.inOut"});
  gsap.to(solidBottom,{duration:0.5, attr: {points: "0,88 0,250 213.2,250"}, delay:3.7, ease: "power1.inOut"});
  gsap.to(solidTop,{duration:0.5, attr: {points: "299.8,120 299.8,0 142,0"}, delay:3.7, ease: "power1.inOut"});

  gsap.delayedCall(4.25, animate2);
}

function animate2() {
  gsap.to(txt2Wrap,{duration:1, opacity:1, delay:0});
  gsap.to(txt2b,{duration:1, opacity:1, delay:0.05});
  gsap.to(txt2c,{duration:1, opacity:1, delay:0.1});

  gsap.to(txt2a,{duration:1, scale:1, delay:0.15, ease: "power1.inOut"});
  gsap.to(txt2aColor,{duration:1, attr: {width: 300}, delay:0.5, ease: "power1.inOut"});
  gsap.to(txt2aColor,{duration:1, attr: {width: 20}, delay:3, ease: "power1.inOut"});
  gsap.to(txt2a,{duration:1, scale:0.55, delay:3.25, ease: "power1.inOut"});

  gsap.delayedCall(3.25, animate3);
}

function animate3() {  
  gsap.to(txt2b,{duration:1, scale:1, delay:0.25, ease: "power1.inOut"});
  gsap.to(txt2bColor,{duration:1, attr: {width: 300}, delay:0.5, ease: "power1.inOut"});
  gsap.to(txt2bColor,{duration:1, attr: {width: 20}, delay:3, ease: "power1.inOut"});
  gsap.to(txt2b,{duration:1, scale:0.55, delay:3.25, ease: "power1.inOut"});

  gsap.delayedCall(3.25, animate4);
}

function animate4() {  
  gsap.to(txt2c,{duration:1, scale:1, delay:0.25, ease: "power1.inOut"});
  gsap.to(txt2cColor,{duration:1, attr: {width: 300}, delay:0.55, ease: "power1.inOut"});
  gsap.to(txt2cColor,{duration:1, attr: {width: 20}, delay:3, ease: "power1.inOut"});
  gsap.to(txt2c,{duration:1, scale:0.55, delay:3.25, ease: "power1.inOut"});
  gsap.to(txt2Wrap,{duration:1, opacity:0, delay:3.5});

  gsap.delayedCall(3.75, animate5);
}

function animate5() {  
  gsap.to([txt3a,txt3b],{duration:1, opacity:1, delay:0});
  gsap.to([swedish,ns],{duration:1, opacity:1, delay:0.5});  

}


window.onload = function(e) {
	window.ad = new animate();
};