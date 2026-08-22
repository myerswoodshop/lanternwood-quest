(()=>{'use strict';
if(!document.getElementById('lanternwood-portal-theme-script')){const s=document.createElement('script');s.id='lanternwood-portal-theme-script';s.src='./portal-theme.js?v=1';document.head.appendChild(s)}
function addBossButtons(){
  const box=document.querySelector('.developer-buttons');
  if(!box)return;
  const buttons=[...box.querySelectorAll('button')];
  if(buttons[0]){
    const strong=buttons[0].querySelector('strong'),small=buttons[0].querySelector('small');
    if(strong)strong.textContent='LEVEL 2 BOSS';
    if(small)small.textContent='Shadow Warden';
  }
  if(buttons[1]){
    const strong=buttons[1].querySelector('strong'),small=buttons[1].querySelector('small');
    if(strong)strong.textContent='LEVEL 3 BOSS';
    if(small)small.textContent='Ember Warden + Fireball';
  }
  if(!box.querySelector('.dev-water-boss')){
    const b=document.createElement('button');
    b.className='dev-water-boss';
    b.innerHTML='<span>🌊</span><strong>LEVEL 4 BOSS</strong><small>Tidal Warden</small>';
    b.addEventListener('click',()=>{location.href='./water-depths/?devboss=1&v=portal-theme-1'});
    box.appendChild(b);
  }
}
const o=new MutationObserver(addBossButtons);o.observe(document.documentElement,{childList:true,subtree:true});addBossButtons();
})();