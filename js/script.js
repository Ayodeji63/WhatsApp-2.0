// ====== Selection ====== 
const Chats = document.querySelector('.friends'),
        mainContent = document.querySelector('main'),
        aside = document.querySelector('aside'),
        recentUpdate = document.querySelector('.recentUpdates'),
        viewUpdate = document.querySelector('.viewedUpdates'),
        pageBody = document.querySelector('body'),
        navbar = document.querySelectorAll('.tab-btn'),
        section = document.querySelectorAll('section')
        moon = document.querySelectorAll('.moon'),
        sunElement = document.querySelectorAll('.sun'),
        Body = document.querySelector('body');


  /********** Message Array Storage ****** */
  const Message = ['Hello There', 'How was your night', 'Have you eaten', 'Hello Baby', 'na ogun go kill you', 'Are you free today', 'send me money', 'Who is your baby', 'quite good and yours', 'dollop-head', 'bucket-head', 'fuck off', 'splendid', 'how is your day going', 'good'];
/********* Event  ********** */ 
let ChatItem = chats;
let value;
let chatBody;
let chatInput;
let typing;
let friendMess;
let arrowIcon;
let bxFont;
let objIcon;
let sendBtn;




/********* Event Listeners ********** */ 
window.addEventListener('load', () => {
   displayChatItem(ChatItem);
   showStatus(recent);
   showviewStatus(viewed) 
   screeWidth();
});
pageBody.addEventListener('click', (e) => {
  changeactive(e)
})


// document.addEventListener('keydown', (e) => {
//   if (e.code ==="Enter") {
//     createSent(chatInput.value, getTime());
//     chatInput.value = "";
//     createReply(randomMess(), getTime());
//   }

// });





// moon.addEventListener('click', () => {
//   Body.classList.add('dark');
//   sun.classList.remove('hidden');
//   moon.classList.add('hidden')
// });
moon.forEach(mun => {
  mun.addEventListener('click', () => {
    Body.classList.add('dark');
    sunElement.forEach(sun => {
      sun.classList.remove("hidden");
    })
    moon.forEach(mun => {
      mun.classList.add("hidden")
    })
  })
})

sunElement.forEach(sun => {
  sun.addEventListener("click", () => {
    Body.classList.remove('dark');
    sunElement.forEach(sun => {
      sun.classList.add("hidden");
      moon.forEach(mun => {
        mun.classList.remove("hidden")
      })
    })
  })
})



// ======== Functions ======= 
function displayMessage(forms) {
  forms.forEach(form => {
    form.addEventListener('click', (e) => {
      let current = e.currentTarget.id;
      
      const displayName = chats.map(chat => {
        if (current == chat.id) {
        return ` <div class="chat-content">
        <div class="chat-header">
            <div class="person">
            <div class="arrow">
            <i class='bx bx-arrow-back'>bc</i>
        </div>
            <div class="img-div">
                <img src="${chat.img}" alt="">
            </div>
            <div class="name">
                <h4>${chat.name}</h4>
                <p></p>
            </div>
        </div>
        <div>
        <i class='bx bxs-video'></i>
        <i class='bx bxs-phone'></i>
        <i class='bx bx-dots-vertical-rounded'></i>
        </div>
        </div>
        
        
        <div class="chat-body">

        </div>
       

        <div class="chat-input">
            <div class="icons">
            <i class='bx bx-smile'></i>
            <i class='bx bx-paperclip'></i>
            </div>
            <div class="textarea">
             <input type="text" placeholder="Type a message">
            </div>
            <div class="mic-icon">
            <i class='bx bxs-send'></i>
            </div>
        </div>
    </div>`;
   }
      }).join("");
       mainContent.innerHTML = displayName;
       const Body = document.querySelector('.chat-body'),
        Input = document.querySelector('.textarea input'),
       replyBody = document.querySelector('.reply'),
       pageText = document.querySelector('.name p'),
       arrow = document.querySelector('.arrow'),
       icon = document.querySelectorAll('.obj');
       
      sendBtn = document.querySelector('.mic-icon');
    
       
       chatBody = Body;
       chatInput = Input;
       typing = pageText;
       objIcon = icon;
       arrow.addEventListener('click', showMenu)

       sendBtn.addEventListener('click', () => {
        createSent(chatInput.value, getTime());
          chatInput.value = "";
          createReply(randomMess(), getTime());
      })
      
    })
   
  })

 }


 function chooseMess() {
  if (chatInput.value == "hi") {
    console.log("hello");
  }
}

