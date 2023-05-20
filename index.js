const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const ul = document.getElementById('ul');
const lis = document.querySelectorAll('li');
const bgImgHeader = document.querySelector('header .bgImgHeader')


lis.forEach(li => {
    li.addEventListener('click',() => {
        lis.forEach(li => {
            li.classList.remove('active')
            li.classList.remove('text-white')
        })
        li.classList.add('active');
        li.classList.add('text-white') 
    })
})
menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

function navScroll(){
    let yPage = window.pageYOffset
        
    if(yPage > 150){
        nav.classList.add('navScroll')
    } else {
        nav.classList.remove('navScroll')
    }
}
navScroll()
window.addEventListener('scroll',()=> {
    navScroll()
})

// bg header img
bgImgHeader.setAttribute('src','errr');
function headerImgSize(){
        if(window.screen.width < 500){ 
        bgImgHeader.setAttribute('src','img/mobileBgHeader.png');
    } else if(window.screen.width > 500 && window.screen.width < 1100){
        bgImgHeader.setAttribute('src','img/tabHeaderImg.png');
    } else if(window.screen.width > 1100 && window.screen.width < 1700){
        bgImgHeader.setAttribute('src','img/deksHeaderImg.png');
        // bgImgHeader.setAttribute('src','img/deksMaxHeaderImg.png');
    } else {
        bgImgHeader.setAttribute('src','img/deksMaxHeaderImg.png');
    }
}
headerImgSize()
window.addEventListener('resize' ,() => {
    headerImgSize()
})
console.log(window.screen.width);