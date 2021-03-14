function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 11) {
                img.setAttribute('src', 'foto-meninoX.png')
                document.body.style.background = '#515154'
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovemMX.png')
                document.body.style.background = '#515154'
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-homemX.png')
                document.body.style.background = '#515154'
            } else {
                img.setAttribute('src', 'foto-idosoX.png')
                document.body.style.background = '#515154'
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 11) {
                img.setAttribute('src', 'foto-meninaX.png')
                document.body.style.background = '#eddde9'
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovemFX.png')
                document.body.style.background = '#eddde9'
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-mulherX.png')
                document.body.style.background = '#eddde9'
            } else {
                img.setAttribute('src', 'foto-idosaX.png')
                document.body.style.background = '#eddde9'
            }
          
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    

    }
}