gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText);


// Logo hover animation
const playBtn = document.getElementById('bt-logo-wrapper');
var iconSvg = document.getElementById("bt-logo");
playBtn.addEventListener("mouseover", btOver, false);
playBtn.addEventListener("mouseout", btOut, false);

function btOver() {
  iconTl.play();
}
function btOut() {  
  iconTl.reverse();
}

const iconTl = gsap.timeline({defaults: {duration: 0.25, ease: 'power1.inOut'}, paused: true});
iconTl
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

// Menu Expand
const chunkSizeMain = 50;
const allbitsMain = [...document.querySelectorAll(".bt-fill")];
var chunkedbitsMain = allbitsMain.reduce((resultArray, item, index) => { 
  const chunkIndexMain = Math.floor(index/chunkSizeMain)

  if(!resultArray[chunkIndexMain]) {
    resultArray[chunkIndexMain] = [] // start a new chunk
  }
  resultArray[chunkIndexMain].push(item);
  return resultArray
}, [])

let playState = true;
const iconBtnTl = gsap.timeline({ defaults: { duration: 0.25 }, paused:true });
for(let i = 0; i < chunkedbitsMain.length; i++) {
  iconBtnTl.add(gsap.to(chunkedbitsMain[i], {duration: 0.5, transformOrigin: "50% 50%", rotate: 180, backgroundColor:'#000000'}), 'start+=' + i*0.03)
}

iconBtnTl
  .to('.site-sidebar', { width: 400, duration: 0.5 },'start')
  .to('#site-header__home, #site-main, #site-footer', { opacity: 0.1 },'start')
  .to('.eightbithead-opacity', { opacity: 0.8 },'start');

playBtn.addEventListener('click', () => {
  btClick()
})

function btClick() {  
  if (playState) {
    playState = false;
    iconBtnTl.play();
  } else {
    iconBtnTl.reverse();
    playState = true;
  }
}


// Dark/Light Mode Toggle
const toggleDark = document.getElementById('theme-switcher');

var darkMode_animate = gsap.timeline({defaults: {ease: 'power1.inOut'}, paused: true});
  darkMode_animate.to('#ray-line', {strokeDashoffset: 10,duration: 0.2})
  .to('#sun-icon', {morphSVG:'#moon-icon',duration:0.3}, '-=0.1');


// Listen for a click on the button 
toggleDark.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  darkMode_animate.reverse();
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    darkMode_animate.play();
  }
  localStorage.setItem("theme", theme);
});
