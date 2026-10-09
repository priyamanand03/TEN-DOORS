
const TESTING_MODE = false;
const BIRTHDAY = new Date("2026-10-10T00:00:00+05:30");
const doors = [
 ["01","The Beginning","begin"],["02","Open Me","suar"],["03","20 Things","tweenty"],
 ["04","Pick One","choose"],["05","Five Promises","promisee"],["06","Whack Me","gadha"],
 ["07","Time Capsule","later"],["08","The Podcast","voice"],["09","The Gallery","memories"],["10","Birthday","birthday"]
];
const reasons = [
"The way you can turn the most ordinary moment into something worth remembering.",
"Your laugh — especially when you laugh so hard after ragebaiting me.",
"The way you understand my insecurities and reassure me every single time.",
"Your cute smile and charming face.",
"Your kindness,the way you take care of your sister,your friends and family.",
"How I can be completely stupid around you and never feel like I have to act cool.",
"Your random messages that somehow arrive exactly when I need  them and you illogical stories.",
"The fact that one conversation with you can completely change my mood.",
"How you remember tiny things I casually mentioned ages ago.",
"Your ability to make me laugh when I was very committed to being annoyed.",
"Your idgaf wala attitude .",
"How beautifully chaotic you can be.","Your stubborn little moments… yes, even those.",
"The way you make memories without even trying to.",
"How safe it feels to tell you things I wouldn't tell just anyone.",
"Your kindness, especially the kind you show when nobody is watching.",
"The ridiculous inside jokes that would make absolutely no sense to anyone else.",
"How somehow, even after all the teasing, you still manage to be one of my favorite people.",
"The person you are becoming — and the person I know you already are underneath everything.",
"Because out of all the people in this enormous world, somehow I got lucky enough to meet you."
];
const choices = [
["🌷","A LITTLE SWEETNESS","Something I love about you","Tummhara to hamko har baat hi sweet lagta haibut tum jab hamko ragebait karti ho hamko gay bolti ho aisa nahi hai ki mere passcomeback nahi hai but ham bolte nahi hai cuz koi na mera bezzati kar ke tumko khusi mil raha hai ye mere liye bout hai and i also like jab tum faltu jaisa sawal puchti ho jiska koi logic nahi hai aur sabse acha lagta hai mereko jab tum hamko apna bsf bolti ho."],
["🤫","TOP SECRET","Okay… don't tell anyone"," ummmm hamko laga nahi tha ki ham tumko ye bolenge but bol rahe hai ham kabhi kabhi hamara purana chats padhte hai ki kiaise ek random sa msg se start hua ye friendship aaj itna deep hai aur aaj hamlog best friends hai aur ye sab padh ke gadhe jaisa daath niakal ke haste hai isliye ham bolte hai ki mere chats boout important hai yaar ye sab padh ke ek alag hi sukkon milta hai bro ."],
["🥹","A MEMORY FROM GADHA","One of my favourite things about us","Tumhare sath mera sabse acha memory hai jab ham dono raat se subha tak nonstop baat text karte hai i just love talking to ya altrough hamlog faltu baat hi karte hai hamesaha aur behas karte hai gussa hote hai aur kabhi ham manate hai tumko aur kabhi ham gussa hote hai aur ham hi mante hai kyunki aap to devi ho na but i kinda like it aur yahi sab mere liye lifetime memories ban gaya hai."],
["💗","THIS ONE IS SERIOUS","What you mean to me","You became someone whose happiness genuinely matters to me. Someone I want to see happy, safe, loved and okay. Somehow you became my person without me even realizing when it happened aurye sab to tum janti hi ho ham to thousands times tumko ye sab bol chuke hai ki tum mere liye kya ho but still tumko merepe bharosa hi nahi hota hai aur tumko hamesha yahi lagta hai ki ham tumko chor denge but bro tum wo ho jiske life me hone na hone se bour fark karta hai aur mere life ke koi bhi important time me mereko tum mere sath chaiye ,love you, bro."]
];
const capsule = [
["Open me when you've had a bad day.","hey bbg why so sad be happy girl itna pretty face aur cute smile sad hone ke liye thodi hai.tumhare karan hi ham bhi hamseha smile karte rehte hai its not good ki ham smile kar rahe hai aur tum sad ho kya bacho ki tarrah rona dhona kar rahi ho (ik is baat pe aur gussa karogi tum)but yaar dont be sad knowing that apkke life me ek amazinng,cool,smart,funny 6.2 ka banda hai isliye dont be sad bbg agar abhi bhi acha nahi lag rha hai to just call me yaar (call hi karna)jaldi call karo mereko ."],
["Open me when you miss me.","Hi, idiot. I probably miss you too. Imagine gadha sitting beside you being annoying until you feel a little better. You are loved, even from far away altrough i know ki tum merko miss nahi hi karogi but agar kabhi ki bhi to hamko gali dene ke liye hi miss kar rahi hogi ya mereko marne ke liye but jis bhi cheez ke liye miss kar rahi ho i miss you tooooooo aur aur agar currently hamara baat nahi ho pa raha hai to jjust know ki mere dimag me abhi bhi bas tum hi chal rahi hogi aur agar abhi bhi hamara baat ho raha hai aur tum mereko ko chor ke nahi gayi ho to call karo na dhakkan."],
["Open me when you are depressd.","heyy!! bbg kyu depressed ho jayada overthink kar rahi ho kya hamesha hamko bolti ho jayada overthink na kariye aur ab khud wahi kar rahi ho dekho jo hona hota hai wo hota hi hai aur jo hota hai ache ke liye hota hai bas yahi soch ke aage badho ik ik bout silly line baat hai ye but agar tum apna 100% de kar bhi kisi cheez ko badal nahi paa rahi ho then it was never ment to be happen ye hona hi tha please jayada na socho aur agar future ka soch ke pareshan ho to uska bhi same logic hai apna 100% do agar phir bhi kuch nahi mile to uske apna destiny samj ke jane do."],
["Open me when you're angry at me.","Breathe first. Then breathe again. We can talk. You don't have to pretend you're not angry.so sorry devi jii i know mere hi karan gusaa ho aap aur agar ham kuch nahi bhi kiye hai to bhi sabke taraf se ham hi sorry bolte hai sorry sorry sorry ye mat socho ki pagal ho gaye hai bas ik ki apka gussa bout danger hota hai aur hamko apke gusse se bout dar lagta hai isliye gussa kam kar lijiye devi jii please ."],
["Open me when you are.","helo! remember me i am your hb look jo bhi soch ke apna diamg kharab kar rhi ho usko mat socho agar kisi pe gussa aa raha hai aur tum kuch nahi kar sakti ho to ham hai na call karo hamko (preferable)ya msg karohampe gussa karo cillao but aise akele mat raho. gar samjh nahi aa rha hai ki aage kya karna hai to ek baar apne dil se pucho whaht you truly wants in your life.agar phir bhi sad ho to music sun lo ya apka fav cheez pd dekh lo aur phir bhi mood theek nahi hua to ham hai na mere se baat karo lo  ."]
];
const beginning = `So… you actually opened it.

This isn't just one birthday present.

It's ten little pieces of me,
one for each day leading up to your birthday.

Some are sweet.
Some are ridiculous.
Some are probably unnecessary.
hmmm...to finally apka birthday month start ho gaya
tum manogi nahi but tumse jayada ham exited hai
tumhare birthday ke liye maybe ham utna nahi kar
paye jitna aap deserve karti ho but i swear ham 
apne side pe pura try karenge ki apka ye birthday
one the best birthday banane ka so again 
Happy upcoming Birthday 
But all of them are for you.

This is only the beginning.

There are nine more doors.`;
const letter2 = `For Suar,

I don't think you realize how much my life changed after I met you.

Before you came into my life, there were so many ordinary days. And then somehow, you appeared, and ordinary started feeling a little less ordinary.

You brought laughter into places that needed it. You gave me memories I didn't know I was going to make. You became someone I could talk to, annoy, laugh with, be stupid with, and somehow still feel completely understood by.

And honestly, I don't know exactly when it happened.

At some point, you stopped being just someone I knew.

You became my person.

Someone whose messages can change my entire mood. Someone whose happiness genuinely matters to me. Someone I want to be there for, not just on the good days, but on the horrible, messy, “I don't want to talk to anyone” days too.

You made my life softer.

Brighter.

A lot more fun.

And infinitely more beautiful.

I wish I could explain exactly how much I love you, but every time I try, words feel ridiculously small.

So I'll just say this:

I love you. More than I probably know how to explain.

And I'm incredibly, ridiculously, stupidly grateful that our paths crossed.

If I could go back and meet you all over again, knowing everything I know now…

I'd still choose you. Every single time.

— gadha 🫶`;

