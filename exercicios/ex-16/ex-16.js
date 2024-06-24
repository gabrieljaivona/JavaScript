function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let frase = document.getElementById('frase')

    if(num.value.length == 0){ 
        window.alert("[ERRO] Verifique os dados novamente")
    } else {
        let n = Number(num.value)
        frase.innerHTML = `Tabuada de ${n}`
        tab.innerHTML = ''
        
        for(let c = 1; c <= 10; c++ ){ 
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}