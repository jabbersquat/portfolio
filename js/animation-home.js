// Intro Animation
const chunkSize = 50;
const allbits = [...document.querySelectorAll(".bt-fill")];
var chunkedbits = allbits.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/chunkSize)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }
  resultArray[chunkIndex].push(item);
  return resultArray
}, [])

function clearInlineStyles() {
  let reset = gsap.timeline();
  reset
  .set('.title-wrapper, .eightbithead, .eightbithead-wrapper, .intro, .section-hdr, .section-hr, .section, .section-content, .section-intro, .site-header, .skill-list li, .work-item, .video-wrapper, .site-footer, .section-contact, .site-sidebar-inner button, .eightbithead-opacity', { clearProps: "all" })
  .add(skillTriggers)
  .add(displayTriggers)
  .add(videoTriggers)
  ;
}

// Slight change to loadin_animate on mobile
const mediaQuery = window.matchMedia('(max-width: 525px)');
var loadinCorrectMargins = (function() {
  if(mediaQuery.matches) {
    console.log('Media Query Matched!');
    const mobileMargins = [100, 0];
    return mobileMargins;
  } else {
    const desktopMargins = [0, 120];
    return desktopMargins;
  }
})();



function loadin_animate() {

  var tl = gsap.timeline({ defaults: {duration: 0.5, ease: 'power1.inOut'}, onComplete: clearInlineStyles, });

  var splitNameFirst = new SplitText('.name--first', {type:'chars'});
  var splitNameLast = new SplitText('.name--last', {type:'chars'});
  var splitHeader1 = new SplitText('#skills-hdr', {type:'chars'});
  var splitHeader2 = new SplitText('#work-hdr', {type:'chars'});
  var splitHeader3 = new SplitText('#video-hdr', {type:'chars'});

  var chunkedTl = gsap.timeline();
  for(var i = 0; i < chunkedbits.length; i++) {
    if(i == chunkedbits.length - 1 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.15}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 2 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.3}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 3 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.45}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 4 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.6}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 5 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.75}), 0.5-i*0.01);
    } else if(i == chunkedbits.length - 6 ) { 
      chunkedTl.add(gsap.fromTo(chunkedbits[i], {opacity: 0}, {duration: 0.25, opacity:0.9}), 0.5-i*0.01);
    } else {
      chunkedTl.add(gsap.from(chunkedbits[i], {duration: 0.25, opacity:0}), 0.5-i*0.01)
    }
  }
    tl
    .set('.section-hdr', {marginBottom: 0})
    .set('.section-hr', {marginBottom: 0, marginTop: 0})
    .to('.body', {opacity: 1,duration:0.2})
    .from('.hello', {opacity:0},'textintro+=0.6')
    .from('.hello', {y:40},'textintro+=1.15')
    .from('.name--first', {y:40,opacity:0},'textintro+=1.15')
    .from('.name--last', {y:40,opacity:0},'textintro+=1.15')
    .add(chunkedTl, 'textintro+=0.15')
    .from(splitNameFirst.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}}, 'textintro2-=0.25')
    .from(splitNameLast.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}}, 'textintro2-=0.05')
    .from('.title-wrapper', {duration: 0.01, marginTop: loadinCorrectMargins[0], marginLeft: loadinCorrectMargins[1]},'start+=0.8')
    .from('.eightbithead', {duration: 1, scale:0.05,marginLeft:40,marginTop:20},'start+=0.25')
    .from('.eightbithead-wrapper', {duration: 2, zIndex: 99, opacity: 1, width: '100%', ease: 'power3.inOut'},'start+=0.25')
    .from('.eightbithead-opacity', {duration: 0.5, filter: 'saturate(1)', opacity: 1},'start+=1.7')
    .from('.intro', {opacity: 0},'start+=0.7')
    .from('.section-hdr', {opacity:0, stagger: {each: 0.1}},'fadein1-=1.25')
    .from('.section-hr', {scaleX: 0, transformOrigin: '0 0', stagger: {each: 0.1}},'fadein1-=1.25')
    .from(splitHeader1.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}},'fadein1-=1.25')
    .from(splitHeader2.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}},'fadein1-=1.3')
    .from(splitHeader3.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}},'fadein1-=1.35')
    // .addPause()
    .to('.section-hdr', {marginBottom: '1rem'},'fadein2-=0.1')
    .to('.section-hr', {marginTop: 40, marginBottom: 40},'fadein2-=0.1')
    .from('.section-intro', {marginBottom: 0, height: 0, transformOrigin: '0 0'},'fadein2-=0.1')
    .from('.section-content', {height: 0, paddingTop: 0, paddingBottom: 0, stagger: {each: 0.1}},'fadein2-=0.1')
    .from('.intro', {marginBottom: 0},'fadein2-=0.1')
    .from('.site-header', {paddingBottom: 0},'fadein2-=0.1')
    .from('.skill-list li', {opacity:0, stagger: {each: 0.05}},'fadein3')
    .from('.section-intro', {opacity:0, stagger: {each: 0.1}},'fadein3')
    .from('.work-item', {opacity:0, stagger: {each: 0.1}},'fadein3+=0.25')
    .from('.video-wrapper', {opacity: 0},'fadein3+=0.65')
    .from('.site-footer, .section-contact', {opacity: 0},'fadein3+=0.75')
    .from('.site-sidebar-inner button', {opacity:0, stagger: {each: 0.1}},'fadein3+=0.35')
    ;

  return tl;
}

document.addEventListener('DOMContentLoaded', loadin_animate, false);


// Video Scroll Trigger Animation
function videoTriggers() {
  const videos = gsap.utils.toArray('.work-video');

  videos.forEach(function(video, i) {
    
    ScrollTrigger.create({
      trigger: video,
      start: 'top center',
      end: 'bottom center',
      toggleClass: 'work-video-enabled',
      // markers: true,
      onEnter: () => video.play(),
      onEnterBack: () => video.play(),
      onLeave: () => video.pause(),
      onLeaveBack: () => video.pause(),
    });
    
  });
}

// Display Ad Scroll Trigger Animation
function displayTriggers() {
  ScrollTrigger.create({
    trigger: '#display-ads',
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => tl_main.play(),
    onEnterBack: () => tl_main.play(),
    onLeave: () => tl_main.pause(),
    onLeaveBack: () => tl_main.pause(),
  });
}

// Skill Logo animation
function skillTriggers() {

  let tl_skills = gsap.timeline({paused:true});
  tl_skills.addLabel('start')
  .to('#skill-set-primary .skill-colored', {duration: 0.25, opacity: 1, stagger: {each: 0.15}},'animatein')
  .to('#skill-set-secondary .skill-colored', {duration: 0.25, opacity: 1, stagger: {each: 0.15}},'animatein+=0.2')
  .addLabel('middle')
  .to('.skill-colored', {duration: 4, opacity: 0})
  .addLabel('end');

  ScrollTrigger.create({
    trigger: '#skills',
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => tl_skills.tweenFromTo("start", "middle"),
    onEnterBack: () => tl_skills.tweenFromTo("start", "middle"),
    onLeave: () => tl_skills.tweenFromTo("middle", "end"),
    onLeaveBack: () => tl_skills.tweenFromTo("middle", "end"),
  });
}