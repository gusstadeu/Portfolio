let res = document.getElementById('result')

function tec(num){
    res.innerHTML += num
}

function tecLimp(){
    res.innerHTML = ''
}

function calcular(){
    var result = document.getElementById('result').innerHTML
    console.log(result)

    if (result == '' || result == undefined) {
        return window.alert('Por favor inserir algo válido')
    } else {
        document.getElementById('result').innerHTML = eval(result)

    }
}
