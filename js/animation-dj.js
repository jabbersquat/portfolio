// Intro Animation
function clearInlineStyles() {
  let reset = gsap.timeline();
  reset
  .set('#title-wrapper_home, #intro__home, .section-hdr, .section-hr, .section, .section-content, .section-intro, .site-header, .playlist-wrapper, .footer, .section-contact, .site-sidebar-inner button. .playlist-hdr-wrapper', { clearProps: "all" })
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
    const desktopMargins = [0, 0];
    return desktopMargins;
  }
})();

function loadin_animate() {

  var tl = gsap.timeline(
    {
      defaults: {duration: 0.5, ease: 'power1.inOut'},
      onComplete: clearInlineStyles,
    });

  var splitNameFirst = new SplitText('.name__home--first', {type:'chars'});
  var splitNameLast = new SplitText('.name__home--last', {type:'chars'});
  var splitHeader1 = new SplitText('#playlist-hdr', {type:'chars'});

  tl
    .set('.section-hdr', {marginBottom: 0})
    .set('.section-hr', {marginBottom: 0, marginTop: 0})
    .to('body', {opacity: 1,duration:0.2})
    .from('.hello__home', {opacity:0},'textintro+=0.6')
    .from('.hello__home', {y:40},'textintro+=1.15')
    .from('.name__home--first', {y:40,opacity:0},'textintro+=1.15')
    .from('.name__home--last', {y:40,opacity:0},'textintro+=1.15')
    .from(splitNameFirst.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}}, 'textintro2')
    .from(splitNameLast.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.05}}, 'textintro2+=0.1')
    .from('#title-wrapper_home', {duration: 0.1, marginTop: loadinCorrectMargins[0], marginLeft: loadinCorrectMargins[1]},'start+=1')
    .from('#intro__home', {opacity: 0},'start+=0.5')
    .from('.section-hdr', {opacity:0, stagger: {each: 0.1}},'fadein1-=0.1')
    .from('.section-hr', {scaleX: 0, transformOrigin: '0 0', stagger: {each: 0.1}},'fadein1-=0.1')
    .from(splitHeader1.chars, {duration: 0.25, fontWeight: 400, stagger: {each: 0.1}},'fadein1-=0.1')
    // .addPause()
    .to('.section-hdr', {marginBottom: '1rem'},'fadein2+=0.5')
    .to('.section-hr', {marginTop: 40, marginBottom: 40},'fadein2+=0.5')
    .from('.playlist-hdr-wrapper', {marginBottom: 0},'fadein2+=0.5')
    .from('.section-intro', {marginBottom: 0, height: 0, transformOrigin: '0 0'},'fadein2+=0.5')
    .from('.section-content', {height: 0, paddingTop: 0, paddingBottom: 0, stagger: {each: 0.1}},'fadein2+=0.5')
    .from('#intro__home', {marginBottom: 0},'fadein2+=0.5')
    .from('.site-header', {paddingBottom: 0},'fadein2+=0.5')
    .from('.playlist-wrapper', {opacity: 0},'fadein3+=0.65')
    .from('.footer, .section-contact', {opacity: 0},'fadein3+=0.75')
    .from('.site-sidebar-inner button', {opacity:0, stagger: {each: 0.1}},'fadein3+=0.35')
    ;

  return tl;
}

document.addEventListener('DOMContentLoaded', loadin_animate, false);