
let radio = document.querySelector('.manual-btn')
let cont = 1

document.getElementById('iradio1').checked = true

setInterval(() =>{
    proximaImg()
}, 10000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('iradio'+cont).checked = true
}