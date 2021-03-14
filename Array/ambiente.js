let num = [2,5,8,4,9]
num.push(7) //acrecenta na array na ultima posição
num.sort() //coloca em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)

console.log('Usando o for ')

for(var pos=0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Usando o for in')

for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Usando o .indexOf ')

var pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor nao foi encontrado')
}else {
    console.log(`O valor está na posição ${pos}`)
}
