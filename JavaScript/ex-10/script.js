function carregar(){
    var msg1 = document.getElementById('frase-1')
    var msg2 = document.getElementById('frase-2')
    var img = document.getElementById('imagem')
    var back = document.getElementsByTagName('body')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 15
    msg1.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        msg2.innerHTML = `Bom dia!`
        img.src = 'manha.jpg'
        document.body.style.background = '#e2d139d8'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        msg2.innerHTML = `Boa tarde!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#bb6809d8'
    } else {
        //boa noite
        msg2.innerHTML = `Boa noite!`
        img.src = 'noite.jpg'
        document.body.style.background = '#291b36d8'
    }

}