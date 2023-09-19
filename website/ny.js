// bar menu header
let respMenu=document.querySelector(".resp-menu");
let respBar=document.querySelector(".resp-bar")

respBar.addEventListener("click", ()=>{
    respMenu.classList.toggle("resp-menu-show")

})
// bar menu header


// img input 
let imG=document.querySelector("#img")
let imGtext=document.querySelector("#imgtext")

imG.onchange = function () {
  imGtext.value = this.value.replace(/C:\\fakepath\\/i, '');
};
// img input 



// swiper slide spotify
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
// swiper slide spotify


// swiper slide parties 
var swiper = new Swiper(".twiceSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper slide parties 

// Logo

// card api 


// -----------------------home api------------------------
let hContent = document.querySelector("#home")
let homeEmpty=[];
axios.get("https://nazrin-aeee8-default-rtdb.firebaseio.com/homeform.json")
.then(resp=>resp.data).then(data=>{
  for(let key in data){
    homeEmpty.push(data[key])
  }
})
.catch(error=>console.log(error))

setTimeout(()=>{
  homeEmpty.forEach(hm=>{
    hContent.innerHTML+=
    `<div class="home" style="background-image: url(${hm.image})">
    <div class="home-content">
        <h2>${hm.title}</h2>
        <p>${hm.content}</p>
        <a href="#">GET A TICKET</a> 
    </div>
    </div>`
  })
},2000)


// -----------------------home api------------------------


// -----------------------fest api------------------------
let fContent = document.querySelector(".festival-content")
let festEmpty=[];
axios.get("https://nazrin-aeee8-default-rtdb.firebaseio.com/festform.json")
.then(resp=>resp.data).then(data=>{
  for(let key in data){
    festEmpty.push(data[key])
  }
})
.catch(error=>console.log(error))

setTimeout(()=>{
  festEmpty.forEach(fstv=>{
    fContent.innerHTML+=
    `<h2>${fstv.title}</h2>
    <p>${fstv.content}</p>
    <ul class="festival-list">
        <li class="festival-list-item">
            <span><i class="fas fa-calendar-day"></i></span>
            ${fstv.date}
        </li>
        <li class="festival-list-item">
            <span><i class="fas fa-clock"></i></span>
            ${fstv.time}
        </li>
        <li class="festival-list-item">
            <span><i class="fas fa-map"></i></span>
            ${fstv.place}
        </li>
    </ul>
    <a href="./Pages/join.html">JOIN US</a>
    <div class="different">
    <a href="#">READ MORE</a>
    </div>`
  })
},3000)
// -----------------------fest api------------------------

// -----------------------news api------------------------ 

let eCards = document.querySelector(".cards")
let empty=[];
axios.get("https://nazrin-aeee8-default-rtdb.firebaseio.com/newsform.json")
.then(resp=>resp.data).then(data=>{
  for(let key in data){
    empty.push(data[key])
  }
})
.catch(error=>console.log(error))

setTimeout(()=>{
  empty.forEach(crds=>{
    eCards.innerHTML+=
    ` <div class="card">
    <div class="card-full">
        <div class="card-img">
            <figure>
                <img class="changeimg" src=${crds.image} alt="">
            </figure>
        </div>
        <div class="card-content">
            <h3>${crds.title} </h3>
            <p>${crds.content}</p>
            <h4>READ MORE</h4>
        </div>
    </div>
</div>`
  })
},3000)

// -----------------------news api------------------------ 

// prelouder 
window.addEventListener('load', ()=>{
  const Preload=document.querySelector(".prelouder");
  Preload.classList.add('preload-finish');
  
  })

// setInterval(()=>{
//   window.addEventListener('load', ()=>{
//     const Preload=document.querySelector(".prelouder");
//     Preload.classList.add('preload-finish');
    
//     })
// }, 3)
