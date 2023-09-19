// bar menu header
let respMenu=document.querySelector(".resp-menu");
let respBar=document.querySelector(".resp-bar")

respBar.addEventListener("click", ()=>{
    respMenu.classList.toggle("resp-menu-show")

})
// bar menu header

let imG=document.querySelector("#img")
let imGtext=document.querySelector("#imgtext")

imG.onchange = function () {
   imGtext.value = this.value.replace(/C:\\fakepath\\/i, '');
};



// phptpss
let phT1=document.querySelector(".pht1")
let phT2=document.querySelector(".pht2")
let phT3=document.querySelector(".pht3")
let phT4=document.querySelector(".pht4")
let phT5=document.querySelector(".pht5")
let phT6=document.querySelector(".pht6")
let phT7=document.querySelector(".pht7")
let phT8=document.querySelector(".pht8")
let phT9=document.querySelector(".pht9")
let phT100=document.querySelector(".pht100")
let phT101=document.querySelector(".pht101")
let phT102=document.querySelector(".pht102")
let phT103=document.querySelector(".pht103")

let phT11=document.querySelector(".pht11")
let phT22=document.querySelector(".pht22")
let phT33=document.querySelector(".pht33")
let phT44=document.querySelector(".pht44")
let phT55=document.querySelector(".pht55")
let phT66=document.querySelector(".pht66")
let phT77=document.querySelector(".pht77")
let phT88=document.querySelector(".pht88")
let phT99=document.querySelector(".pht99")
let phT1000=document.querySelector(".pht1000")
let phT1011=document.querySelector(".pht1011")
let phT1022=document.querySelector(".pht1022")
let phT1033=document.querySelector(".pht1033")

let close=document.querySelector(".close")
let close2=document.querySelector(".close2")
let close3=document.querySelector(".close3")
let close4=document.querySelector(".close4")
let close5=document.querySelector(".close5")
let close6=document.querySelector(".close6")
let close7=document.querySelector(".close7")
let close8=document.querySelector(".close8")
let close9=document.querySelector(".close9")
let close10=document.querySelector(".close10")
let close11=document.querySelector(".close11")
let close12=document.querySelector(".close12")
let close13=document.querySelector(".close13")

phT1.addEventListener("click", ()=>{
phT11.classList.add("show-pht")
})
close.addEventListener("click",()=>{
    phT11.classList.remove("show-pht")
})

phT2.addEventListener("click", ()=>{
    phT22.classList.add("show-pht")
    })
    close2.addEventListener("click",()=>{
        phT22.classList.remove("show-pht")
    })

phT3.addEventListener("click", ()=>{
    phT33.classList.add("show-pht")
})
close3.addEventListener("click",()=>{
    phT33.classList.remove("show-pht")
})

phT4.addEventListener("click", ()=>{
    phT44.classList.add("show-pht")
})
close4.addEventListener("click",()=>{
    phT44.classList.remove("show-pht")
})

phT5.addEventListener("click", ()=>{
    phT55.classList.add("show-pht")
})
close5.addEventListener("click",()=>{
    phT55.classList.remove("show-pht")
})

phT6.addEventListener("click", ()=>{
    phT66.classList.add("show-pht")
})
close6.addEventListener("click",()=>{
    phT66.classList.remove("show-pht")
})

phT7.addEventListener("click", ()=>{
    phT77.classList.add("show-pht")
})
close7.addEventListener("click",()=>{
    phT77.classList.remove("show-pht")
})

phT8.addEventListener("click", ()=>{
    phT88.classList.add("show-pht")
})
close8.addEventListener("click",()=>{
    phT88.classList.remove("show-pht")
})

phT9.addEventListener("click", ()=>{
    phT99.classList.add("show-pht")
})
close9.addEventListener("click",()=>{
    phT99.classList.remove("show-pht")
})

phT100.addEventListener("click", ()=>{
    phT1000.classList.add("show-pht")
})
close10.addEventListener("click",()=>{
    phT1000.classList.remove("show-pht")
})

phT101.addEventListener("click", ()=>{
    phT1011.classList.add("show-pht")
})
close11.addEventListener("click",()=>{
    phT1011.classList.remove("show-pht")
})

phT102.addEventListener("click", ()=>{
    phT1022.classList.add("show-pht")
})
close12.addEventListener("click",()=>{
    phT1022.classList.remove("show-pht")
})

phT103.addEventListener("click", ()=>{
    phT1033.classList.add("show-pht")
})
close13.addEventListener("click",()=>{
    phT1033.classList.remove("show-pht")
})