// input value 

let newsImG=document.querySelector("#news-img")
let newsImGtxt=document.querySelector("#news-img-txt")
newsImG.onchange = function () {
    newsImGtxt.value = this.value.replace(/C:\\fakepath\\/i, '');
};



let homeImG=document.querySelector("#home-img")
let homeImGtxt=document.querySelector("#home-img-txt")
homeImG.onchange = function () {
    homeImGtxt.value = this.value.replace(/C:\\fakepath\\/i, '');
};
// input value 

// active, show class js 

let homeLi=document.querySelector(".home-li")
let festivaLi=document.querySelector(".festival-li")
let newsLi=document.querySelector(".news-li")

let homeForm=document.querySelector(".home-form")
let festivalForm=document.querySelector(".festival-form")
let newsForm=document.querySelector(".news-form")

homeLi.addEventListener("click" , ()=>{
    // active class 
    festivaLi.classList.remove("active")
    newsLi.classList.remove("active")
    homeLi.classList.add("active")
    // active class 

    // show class
    homeForm.classList.add("show")
    festivalForm.classList.remove("show")
    newsForm.classList.remove("show")
    // show class 
})
festivaLi.addEventListener("click" , ()=>{
    // active class 
    homeLi.classList.remove("active")
    newsLi.classList.remove("active")
    festivaLi.classList.add("active")
    // active class 

    // show class
    festivalForm.classList.add("show")
    homeForm.classList.remove("show")
    newsForm.classList.remove("show")
    // show class 
})
newsLi.addEventListener("click" , ()=>{
    // active class 
    homeLi.classList.remove("active")
    festivaLi.classList.remove("active")
    newsLi.classList.add("active")
    // active class

    // show class
    newsForm.classList.add("show")
    homeForm.classList.remove("show")
    festivalForm.classList.remove("show")
    // show class 
})

// active, show class js 

//-------------------------------------------------------------------------------
//---------------------------------------home api--------------------------------
//-------------------------------------------------------------------------------

let homeImgTxt=document.querySelector("#home-img-txt")
let homeImg=document.querySelector("#home-img")
let homeTitle=document.querySelector("#home-title")
let homeContent=document.querySelector("#home-content")
let homeBtn=document.querySelector("#home-btn")
let homeDeleteBtn=document.querySelector("#home-delete-btn")

let homeImageResult=null


homeImg.addEventListener('change', (e)=>{
   let file = e.target.files[0] // en sonuncu shekli goturur
   const read = new FileReader()
   read.onloadend = ()=>{
       homeImageResult=read.result
}
   read.readAsDataURL(file)
})


homeBtn.addEventListener("click", ()=>{
    if(homeImg.value.trim().length<1 || homeImgTxt.value.trim().length<1 
    || homeTitle.value.trim().length<1 || homeContent.value.trim().length<1){
      console.log("islemir")
    }
    else{
        axios.put("https://gunel-35b8f-default-rtdb.firebaseio.com/homeform/-Mr3AdIPQ1pgt1mWAocT.json",
        {
            id:1639673924195,
            image:homeImageResult,
            title:homeTitle.value,
            content:homeContent.value,
        })   
        .then(res=>{
            console.log(res)
            homeImg.value=""
            homeTitle.value=""
            homeContent.value=""
            homeImgTxt.value=""  
                })
            .catch(error=>console.log(error))  
    }
})

 



// homeBtn.addEventListener("click", ()=>{ 
//     if(homeImg.value.trim().length<1 || homeImgTxt.value.trim().length<1 
//     || homeTitle.value.trim().length<1 || homeContent.value.trim().length<1){
//       console.log("islemir")
//     }
//     else{
//         axios.post("https://gunel-35b8f-default-rtdb.firebaseio.com/homeform.json",{
//                 id:Date.now(),
//                 image:homeImageResult,
//                 title:homeTitle.value,
//             content:homeContent.value,

//         })
//         .then(res=>{
//             console.log(res)
//             homeImg.value=""
//             homeTitle.value=""
//             homeContent.value=""
//             homeImgTxt.value=""
//         })
//         .catch(error=>console.log(error))  
//     }
// })



// homeDeleteBtn.addEventListener("click", ()=>{
//     axios.delete("https://gunel-35b8f-default-rtdb.firebaseio.com/homeform.json")
//     .then(res=>console.log(res))
//     .catch(error=>console.log(error))
// })

