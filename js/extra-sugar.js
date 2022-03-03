gsap.registerPlugin(ScrollTrigger);


const videos = gsap.utils.toArray('.work-video');

videos.forEach(function(video, i) {
    
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    // markers: true,
    onEnter: () => video.play(),
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
  
});

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


//Logo hover animation

var target = document.querySelector("#bt-logo");
target.addEventListener("mouseover", btOver, false);
target.addEventListener("mouseout", btOut, false);

function btOver() {
   tl.play();
}
function btOut() {  
   tl.reverse();
}

var tl = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}, paused: true});
tl
.set('#t1,#t2,#t3,#t4,#t5,#t6,#t7', {svgOrigin: '13 3'})
.to('#t1,#t7', {scaleX: 1.5},'samezies')
.to('#t2,#t6', {scaleX: 2},'samezies')
.to('#t3,#t5', {scaleX: 3},'samezies')
.to('#t4', {scaleX: 6},'samezies')
.to(['#b-loop'], {x: -5},'samezies')
.to('#b', {duration: 0.5, x: 7},'samezies+=0.05')
.to('#cross1', {x: -3, y: 1},'samezies+=0.2')
.to('#cross2', {x: -3, y: -1},'samezies+=0.2')
.to('#cross3', {y: 1},'samezies+=0.2')
.to('#cross4', {y: -1},'samezies+=0.2');


// Skill Logo animation

const skillIcons = gsap.utils.toArray('.skill-svg');
var skillIcons_main = gsap.timeline({paused: true, repeatDelay: 2, repeat: -1});

const colorChange = {
  html: '#d24040',
  css: '#00a0c8',
  adobe: '#d24040',
  wordpress: '#736464',
  react: '#00a0c8',
  php: '#777bb3',
  gatsby: '#777bb3',
  laravel: '#d24040',
  drupal: '#00a0c8',
  digitalocean: '#00a0c8',
  github: '#f0f0dc'
}

skillIcons.forEach(function(icon, i) {
  var extra = icon.querySelector('.svg-skill-extra');
  var base = icon.querySelector('.skill-base');
  var skillName = icon.id;
  var tl_skillHighlight = gsap.timeline({defaults: {duration: 0.1, ease: 'power1.inOut'}});

  tl_skillHighlight
    .to(base, {fill: colorChange[skillName]}, 'start');
  
  if(extra !== null ){
    tl_skillHighlight.add( gsap.to(extra, {duration: 0.1, opacity: 1}), 'start' );
  }

  skillIcons_main.add(tl_skillHighlight, i * 0.05);
});

skillIcons_main.add( gsap.to('.svg-skill-extra', {duration: 3, opacity: 0}), 'end+=2'  );
skillIcons_main.add( gsap.to('.skill-base', {fill: '#101820'}), 'end+=2'  );

ScrollTrigger.create({
  trigger: '#skill-sets',
  start: 'top center',
  end: 'bottom center',
  // markers: true,
  onEnter: () => skillIcons_main.play(),
  onEnterBack: () => skillIcons_main.play(),
});

// Dark/Light Mode Toggle

var toggle = document.getElementById('theme-switcher');

var storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute('data-theme');
    var targetTheme = 'light';

    if (currentTheme === 'light') {
        targetTheme = 'dark';
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};



