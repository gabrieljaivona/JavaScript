function contar(){
    let inicio = document.getElementById('inumero-inicio')
    let fim = document.getElementById('inumero-fim')
    let passo = document.getElementById('inumero-passo')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Confira os dados novamente!")
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}