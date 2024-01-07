var options =  {
    strings:['Frontend Developer', 'Web Developer', 'MERN Stack Developer'],
    typeSpeed:100,
    backSpeed:140,
    backDelay:1000,
    loop:true
};
var typed = new Typed('.text', options)

const mainMenu = document.querySelector('.nav')
const openEl = document.querySelector('.open')
const closeEl = document.querySelector('.close')


openEl.addEventListener('click', show)
closeEl.addEventListener('click', close)


function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0'
}
function close(){
    mainMenu.style.top = '-100%'
}



const jsConfetti = new JSConfetti()

function confettiFY(){
    jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
        ],
      })
}

const form = document.querySelector('.form')

const nameEl = document.querySelector('.form-name')
const emailEl = document.querySelector('.form-email')

form.addEventListener('submit', e => {
    e.preventDefault();
    if(nameEl.value==='' || nameEl.value===null){
        alert('Name is required')
    }
    if(emailEl.value==='' || emailEl.value===null){
        alert('Email is required')
    }
});



function message(){
    if(nameEl.value==='' || nameEl.value===null){
        alert('Enter the required details')
    }
    else{
        alert('Message send Successfully !!')
        document.querySelector('.send').addEventListener('click', confettiFY)

    }
    
}