const $ = s => document.querySelector(s);
const app = $("#app");
const esc = s => String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function shell(content){app.innerHTML=`<main class="app">${content}<div class="grain"></div></main>`}
function back(){renderHall();}

function renderIntro(){
 shell(`<section class="screen center">
   <div class="eyebrow">for suar · by gadha</div><h1>TEN<br>DOORS</h1>
   <div class="intro-sub">A little journey for you.</div>
   <div class="intro-small">10 days · 10 doors · one very special birthday</div>
   <button class="btn primary" style="margin-top:30px" onclick="renderHall()">ENTER THE HALLWAY</button>
   <div class="intro-small" style="margin-top:50px">a slightly ridiculous amount of love · gadha</div>
 </section>`);
}
function renderHall(){
 let html=doors.map((d,i)=>`<button class="door available" onclick="openDoor(${i})"><span class="door-num">DOOR ${d[0]}</span><span class="door-name">${d[1]}</span><span class="door-lock">⌁ password protected</span></button>`).join("");
 shell(`<section class="screen"><div class="topbar"><div class="eyebrow">TEN DOORS</div><button class="btn" onclick="renderIntro()">EXIT</button></div>
 <div class="hallway"><div class="hall-head"><div class="eyebrow">a little journey for you</div><h2>The Hallway</h2><p class="muted">Ten doors. Ten little pieces of me.</p></div>
 <div class="doors">${html}</div><div class="hall-foot">testing mode is ON · date locks are bypassed for development</div></div></section>`);
}
function openDoor(i){
 const d=doors[i];
 app.insertAdjacentHTML("beforeend",`<div class="modal-back" id="modal"><form class="modal" onsubmit="unlock(event,${i})">
 <div class="eyebrow">DOOR ${d[0]}</div><h3>${d[1]}</h3><p class="muted">This door is waiting for you.</p>
 <input id="pass" type="password" autocomplete="off" aria-label="Password" placeholder="Enter password" autofocus>
 <div class="error" id="err"></div><div class="actions"><button type="button" class="btn" onclick="$('#modal').remove()">BACK</button><button class="btn primary">OPEN DOOR</button></div></form></div>`);
}
function unlock(e,i){
 e.preventDefault(); const input=$("#pass"), d=doors[i];
 if(input.value.trim().toLowerCase()!==d[2]){$("#err").textContent="Not quite, suar 👀";input.select();return}
 $("#modal").remove(); openExperience(i);
}
function experience(title,body){return `<section class="screen"><div class="topbar"><div class="eyebrow">TEN DOORS</div><button class="btn" onclick="back()">BACK TO HALLWAY</button></div><div class="experience">${title}${body}</div></section>`}

