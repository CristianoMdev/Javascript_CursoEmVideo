function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0 ) {
        alert('POR FAVOR DIGITE UM NÚMERO')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML='' // <== limpar área
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}