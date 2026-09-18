function setViewportHeight(){const h=Math.round(window.visualViewport?.height||window.innerHeight||document.documentElement.clientHeight);if(h>0)document.documentElement.style.setProperty('--app-height',h+'px')}
export function lockMobileZoom(){
  setViewportHeight();
  window.addEventListener('resize',setViewportHeight,{passive:true});
  window.visualViewport?.addEventListener('resize',setViewportHeight,{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(setViewportHeight,120),{passive:true});
  let lastTouchEnd=0;
  document.addEventListener('touchend',e=>{const now=Date.now();if(now-lastTouchEnd<=300)e.preventDefault();lastTouchEnd=now},{passive:false});
  document.addEventListener('touchmove',e=>{if(e.touches?.length>1)e.preventDefault()},{passive:false});
  document.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false});
  document.addEventListener('gesturechange',e=>e.preventDefault(),{passive:false});
  document.addEventListener('gestureend',e=>e.preventDefault(),{passive:false});
  document.addEventListener('dblclick',e=>e.preventDefault(),{passive:false});
}