//-------------------------------------------------------------------------------
//---------------------------------------home api--------------------------------
//-------------------------------------------------------------------------------

//festival api 
let festTitle=document.querySelector("#fest-title")
let festContent=document.querySelector("#fest-content")
let festDate=document.querySelector("#fest-date")
let festTime=document.querySelector("#fest-time")
let festPlace=document.querySelector("#fest-place")
let festBtn=document.querySelector("#fest-btn")
let festDeleteBtn=document.querySelector("#fest-delete-btn")


festBtn.addEventListener("click", ()=>{
    if(festTitle.value.trim().length<1 || festContent.value.trim().length<1 
  || festDate.value.length<1 || festTime.value.length<1 
  || festPlace.value.trim().length<1){
    console.log("islemir")
  }
  else{
    axios.post("https://nazrin-aeee8-default-rtdb.firebaseio.com/festform.json",
    {
        id:Date.now(),
        title:festTitle.value,
        content:festContent.value,
        date:festDate.value,
        time:festTime.value,
        place:festPlace.value
    })  
    .then(res=>{
                console.log(res)
                festTitle.value=""
                festDate.value=""
                festContent.value=""
                festDate.value=""
                festTime.value=""
                festPlace.value=""
            })
            .catch(error=>console.log(error))  
  }
    
    
})

festDeleteBtn.addEventListener("click", ()=>{
    axios.delete("https://nazrin-aeee8-default-rtdb.firebaseio.com/festform.json")
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
})
//festival api 

// news api 
let newsImgTxt=document.querySelector("#news-img-txt")
let newsImg=document.querySelector("#news-img")
let newsInput=document.querySelector("#news-input")
let newsTextarea=document.querySelector("#news-textarea")
let newsBtn=document.querySelector("#news-btn")
let newsDeleteBtn=document.querySelector("#news-delete-btn")

let newImageResult=null


let changeImg=document.querySelector(".changeimg")
newsImg.addEventListener('change', (e)=>{
   let file = e.target.files[0] // en sonuncu shekli goturur
   const reader = new FileReader()
   reader.onloadend = ()=>{
       newImageResult=reader.result
}
   reader.readAsDataURL(file)
})

newsBtn.addEventListener("click", ()=>{
    if(newsImg.value.trim().length<1 || newsInput.value.trim().length<1 
  || newsTextarea.value.trim().length<1 || newsImgTxt.value.trim().length<1){
    console.log("islemir")
  }
  else{
    axios.post("https://nazrin-aeee8-default-rtdb.firebaseio.com/newsform.json",
    {
        id:Date.now(),
        image:newImageResult,
        title:newsInput.value,
        content:newsTextarea.value
    })  
    .then(res=>{
                console.log(res)
               newsImg.value=""
               newsInput.value=""
               newsTextarea.value=""
               newsImgTxt.value=""
            })
            .catch(error=>console.log(error))  
  }
    
    
})

newsDeleteBtn.addEventListener("click", ()=>{
    axios.delete("https://nazrin-aeee8-default-rtdb.firebaseio.com/newsform.json")
    .then(res=>console.log(res))
    .catch(error=>console.log(error))
})


// news api 

//party api 
// let partyImgTxt=document.querySelector("#party-img-txt")
// let partyImg=document.querySelector("#party-img")
// let partyBtn=document.querySelector("#party-btn")
// let partyDeleteBtn=document.querySelector("#party-delete-btn")

// let partyImageResult=null


// partyImg.addEventListener('change', (e)=>{
//    let file = e.target.files[0] // en sonuncu shekli goturur
//    const reade = new FileReader()
//    reade.onloadend = ()=>{
//        partyImageResult=reade.result
// }
//    reade.readAsDataURL(file)
// })


// partyBtn.addEventListener("click", ()=>{ 
//     if(partyImg.value.trim().length<1 || partyImgTxt.value.trim().length<1){
//       console.log("islemir")
//     }
//     else{
//         axios.post("https://gunel-35b8f-default-rtdb.firebaseio.com/partyform.json",{
//                 id:Date.now(),
//                 image:partyImageResult,
//         })
//         .then(res=>{
//             console.log(res)
//             partyImg.value=""
//             partyImgTxt.value=""
//         })
//         .catch(error=>console.log(error))  
//     }
// })


//party api 