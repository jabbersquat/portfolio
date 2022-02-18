
gsap.registerPlugin(DrawSVGPlugin);

var txt1 = document.getElementById('txt1'),
  headline = document.getElementById('headline'),
  proof1 = document.getElementById('p1'),
  proof2 = document.getElementById('p2'),
  proof3 = document.getElementById('p3'),
  legal = document.getElementById('legal'),
  logo = document.getElementById('logo'),
  cta = document.getElementById('cta'),
  ctaWrap = document.getElementById('cta-wrapper'),
  overlay = document.getElementById('pattern-overlay'),
  iceCream = document.getElementById('ice-cream-whole'),
  iceCreamDrawing = document.getElementById('ice-cream-drawing'),
  
  spr1 = document.getElementById('sprinkle1'),
  spr2 = document.getElementById('sprinkle2'),
  spr3 = document.getElementById('sprinkle3'),
  spr4 = document.getElementById('sprinkle4'),
  spr5 = document.getElementById('sprinkle5'),
  spr6 = document.getElementById('sprinkle6'),
  spr7 = document.getElementById('sprinkle7'),
  spr8 = document.getElementById('sprinkle8'),
  spr9 = document.getElementById('sprinkle9'),
  spr10 = document.getElementById('sprinkle10'),
  spr11 = document.getElementById('sprinkle11'),
  spr12 = document.getElementById('sprinkle12'),
  spr13 = document.getElementById('sprinkle13'),
  spr14 = document.getElementById('sprinkle14'),
  ic = document.getElementById('ice-cream-path'),
  icInner = document.getElementById('ice-cream-path-inner'),
  cherryWhole = document.getElementById('cherry-whole'),
  cherry = document.getElementById('cherry'),
  cherryStem = document.getElementById('cherry-stem')
  cherryWrap = document.getElementById('cherry-wrapper');


function animate() {

  var tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.inOut'}});
    tl.set(iceCream, {x: 158, opacity: 1, scale:1, rotation:0.01, transformOrigin: '50% 50%'},'set')
    .set(headline, {x: 5, y: 136, scale:0.687, rotation:0.01, transformOrigin: '0px 0px'},'set')
    .set(cta, {scale:0.5, rotation:0.01, transformOrigin: '16px 132px'},'set')
    .set(cherryWhole, {y: -25, rotation:0.01, transformOrigin: '50% 50%'},'set')
    .set(cherry, {scale: 1, rotation:0.01, transformOrigin: '96px 57px'},'set')
    .set([spr1,spr2,spr3,spr4,spr5,spr6,spr7,spr8,spr9,spr10,spr11,spr12,spr13,spr14,icInner], {drawSVG: "0"})
    .set(ic, {drawSVG: "55% 55%"})

    .to(overlay, {duration: 0.5, x: -118, ease: "back.out(1.4)"},'start+=0.3')
    .to(headline, {duration: 0.25, opacity: 1},'start+=0.01')
    .to(iceCream, {duration: 0.5, x: 0, ease: "back.out(1.4)"},'start+=0.5')
    .to(txt1, {opacity: 1},'start+=0.5')

    .to(txt1, {opacity: 0},'txt1+=1.5')
    .to(headline, {duration: 0.5, y: -1},'txt1+=1.65')

    .to(p1, {opacity: 1},'proofs+=0')
    .to(p2, {opacity: 1},'proofs+=2.5')
    .to(p3, {opacity: 1},'proofs+=5')

    .to(iceCreamDrawing, {duration:0.1, opacity: 1},'proofs+=0.25')
    .to(ic, {duration: 1.5, drawSVG: "100%", ease: 'power1.out'},'proofs+=0.25')
    .to(icInner, {duration: 1.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=2.75')
    .to([spr3,spr6,spr9,spr12], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=3.1')
    .to([spr2,spr5,spr8,spr11,spr14], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=3.4')
    .to([spr1,spr4,spr7,spr10,spr13], {duration: 0.25, drawSVG: "100%", ease: 'power1.out'},'proofs+=3.7')
    .to(cherryWrap, {duration:0.2, opacity: 1},'proofs+=5.75')
    .to(cherryWhole, {duration:0.4, opacity: 1, y: 0, ease: "back.out(2)"},'proofs+=5.75')
    .to(cherry, {duration:0.2, scaleY:0.85, ease: "power1.out"},'proofs+=5.75')
    .to(cherry, {duration:0.2, scaleY:1, ease: "power1.in"},'proofs+=6')
    .to(cherryStem, {duration:0.2, y:10, ease: "power1.out"},'proofs+=5.75')
    .to(cherryStem, {duration:0.2, y:0, ease: "power1.in"},'proofs+=6')

    .to(headline, {duration: 0.5, y: 0, x: 0, scale: 1},'final+=2.3')
    .to(iceCream, {duration: 0.5, x: 158, scale: 1, ease: "back.in(1.4)"},'final+=2')
    .to(overlay, {duration: 0.5, x: 0, scale: 1, ease: "back.in(1.4)"},'final+=2.1')
    .to(p1, {opacity: 0},'final+=2')
    .to(p2, {opacity: 0},'final+=2.15')
    .to(p3, {opacity: 0},'final+=2.3')
    .to(legal, {opacity: 1},'final+=3.25')
    .to(logo, {opacity: 1},'final+=3.25')
    .to(ctaWrap, {duration: 0.25, opacity: 1},'final+=4.25')
    .to(cta, {duration: 0.5, scale: 1, ease: "back.out(1)"},'final+=4.25')
    .set(cta, {className: 'sprite finished', clearProps:"transform"},'end');


  return tl;
}

// GSDevTools.create();


window.onload = function(e) {
  window.ad = new animate();
};