function openExperience(i){
 if(i===0) return door1(); if(i===1) return door2(); if(i===2) return door3(); if(i===3) return door4(); if(i===4) return door5(); if(i===5) return door6(); if(i===6) return door7(); if(i===7) return door8(); if(i===8) return door9(); if(i===9) return door10();
}
function head(n,t,sub){return `<div class="experience-head"><div class="eyebrow">DOOR ${String(n).padStart(2,"0")}</div><h2>${t}</h2><p class="muted">${sub||""}</p></div>`}
function door1(){shell(experience(head(1,"The Beginning","So… you actually opened it."),`<div class="paper"><div class="message">${esc(beginning)}</div><div class="voice"><audio class="audio" controls preload="metadata" src="assets/day1.mp3"></audio><div class="audio-note">Default personal recording — bundled with this website.</div></div></div>`))}
function door2(){shell(experience(head(2,"Open Me","Tap the envelope."),`<div class="paper center"><div id="env" style="font-size:110px;cursor:pointer" onclick="openLetter()">✉️</div><p class="muted">FOR SUAR</p><div id="letter" class="letter hidden">${esc(letter2)}</div></div>`))}
function openLetter(){$("#env").textContent="💌";$("#letter").classList.remove("hidden")}
function door3(){
 shell(experience(head(3,"20 Things I Love About You","Tap a card to reveal one reason."),`<div class="progress"><span id="rc">0</span> / 20 revealed</div><div class="grid20">${reasons.map((r,i)=>`<button class="flip" onclick="revealReason(this,${i})"><small>${String(i+1).padStart(2,"0")}</small><p>Tap to reveal</p></button>`).join("")}</div><div id="rfinal" class="panel hidden" style="margin-top:20px;text-align:center">And that's the thing, suar…<br><br>20 things is obviously not enough.<br><br>There are still a ridiculous number of reasons. I just ran out of card space. 🫶</div>`))
}
let revealed=0;
function revealReason(el,i){if(el.classList.contains("revealed"))return;el.classList.add("revealed");el.innerHTML=`<small>${String(i+1).padStart(2,"0")}</small><p>${esc(reasons[i])}</p>`;$("#rc").textContent=++revealed;if(revealed===20)$("#rfinal").classList.remove("hidden")}
function door4(){shell(experience(head(4,"Pick One","I have a few things I want to tell you… but you get to decide how you hear them."),`<div class="progress"><span id="cc">0</span> / 4 discovered</div><div class="choices">${choices.map((c,i)=>`<button class="choice" onclick="showChoice(${i},this)"><div class="emoji">${c[0]}</div><small class="eyebrow">${c[1]}</small><h3>${c[2]}</h3><p class="muted">Tap to discover</p></button>`).join("")}</div><div id="cfinal" class="panel hidden" style="margin-top:20px;text-align:center">You found everything.<br><br>Okay fine. One last thing.<br><br>I love you, idiot. 🫶</div>`))}
let discovered=new Set();
function showChoice(i,el){if(discovered.has(i))return;discovered.add(i);el.innerHTML=`<div class="eyebrow">${choices[i][1]}</div><h3>${choices[i][2]}</h3><p class="muted">${choices[i][3]}</p>`;$("#cc").textContent=discovered.size;if(discovered.size===4)$("#cfinal").classList.remove("hidden")}
function door5(){shell(experience(head(5,"Five Promises","Warm things. Sincere things. Things I mean."),`<div class="paper">${["I promise to stay with you and i will never evver leave you whatever happens whatever the situation is chaye tum khud bhi kyu na kaho i will be there for you kitna bhi hard times ho kitni bhi misunderstandings ho kitni bhi duriyan aaye hamre beech but ham kabhi apko nahi chaorenge jii.","I will alyas support you in every situation i will defend you infornt of anyone and tum murder bhi kar ke aaogi na to bhi ham tumhare sath mil ke body chpnayenge mai tumhare sath hamesha hai chaye sablog tumhare againt ho jaye but ham hameha tumharaa support karenge.","I will always respect you,i will respect your boundaries ,respect your goals,respects you prorities,respect your opinion,respect you thought and thinking.","I promise that my only priority will be you,no doubt mere life me bout se log aayenge jayenge but tumhare palce sabse uper hoga aur hamesha meree liye sabse pehle tum hi hogi noone willl ever replace you.","I pormise to love you always and unconditional no matter what either you scream at me or so same love or either throw a whole rock at me ,either you have long hair or short hair,either you are with makeup or without makeuup, either you are at your peak or at your lowest ,either you are sun tanned or milky white in color either you are pretty or ugly i will love your every side .every emotion,every shade evry behavour of yours for now and for always."].map((x,i)=>`<div class="promise"><b>Promise ${i+1}</b><p>${x}</p></div>`).join("")}</div><div class="panel" style="margin-top:18px"><div class="eyebrow">COUNTDOWN TO OCTOBER 10</div><div class="countdown" id="countdown"></div></div>`)); updateCountdown(); clearInterval(window.cd);window.cd=setInterval(updateCountdown,1000)}
function updateCountdown(){const el=$("#countdown");if(!el)return;let ms=Math.max(0,BIRTHDAY-Date.now()),s=Math.floor(ms/1000);let d=Math.floor(s/86400);s%=86400;let h=Math.floor(s/3600);s%=3600;let m=Math.floor(s/60);s%=60;el.innerHTML=[["DAYS",d],["HOURS",h],["MINUTES",m],["SECONDS",s]].map(x=>`<div class="time"><b>${String(x[1]).padStart(2,"0")}</b><span>${x[0]}</span></div>`).join("")}
function door6(){shell(experience(head(6,"Whack Me","30 seconds. Gadha keeps moving. Hit him if you can."),`<div class="scorebar"><div>SCORE<br><b id="score">0</b></div><div>MISSES<br><b id="miss">0</b></div><div>TIME<br><b id="gameTime">30</b></div></div><div class="game" id="game" onclick="missGame(event)"><button class="target" id="target" onclick="hitGame(event)"><img src="assets/gadha.png" alt="gadha"></button></div><div id="result" class="panel" style="margin-top:15px;text-align:center">Ready? Catch him!</div>`));startGame()}
let gameTimer,moveTimer,gameRunning=false,score=0,misses=0;
function placeTarget(){const g=$("#game"),t=$("#target");if(!g||!t)return;const maxX=Math.max(0,g.clientWidth-t.offsetWidth),maxY=Math.max(0,g.clientHeight-t.offsetHeight);t.style.left=Math.random()*maxX+"px";t.style.top=Math.random()*maxY+"px"}
function moveTarget(){if(!gameRunning)return;const g=$("#game"),t=$("#target");if(!g||!t)return;const maxX=Math.max(0,g.clientWidth-t.offsetWidth),maxY=Math.max(0,g.clientHeight-t.offsetHeight);t.style.left=Math.random()*maxX+"px";t.style.top=Math.random()*maxY+"px"}
function showLaugh(e){const g=$("#game");if(!g)return;const emoji=document.createElement("span");emoji.className="laugh-emoji";emoji.textContent="😂";const rect=g.getBoundingClientRect();emoji.style.left=Math.min(Math.max(8,e.clientX-rect.left-12),rect.width-32)+"px";emoji.style.top=Math.min(Math.max(8,e.clientY-rect.top-18),rect.height-42)+"px";g.appendChild(emoji);setTimeout(()=>emoji.remove(),700)}
function startGame(){score=0;misses=0;gameRunning=true;$("#score").textContent=0;$("#miss").textContent=0;placeTarget();let left=30;$("#gameTime").textContent=left;clearInterval(gameTimer);clearInterval(moveTimer);moveTimer=setInterval(moveTarget,550);gameTimer=setInterval(()=>{left--;$("#gameTime").textContent=left;if(left<=0){clearInterval(gameTimer);clearInterval(moveTimer);gameRunning=false;$("#result").textContent=score>=25?"Gadha has been DESTROYED.":score>=12?"Gadha barely survived.":"Gadha lives another day."}},1000)}
function hitGame(e){e.stopPropagation();if(!gameRunning)return;score++;$("#score").textContent=score;moveTarget()}
function missGame(e){if(!gameRunning||e.target!==$("#game"))return;misses++;$("#miss").textContent=misses;showLaugh(e);moveTarget()}
function door7(){shell(experience(head(7,"Time Capsule","Open me when…"),`<div class="progress"><span id="caps">0</span> / 5 opened</div><div class="capsules">${capsule.map((x,i)=>`<button class="capsule" onclick="openCapsule(${i},this)"><div class="eyebrow">${String(i+1).padStart(2,"0")}</div><h3>${x[0]}</h3><p class="muted">Tap to open</p></button>`).join("")}</div>`))}
let capsOpened=new Set();
function openCapsule(i,el){if(capsOpened.has(i))return;capsOpened.add(i);el.classList.add("open");el.innerHTML=`<div class="eyebrow">${String(i+1).padStart(2,"0")}</div><h3>${capsule[i][0]}</h3><p>${capsule[i][1]}</p>`;$("#caps").textContent=capsOpened.size}
function door8(){shell(experience(head(8,"The Podcast","Approximately 10–15 minutes of gadha talking about one of her favourite people."),`<div class="paper"><div class="eyebrow">EPISODE 08 / FOR SUAR ONLY</div><h3 style="margin:10px 0 20px">Things I probably should have told you sooner.</h3><audio class="audio" controls preload="metadata" src="assets/radio_show.mp3"></audio><p class="muted">Put your headphones on. Get comfortable. And listen all the way through if you can.</p>${[["Before you press play","0:00"],["How you became my person","1:00"],["The little things","3:00"],["The memories","5:30"],["What I hope you know","8:30"],["The birthday part","11:30"]].map(x=>`<div class="chapter"><button>${x[0]}</button><span>${x[1]}</span></div>`).join("")}</div>`))}
async function db(){return new Promise((res,rej)=>{let r=indexedDB.open("ten-doors",1);r.onupgradeneeded=()=>{let d=r.result;if(!d.objectStoreNames.contains("gallery"))d.createObjectStore("gallery",{keyPath:"id",autoIncrement:true})};r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function galleryGet(){try{let d=await db();return new Promise((res,rej)=>{let r=d.transaction("gallery").objectStore("gallery").getAll();r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}catch{return[]}}
async function galleryAdd(file){let d=await db();return new Promise((res,rej)=>{let r=d.transaction("gallery","readwrite").objectStore("gallery").add({blob:file,title:file.name,caption:"",voice:null});r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
const door9Photos=[
 {src:"assets/photo1.jpg",title:"THE BEGINNING",caption:"Meri sundar bestie.",voice:"assets/voice-note-01.mp3"},
 {src:"assets/photo2.jpg",title:"THE CHAOS",caption:"kitni pretty ho aap devi jii.",voice:"assets/voice-note-02.mp3"},
 {src:"assets/photo3.jpg",title:"THE LITTLE THINGS",caption:"awwww my kuchu puchuuu.",voice:"assets/voice-note-03.mp3"},
 {src:"assets/photo4.jpg",title:"MY PERSON",caption:"haye ye payri pari ankhe.",voice:"assets/voice-note-04.mp3"},
 {src:"assets/photo5.jpg",title:"THE LATE NIGHTS",caption:"absolute banger ho aaappp.",voice:"assets/voice-note-05.mp3"},
 {src:"assets/photo6.jpg",title:"THE IDIOTS",caption:"ufff ye apki adyayen hame to pagal hi bana degi.",voice:"assets/voice-note-06.mp3"},
 {src:"assets/photo7.jpg",title:"THE LITTLE COMFORTS",caption:"awww my cute kajukatli kitna acha muh banati hoo.",voice:"assets/voice-note-07.mp3"},
 {src:"assets/photo8.jpg",title:"THIS VERSION OF US",caption:"hayeee ye adayen.",voice:"assets/voice-note-08.mp3"},
 {src:"assets/photo9.jpg",title:"A FAVOURITE MEMORY",caption:"brooo kitni pretty ho aaap.",voice:"assets/voice-note-09.mp3"},
 {src:"assets/photo10.jpg",title:"OUR KIND OF FUN",caption:"bilkul heroine lag rahi ho aap to.",voice:"assets/voice-note-10.mp3"},
 {src:"assets/photo11.jpg",title:"THE SAFE PLACE",caption:"hayeee mera to kam hi khatam ho gaya.",voice:"assets/voice-note-11.mp3"},
 {src:"assets/photo12.jpg",title:"SMALL MOMENTS",caption:"ufff kahan se lati ho itna cuteness.",voice:"assets/voice-note-12.mp3"},
 {src:"assets/photo13.jpg",title:"YOU, BEING YOU",caption:"simple and still pretty .",voice:"assets/voice-note-13.mp3"},
 {src:"assets/photo14.jpg",title:"STILL LAUGHING",caption:"ufff ye aankhe hame to mar hi dalegi.",voice:"assets/voice-note-14.mp3"},
 {src:"assets/photo15.jpg",title:"A LITTLE THANK YOU",caption:"ohhoo meri 80s ke heroine.",voice:"assets/voice-note-15.mp3"},
 {src:"assets/photo16.jpg",title:"MORE TO COME",caption:"cutiepie.",voice:"assets/voice-note-16.mp3"},
 {src:"assets/photo17.jpg",title:"A THANK YOU",caption:".",voice:"assets/voice-note-17.mp3"},
 {src:"assets/photo18.jpg",title:"A THANK YOU",caption:".",voice:"assets/voice-note-19.mp3"},
 {src:"assets/photo19.jpg",title:"A THANK YOU",caption:".",voice:"assets/voice-note-20.mp3"},
 {src:"assets/photo20.jpg",title:"A THANK YOU",caption:".",voice:"assets/voice-note-21.mp3"},
 {src:"assets/photo21.jpg",title:"TO BE CONTINUED",caption:"ye wala khali cuz tum photo beajti hi nahi ho isliye. ♡",voice:"assets/voice-note-22.mp3",spotify:true}
];
// Replace this with the URL of the playlist made for Suar.
const door9SpotifyUrl="https://open.spotify.com/playlist/2Z2fyGfm9ghJQRW3ehfz0G?si=1970385980c4437d&pt=b585cc195b5b4dc17e97d7686ffc61c6";
let door9Index=0;

function door9(){
 door9Index=0;
 shell(`<section class="door9-fullscreen" id="door9Fullscreen" aria-label="Door 9 memory gallery">
   <img class="door9-full-image" id="door9Image" src="${door9Photos[0].src}" alt="Memory 1 for Suar">
   <div class="door9-full-wash"></div>
   <div class="door9-full-top">
     <button class="btn door9-back" onclick="back()">← HALLWAY</button>
     <div class="eyebrow">DOOR 09 · FOR SUAR</div>
     <div class="door9-counter"><span id="door9Current">01</span> / <span id="door9Total">17</span></div>
   </div>
   <button class="door9-full-arrow door9-full-prev" onclick="door9Move(-1)" aria-label="Previous photo">‹</button>
   <button class="door9-full-arrow door9-full-next" onclick="door9Move(1)" aria-label="Next photo">›</button>
   <div class="door9-full-bottom">
     <div class="door9-full-copy">
       <div class="eyebrow" id="door9Title">THE BEGINNING</div>
       <p id="door9Caption">Funny how one little moment became the beginning of all of this.</p>
       <a class="btn primary door9-spotify hidden" id="door9Spotify" href="${door9SpotifyUrl}" target="_blank" rel="noopener noreferrer">♫ OUR LITTLE PLAYLIST ↗</a>
     </div>
     <div class="door9-full-player" id="door9Player">
       <div class="door9-player-label"><span class="eyebrow">A LITTLE VOICE NOTE</span><span id="door9AudioState">JUST FOR YOU</span></div>
       <div class="door9-player-main">
         <button class="door9-play" id="door9Play" onclick="toggleDoor9Audio()" aria-label="Play voice note">▶</button>
         <div class="door9-wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
         <div class="door9-time"><span id="door9Elapsed">0:00</span><span id="door9Duration">0:00</span></div>
       </div>
       <div class="door9-range-wrap"><input id="door9Range" type="range" min="0" max="100" value="0" step="0.1" oninput="seekDoor9Audio(this.value)" aria-label="Voice note progress"></div>
       <audio id="door9Audio"controls preload="none" src="${door9Photos[0].voice}"></audio>
     </div>
     <div class="door9-full-progress"><div class="door9-full-progress-line"><i id="door9ProgressBar"></i></div><span>Swipe or use arrows to revisit each memory</span></div>
   </div>
 </section>`);
 initDoor9Gallery();
 initDoor9Audio();
}

function initDoor9Gallery(){
 const stage=$("#door9Fullscreen");
 if(!stage)return;
 $("#door9Total").textContent=String(door9Photos.length).padStart(2,"0");
 updateDoor9Gallery();
 stage.addEventListener("keydown",e=>{
   if(e.key==="ArrowLeft")door9Move(-1);
   if(e.key==="ArrowRight")door9Move(1);
 });
 let touchStartX=0;
 stage.addEventListener("touchstart",e=>{touchStartX=e.changedTouches[0].screenX},{passive:true});
 stage.addEventListener("touchend",e=>{
   const delta=e.changedTouches[0].screenX-touchStartX;
   if(Math.abs(delta)>45)door9Move(delta<0?1:-1);
 },{passive:true});
}

function door9Go(index){
 const next=Math.max(0,Math.min(door9Photos.length-1,index));
 if(next===door9Index)return;
 const audio=$("#door9Audio");
 if(audio){audio.pause();audio.currentTime=0;}
 door9Index=next;
 updateDoor9Gallery();
}
function door9Move(direction){door9Go(door9Index+direction)}

function updateDoor9Gallery(){
 const p=door9Photos[door9Index],img=$("#door9Image"),audio=$("#door9Audio");
 if(!p||!img)return;
 img.classList.add("changing");
 window.setTimeout(()=>{if($("#door9Image"))$("#door9Image").classList.remove("changing")},180);
 img.src=p.src;img.alt=`${p.title} — memory ${door9Index+1} for Suar`;
 img.onerror=()=>{img.style.opacity="0";$("#door9Caption").textContent="Add this photo at "+p.src+" to complete this memory.";};
 img.onload=()=>{img.style.opacity="1"};
 $("#door9Title").textContent=p.title;
 $("#door9Caption").textContent=p.caption;
 $("#door9Current").textContent=String(door9Index+1).padStart(2,"0");
 $("#door9ProgressBar").style.width=`${((door9Index+1)/door9Photos.length)*100}%`;
 const spotify=$("#door9Spotify");
 spotify.classList.toggle("hidden",!p.spotify);
 if(p.spotify)spotify.href=door9SpotifyUrl;
 if(audio){
   audio.src=p.voice;audio.load();
   $("#door9Elapsed").textContent="0:00";$("#door9Duration").textContent="0:00";$("#door9Range").value=0;
   $("#door9Play").textContent="▶";$("#door9Player").classList.remove("playing");
   $("#door9AudioState").textContent="JUST FOR YOU";
 }
 $("#door9Fullscreen")?.focus({preventScroll:true});
}

function toggleDoor9Audio(){
 const audio=$("#door9Audio");
 if(!audio)return;
 if(audio.paused)audio.play().catch(()=>{$("#door9AudioState").textContent="ADD VOICE NOTE FILE"});
 else audio.pause();
}
function seekDoor9Audio(value){
 const audio=$("#door9Audio");
 if(audio&&audio.duration)audio.currentTime=(Number(value)/100)*audio.duration;
}
function formatDoor9Time(seconds){
 if(!Number.isFinite(seconds))return "0:00";
 return `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,"0")}`;
}
function initDoor9Audio(){
 const audio=$("#door9Audio");if(!audio)return;
 audio.onloadedmetadata=()=>{$("#door9Duration").textContent=formatDoor9Time(audio.duration)};
 audio.ontimeupdate=()=>{$("#door9Elapsed").textContent=formatDoor9Time(audio.currentTime);if(audio.duration)$("#door9Range").value=(audio.currentTime/audio.duration)*100};
 audio.onplay=()=>{$("#door9Play").textContent="Ⅱ";$("#door9Player")?.classList.add("playing");$("#door9AudioState").textContent="PLAYING"};
 audio.onpause=()=>{$("#door9Play").textContent="▶";$("#door9Player")?.classList.remove("playing");if(audio.currentTime!==0)$("#door9AudioState").textContent="PAUSED"};
 audio.onended=()=>{$("#door9Play").textContent="▶";$("#door9AudioState").textContent="NOTE COMPLETE"};
 audio.onerror=()=>{$("#door9AudioState").textContent="ADD THIS VOICE NOTE"};
}

function door10(){
 const stars=[
  {id:1,kind:"memory",title:"THE BEGINNING",prompt:"A little reminder of where this all started.",text:"Every story has a beginning. Ours started with something small and somehow became ten doors, countless conversations, ridiculous arguments, and a friendship I never want to lose."},
  {id:2,kind:"question",title:"OPEN ME",prompt:"What do I call you?",answers:["suar"],text:"Correct. Obviously. Suar. The name that somehow became one of my favourite names to say."},
  {id:3,kind:"memory",title:"20 THINGS",prompt:"Remember this?",text:"Twenty reasons were never going to be enough. I could keep writing them and still find another reason tomorrow."},
  {id:4,kind:"question",title:"PICK ONE",prompt:"What do I call our friendship?",answers:["best friend","bsf","bestfriends","bestfriend"],text:"Exactly. Somehow, somewhere along the way, you became my best friend."},
  {id:5,kind:"memory",title:"FIVE PROMISES",prompt:"One promise worth keeping.",text:"Whatever happens, whatever the distance or the misunderstandings, I want you to know that I meant those promises. You matter to me."},
  {id:6,kind:"question",title:"WHACK ME",prompt:"What ridiculous name does your gadha use for himself?",answers:["gadha"],text:"Correct. The gadha has been identified. Unfortunately, he is still here."},
  {id:7,kind:"memory",title:"TIME CAPSULE",prompt:"A message from the present.",text:"One day we'll look back at this version of us and laugh at how dramatic, stupid, chaotic and happy we could be. I hope we still remember it all."},
  {id:8,kind:"memory",title:"THE PODCAST",prompt:"Things I probably should have told you sooner.",text:"There are things that are easier to say when nobody is interrupting, laughing, or ragebaiting. But the important part is simple: I'm really glad I met you."},
  {id:9,kind:"memory",title:"THE GALLERY",prompt:"One last memory to keep.",text:"Photos freeze moments. They don't freeze the feeling. That's why the little ordinary moments with you matter so much to me."}
 ];
 shell(experience(head(10,"The Stars Know","You made it through all ten doors. Now find what is waiting in the stars."),
  `<div class="constellation-wrap">
    <div class="constellation-intro" id="starIntro">
      <div class="eyebrow">THE FINAL DOOR</div><h3>Somewhere among these stars are memories.</h3><p class="muted">Somewhere is the final message.</p>
    </div>
    <div class="constellation" id="constellation" aria-label="Interactive constellation">
      <div class="star-field" aria-hidden="true"></div>
      ${stars.map(s=>`<button class="constellation-star" id="star-${s.id}" style="--x:${starPositions[s.id-1][0]}%;--y:${starPositions[s.id-1][1]}%" onclick="openStar(${s.id})" aria-label="Star ${s.id}"><span></span><small>${String(s.id).padStart(2,"0")}</small></button>`).join("")}
      <button class="constellation-star final-star locked" id="star-10" style="--x:50%;--y:50%" onclick="openFinalStar()" aria-label="Final star locked"><span>✦</span><small>10</small></button>
      <div class="constellation-lines" id="constellationLines"></div>
    </div>
    <div class="star-progress"><span id="starCount">0</span> / 9 stars discovered</div>
    <div class="star-hint" id="starHint"><span class="eyebrow">LOOK CLOSER</span><p>Every star has something waiting for you.</p></div>
    <div class="star-complete hidden" id="starComplete"><div class="eyebrow">THE CONSTELLATION IS COMPLETE</div><h3>You found them all.</h3><p class="muted">But there is still one star left.</p><button class="btn primary" onclick="unlockFinalStar()">UNLOCK THE FINAL STAR</button></div>
    <div class="star-reveal hidden" id="starReveal"><div class="eyebrow" id="starRevealTitle"></div><h3 id="starRevealHeading"></h3><p id="starRevealText"></p><div id="starQuestion" class="star-question hidden"><input id="starAnswer" type="text" autocomplete="off" placeholder="Your answer..." aria-label="Your answer"><div class="error" id="starError"></div><button class="btn primary" onclick="checkStarAnswer()">UNLOCK STAR</button></div><button class="btn" id="closeStar" onclick="closeStarReveal()">BACK TO THE STARS</button></div>
    <div class="final-star-reveal hidden" id="finalReveal"><div class="eyebrow">THE LAST STAR</div><h3>Maybe the stars didn't know the answers.</h3><p>Maybe you did.</p><div class="final-message"><span>HAPPY BIRTHDAY,</span><strong>SUAR</strong><small>❤️</small></div><p class="final-note">Thank you for walking through all ten doors.</p><p class="final-note">Some doors close. Some memories stay.</p><div class="actions" style="justify-content:center;margin-top:25px"><button class="btn primary" onclick="showDoor10Letter()">OPEN ONE LAST MESSAGE</button><button class="btn" onclick="back()">RETURN TO THE HALLWAY</button></div></div>
    <div id="door10Letter" class="letter panel hidden"><div class="eyebrow">FOR SUAR</div><p>I hope when you look back at these ten doors, you don't just remember the website. I hope you remember that someone sat down and thought about you — your laugh, your chaos, your kindness, your tiny habits, your memories, and all the ordinary moments that became special simply because they were ours.</p><p>I hope this next year gives you reasons to laugh until your stomach hurts, people who make you feel safe, moments you wish you could freeze, and a ridiculous number of reasons to be proud of the person you're becoming.</p><p>Thank you for being you. Thank you for being my person.</p><p>The end of the doors.<br><br>Not the end of us.<br><br>— gadha 🫶</p></div>
  </div>`));
 setupDoor10Stars(stars);
}
const starPositions=[[18,28],[37,16],[61,24],[82,35],[25,52],[50,67],[76,58],[34,82],[67,84]];
let door10Stars=[];let discoveredStars=new Set();let activeStarId=null;
function setupDoor10Stars(stars){door10Stars=stars;discoveredStars=new Set();activeStarId=null;requestAnimationFrame(drawConstellationLines)}
function drawConstellationLines(){const lines=$("#constellationLines");if(!lines)return;const pairs=[[1,2],[2,3],[3,4],[1,5],[5,6],[6,7],[5,8],[8,9],[7,9]];lines.innerHTML=pairs.map(pair=>{const a=starPositions[pair[0]-1],b=starPositions[pair[1]-1];return `<span class="constellation-line" style="left:${a[0]}%;top:${a[1]}%;width:${Math.hypot(b[0]-a[0],b[1]-a[1])}%;transform:rotate(${Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI}deg);opacity:${discoveredStars.has(pair[0])&&discoveredStars.has(pair[1])?1:0}"></span>`}).join("")}
function openStar(id){const star=door10Stars.find(x=>x.id===id);if(!star)return;activeStarId=id;$("#starRevealTitle").textContent=`STAR ${String(id).padStart(2,"0")} · ${star.title}`;$("#starRevealHeading").textContent=star.prompt;$("#starRevealText").textContent=star.kind==="memory"?star.text:"";$("#starError").textContent="";$("#starAnswer").value="";$("#starQuestion").classList.toggle("hidden",star.kind!=="question");$("#starReveal").classList.remove("hidden");$("#starHint").classList.add("hidden");if(star.kind==="question")setTimeout(()=>$("#starAnswer")?.focus(),100);else completeStar(id)}
function checkStarAnswer(){const star=door10Stars.find(x=>x.id===activeStarId);if(!star)return;const answer=$("#starAnswer").value.trim().toLowerCase().replace(/[^a-z0-9 ]/g,"");const correct=star.answers.some(x=>answer===x||answer.includes(x));if(!correct){$("#starError").textContent="Not quite… think about our doors 👀";$("#starAnswer").select();return}$("#starRevealText").textContent=star.text;$("#starQuestion").classList.add("hidden");completeStar(activeStarId)}
function completeStar(id){if(!discoveredStars.has(id)){discoveredStars.add(id);const star=$("#star-"+id);if(star)star.classList.add("discovered");$("#starCount").textContent=discoveredStars.size}drawConstellationLines();if(discoveredStars.size===9){$("#starComplete").classList.remove("hidden");$("#starHint").classList.add("hidden")}}
function closeStarReveal(){$("#starReveal")?.classList.add("hidden");$("#starHint")?.classList.remove("hidden")}
function unlockFinalStar(){if(discoveredStars.size<9)return;$("#starComplete")?.classList.add("hidden");const final=$("#star-10");final.classList.remove("locked");final.classList.add("unlocked");final.setAttribute("aria-label","Final star unlocked");final.querySelector("small").textContent="✦";$("#starHint").classList.remove("hidden");$("#starHint").innerHTML=`<span class="eyebrow">THE FINAL STAR IS WAITING</span><p>You've found the memories. Now answer one last thing.</p>`}
function openFinalStar(){const final=$("#star-10");if(!final||final.classList.contains("locked"))return;$("#starHint").classList.add("hidden");$("#starReveal").classList.add("hidden");$("#finalReveal").classList.remove("hidden");$("#constellation").classList.add("complete");setTimeout(()=>$("#finalReveal").scrollIntoView({behavior:"smooth",block:"center"}),100)}
function showDoor10Letter(){$("#door10Letter").classList.remove("hidden");$("#door10Letter").scrollIntoView({behavior:"smooth",block:"center"})}

renderIntro();
