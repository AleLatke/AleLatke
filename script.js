let strana = document.querySelector('#naslov')
strana.addEventListener( 'click' , () => {
    window.location.href = 'index.html';
})


/*
let text = textTag.textContent  //Uzimanje sadrzaj teksta od id ime!*/


/*
let projekat = document.querySelectorAll('.projekat')
let detalji = document.querySelectorAll('.detalji')

projekat.forEach(element => element.addEventListener( 'mouseover' , () => {
    let category = element.getAttribute('data-category')
    detalji.forEach(item => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block'
        }
    })
    
})
)

projekat.forEach(element => element.addEventListener( 'mouseleave' , () => {
    let category = element.getAttribute('data-category')
    detalji.forEach(item => {
        if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'none'
        }
    })
    
})
)       
*/


let dugme = document.querySelector('#info')
dugme?.addEventListener( 'click' , funkcija)

function funkcija() {
    window.location.href = 'aboutMe.html'
}

//ANIMACIJA TEXTA
//Prvo se od texta odvaja slovo po slovo u spanovima

let textTag = document.querySelector('.ime')
let spans;
if(textTag != null){
let text = textTag.innerText
spans = text.split('')
textTag.innerHTML = " ";

for(let i = 0; i < spans.length; i++){
    if(spans[i] === " "){
        spans[i] = '&nbsp;';
    }if(i===17){
        textTag.innerHTML+=`<br/>`;
    }
    
textTag.innerHTML += `<span>${spans[i]}</span>`
}


//onda se radi setinterval sa indeksiranjem
//U set intervalu jedan segment je f-ja a drugi vreme trajanja u ms!
let recenica = document.querySelector('#sadrzaj h3')
let info = document.querySelector('#info')
let sviSpanovi = document.querySelectorAll('span')
let k = 0
let interval = setInterval(() => {
let singleSpan = sviSpanovi[k]
singleSpan.className = 'pomeranje'
k++

if(k === sviSpanovi.length){
    clearInterval(interval)
    recenica.className = 'pojava';
    info.classList.add('pojava')
}
}, 100);

}

/*
const mobilemenu = () => {
    if(lista.style.display == 'none'){
        lista.style.display == 'block'
    }else{
        lista.style.display == 'none'
    }
}


let meni = document.querySelector('#dugmeMeni')
let lista = document.querySelector('.mobileUl')
    meni.addEventListener( 'click' , mobilemenu)

    */
    const mobilni = () => {
        if(lista.style.display === 'block'){
        lista.style.display = 'none'
        meni.innerHTML = `<ion-icon name="menu-outline"></ion-icon>`
        }else{
            lista.style.display = 'block'
            meni.innerHTML = 'X'
        }
    }
    
    let meni = document.querySelector('#dugmeMeni')
let lista = document.querySelector('#glavniMeni')
let omeni = document.querySelector('.omeni')
    meni.addEventListener( 'click' , mobilni)

