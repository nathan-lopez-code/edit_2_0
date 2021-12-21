let degre = [0,1,2,3,4,5,6,7,8,9,10];

let haut = document.querySelector('header');
let bouton = document.getElementById('bouton');
bouton.addEventListener('click', ()=>{
    let un = document.querySelector('.un');
    let deux = document.querySelector('.deux');
    let trois = document.querySelector('.trois');
    un.style.transform = 'rotate(45deg)';
    trois.style.transform = 'rotate(-45deg)';
    deux.style.opacity = '0%';
    let menu = document.querySelector('.menu');
    menu.style.left = '50%';

    let retour = document.createElement('div')
    retour.setAttribute('class','retour');
    document.body.appendChild(retour);
    retour.addEventListener('click',()=>{
        un.style.transform = 'rotate(0deg)';
        trois.style.transform = 'rotate(0deg)';
        deux.style.opacity = '100%';
        retour.remove();
        menu.style.left = '1000vh';
    },false);
},false);
let retour = document.createElement('div');
retour.style.position = 'fixed';
retour.style.top = '3vh';
retour.style.left = '85%';
retour.style.width = '3vh';
retour.style.height = '3vh';