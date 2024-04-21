const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages =[
   'QUEEE!',
   'Piensalo bien',
   'Cambiar de decisión esta bien',
   'Ya pues, el otro, no?',
   'tas loco vrd', 
   'tss, como es eso',
   'Respuesta incorrecta', 
   'Mmm, como que se equivoco',
   've, ve, anda resabiado'
]
buttonNo.addEventListener('click', ()=> {
   fontSize = fontSize + .5
   buttonYes.style.fontSize = `${fontSize}rem`   

   const indexRandom = Math.floor(Math.random() * messages.length)
   
   buttonNo.textContent= messages[indexRandom]
})

buttonYes.addEventListener('click',()=> {
    document.querySelector('#message').style.display= 'flex'
    

})

