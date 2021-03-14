function parimp(n) {
    if ( n % 2 == 0 ) {
        return 'par'
    }else {
        return 'impar'
    }
}

console.log(parimp(6))

//outra função o =0 significa caso nao atribuimos um numero ele vai valer 0

function soma(n1=0,n2=0) {
    return n1 + n2
}
console.log(soma(3,7))

//outra função

let v = function(x) {
    return x*2
}
console.log(v(10))

//outra função

function fatorial(n) {
    let fat = 1
    for ( let c = n ; c > 1 ; c-- ) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))