const eyeface=document.querySelector('.eyes')
const earface=document.querySelector('.ears')
const mouthface=document.querySelector('.mouth')

eyeface.addEventListener('click',() => {
    if(eyeface.classList.contains('eyes'))
    earface.classList.add('active');
    eyeface.classList.remove('active');
})

earface.addEventListener('click',() => {
    if(earface.classList.contains('ears'))
    mouthface.classList.add('active');
    earface.classList.remove('active');
})
mouthface.addEventListener('click',() => {
    if(mouthface.classList.contains('mouth'))
    eyeface.classList.add('active');
    mouthface.classList.remove('active');
})