chooseMess();


function getTime() {
  const tempDate = new Date();
const hours = tempDate.getHours();
let meridian; 
if (hours > 12) {
  meridian = 'PM';
} else {
  meridian = 'AM'
}
const minute = tempDate.getMinutes();
const time = hours + ':' + minute + meridian;
return time;
}

function randomMess() {
  let randomIndex = Math.floor(Math.random() * Message.length);
  return Message[randomIndex];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function displayChatItem(ChatItem) {
    let displayContent = ChatItem.map((chat) => {
      return`      <div class="single-item form" id = "${chat.id}">
      <div class="single-chat">
        <div class="img-div">
          <img src="${chat.img}" alt="">
        </div>
          <div class="single-text">             
              <h4 class="name">${chat.name}</h4>
              <p>${chat.text}</p>
          </div>
          
         <div class="date"> <p class="date">${chat.date}</p></div>
          
      </div>
  </div>`
      ; 
    })
    displayContent = displayContent.join("");
    Chats.innerHTML = displayContent;
    const forms = document.querySelectorAll('.form');
    displayMessage(forms);
    friendMess = forms;
  }

  
  function createSent(value, time) {
    let sentText = `  <div class="reply">
    <div class="reply-text">
        <span>${value} <sub> ${time} <i class='bx bx-check-double'></i> </sub> </span>
    </div>
</div>`;
chatBody.innerHTML += sentText;
const bx = document.querySelectorAll('.reply-text .bx');
bxFont = bx;
  }



 async function createReply(randomMess, time) {
   setTimeout(() => {
    typing.textContent = 'typing...';
    bxFont.forEach(font => {
      font.classList.add('bx-color');
    })
   },2000)

  await sleep(5000);
    let replyText = `   <div class="sent">
    <div class="sent-text">
        <span>${randomMess}
            <sub>${time}</sub> 
        </span>
    </div>
</div>`;
chatBody.innerHTML += replyText;
typing.textContent = '';
  }

function screeWidth() {
  if (screen.width < '899') {
    friendMess.forEach(form => {
      form.addEventListener('click', () => {
        aside.style.display = 'none';
        mainContent.style.display = 'flex';
      })
    })
  } 
}


function showMenu() {
  mainContent.style.display = 'none';
  aside.style.display = 'initial';
}

function showStatus(recentItem) {
  let displayContent = recentItem.map(recents => {
    return ` <div class="single-item form">
    <div class="single-chat ${recents.class}">
      <div class="img-div" >
        <img src="${recents.img}" alt="">
      </div>
        <div class="single-text">             
            <h4 class="name">${recents.name}</h4>
            <p>${recents.time}</p>
        </div>
      
    </div>
</div>`;
  }).join("")
  recentUpdate.innerHTML = displayContent;
}
 
function showviewStatus(viewItem) {
  let displayContent = viewItem.map(view => {
    return ` <div class="single-item form">
    <div class="single-chat ${view.class}">
      <div class="img-div">
        <img src="${view.img}" alt="">
      </div>
        <div class="single-text">             
            <h4 class="name">${view.name}</h4>
            <p>${view.time}</p>
        </div>
      
    </div>
</div>`;
  }).join("")
  viewUpdate.innerHTML = displayContent;
}

function changeactive(e) {
  let id = e.target.dataset.id;
  if (id) {
    navbar.forEach(nav => {
      nav.classList.remove('active');
      e.target.classList.add('active');
    });
    section.forEach(sect => {
      sect.classList.add('hidden');
      let element = document.getElementById(id);
      element.classList.remove('hidden')
    })
  }
}

