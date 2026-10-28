'use strict';
(()=>{
const native=document.querySelector('#video'),mount=document.querySelector('#spotifyPlayer'),host=document.querySelector('#spotifyHost'),listeners={},uri='spotify:episode:5tarL1eneuB19jjoGt87eM';
let controller=null,local=false,ready=false,time=0,duration=window.BUYX_PLAYER.duration,paused=true,queuedPlay=false,target=0,seekingTo=null,lastSeekAt=0;
function emit(name){for(const fn of listeners[name]||[])fn();}
const media={get readyState(){return local?native.readyState:ready?1:0;},get duration(){return local?native.duration:duration;},get paused(){return local?native.paused:paused;},get currentTime(){return local?native.currentTime:time;},set currentTime(t){if(local){native.currentTime=t;return;}target=t;time=t;seekingTo=t;lastSeekAt=Date.now();if(ready&&controller)controller.seek(Math.floor(t));},set src(url){controller?.pause();local=true;host.hidden=true;native.hidden=false;native.src=url;},addEventListener(name,fn){(listeners[name]??=[]).push(fn);},pause(){if(local){native.pause();return;}queuedPlay=false;controller?.pause();paused=true;},play(){if(local)return native.play();queuedPlay=true;if(ready&&controller){controller.play();queuedPlay=false;}return Promise.resolve();}};
window.BUYX_MEDIA=media;
for(const name of ['loadedmetadata','timeupdate','play','error'])native.addEventListener(name,()=>{if(local)emit(name);});
// Same command/event protocol as Spotify's published iFrame API, bound to the static official embed.
function send(command,extra={}){mount.contentWindow.postMessage({command,...extra},'https://open.spotify.com');}
controller={seek:t=>send('seek',{timestamp:t}),play:()=>send('play'),pause:()=>send('pause')};
window.addEventListener('message',e=>{
 if(e.origin!=='https://open.spotify.com'||e.source!==mount.contentWindow||local)return;
 if(e.data?.type==='ready'){
  ready=true;send('load_complete_ack');controller.seek(Math.floor(target));emit('loadedmetadata');if(queuedPlay){queuedPlay=false;controller.play();}
 }else if(e.data?.type==='playback_started'){
  if(seekingTo!==null)controller.seek(Math.floor(seekingTo));
 }else if(e.data?.type==='playback_update'){
  const d=e.data.payload;if(!d||!Number.isFinite(d.position))return;
  if(d.duration>0)duration=d.duration/1000;const observed=d.position/1000;const started=paused&&!d.isPaused;paused=d.isPaused;if(seekingTo!==null&&Math.abs(observed-seekingTo)>2.5){if(!paused&&!d.isBuffering&&Date.now()-lastSeekAt>750){lastSeekAt=Date.now();controller.seek(Math.floor(seekingTo));}return;}seekingTo=null;time=observed;if(started)emit('play');emit('timeupdate');
 }else if(e.data?.type==='error')emit('error');
});
})();
