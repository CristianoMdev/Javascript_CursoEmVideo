var agora = new Date()
var diaSem = agora.getDay()
/*
0=Dom
1=Seg
2=Ter
3=Qua
4=Qui
5=Sex
6=Sab
 */
//console.log(`Hoje é ${diaSem}`)

switch(diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break    
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Invalido!')
}