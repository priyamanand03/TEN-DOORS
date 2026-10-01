
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
function door5(){shell(experience(head(5,"Five Promises","Warm things. Sincere things. Things I mean."),`<div class="paper">${["I promise to keep showing up, even when life gets messy.","I promise to listen, not just wait for my turn to talk.","I promise to celebrate your little wins like they are enormous.","I promise that our stupid memories will always have a place in my heart.","I promise to keep choosing this friendship, again and again."].map((x,i)=>`<div class="promise"><b>Promise ${i+1}</b><p>${x}</p></div>`).join("")}</div><div class="panel" style="margin-top:18px"><div class="eyebrow">COUNTDOWN TO OCTOBER 10</div><div class="countdown" id="countdown"></div></div>`)); updateCountdown(); clearInterval(window.cd);window.cd=setInterval(updateCountdown,1000)}
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
async function door9Render(){let items=await galleryGet();let cards=items.map((x,i)=>`<button class="photo" onclick="lightbox(${i})"><img src="${URL.createObjectURL(x.blob)}" alt="${esc(x.title)}"></button>`).join("");return `<div class="gallery">${cards||'<div class="photo empty">No added memories yet.<br>Use ADD PHOTOS below.</div>'}</div>`}
async function door9(){shell(experience(head(9,"The Gallery","Our little gallery."),`<div class="panel"><div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px"><label class="btn primary">ADD PHOTOS<input id="photoInput" type="file" accept="image/*" multiple hidden></label></div><div id="galleryWrap"></div><p class="audio-note">Your added photos are stored in this browser only. The original bundled assets, when supplied, remain part of the website.</p></div>`));$("#photoInput").onchange=async e=>{for(const f of e.target.files){await galleryAdd(f)}door9()};$("#galleryWrap").innerHTML=await door9Render()}
async function lightbox(i){let items=await galleryGet();if(!items[i])return;let url=URL.createObjectURL(items[i].blob);app.insertAdjacentHTML("beforeend",`<div class="modal-back lightbox" id="lb" onclick="if(event.target.id==='lb')$('#lb').remove()"><div><img src="${url}" alt="${esc(items[i].title)}"><div class="actions" style="margin-top:12px"><button class="btn" onclick="$('#lb').remove()">CLOSE</button></div></div></div>`)}
function door10(){shell(experience(head(10,"HAPPY BIRTHDAY, SUAR","This one is all yours."),`<div class="birthday paper"><div class="eyebrow">OCTOBER 10, 2026</div><div class="big">HAPPY<br>BIRTHDAY,<br>SUAR</div><p class="muted">The final door.</p><button class="btn primary reveal" onclick="$('#finalLetter').classList.remove('hidden');this.remove()">REVEAL YOUR FINAL SURPRISE</button><div id="finalLetter" class="letter hidden"><p>I hope when you look back at these ten doors, you don't just remember the website. I hope you remember that someone sat down and thought about you — your laugh, your chaos, your kindness, your tiny habits, your memories, and all the ordinary moments that became special simply because they were ours.</p><p>I hope this next year gives you reasons to laugh until your stomach hurts, people who make you feel safe, moments you wish you could freeze, and a ridiculous number of reasons to be proud of the person you're becoming.</p><p>Thank you for being you. Thank you for being my person.</p><p>The end of the doors.<br><br>Not the end of us.<br><br>— gadha 🫶</p></div></div>`))}
renderIntro();
