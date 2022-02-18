gsap.set(['.intro','.footer','article','.leftside-wrapper','.work-imgs','.strongside-wrapper'], {opacity: 0});
gsap.set('.eightbithead', {scale:0.03,y:420,borderRadius: '50%',transformOrigin:'0 0'});
gsap.set('.eightbithead-scale-width', {x:140, transformOrigin:'0 0'});
gsap.set('.eightbithead-wrapper', {zIndex:10})
gsap.set('.title', {x:-500});
gsap.set('.title-wrapper', {marginLeft: 70, opacity: 1});
gsap.set('.eightbithead div', {opacity: 0});


function animate() {

  var tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.inOut'}});
    tl
    .to('.eightbithead div', { opacity: 1, duration: 0.01, stagger: { each: 0.1, from: "edges", grid: "auto", ease: "power2.inOut"}})
    .to('.title', {x:30,duration: 2})
    .to('.title', {duration: 0.5, x:0},'headGrow+=0.5')
    .to('.title-wrapper', {duration: 0.5, marginLeft: 0},'headGrow+=0.5')
    .to('.eightbithead', {duration: 1.5, scale: 1, x: 0, y: 0, borderRadius: 0},'headGrow+=0.5')
    .to('.eightbithead-scale-width', {duration: 0.75, x: -90},'headGrow+=0.5')
    .to(['.intro','.footer','article', '.leftside-wrapper'], {opacity: 1, duration: 0.25},'headGrow+=1.25')
    .to('.eightbithead-scale-width', {duration: 0.75, x: 0},'headGrow+=1.25')
    .to('.eightbithead-wrapper', {zIndex: -1})
    .to(['.strongside-wrapper','.work-imgs'], {opacity: 1},'next+=0.25')
    .to('.eightbithead div', {opacity: 0.4},'next-=1')
    ;

  return tl;
}




window.onload = function(e) {
  window.ad = new animate();
};