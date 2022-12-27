// :)
const fs = require('fs')
const entrada = fs.readFileSync(`entrada.txt`).toString()
function removeFirst(arr, target) {
    var idx = arr.indexOf(target);
    if (idx > -1) {
        arr.splice(idx, 1);
    }
    return arr;
}

function removeAll(arr, target) {
    var i = 0;
    while (i < arr.length) {
        if (parseInt(arr[i]) == parseInt(target)) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function processInfo() {
    let entradaS = entrada.split('\n')
    numTestes = parseInt(entradaS[0])
    let chave = parseInt(entradaS[1].split(' ')[0])
    let tamanho = parseInt(entradaS[1].split(' ')[1])
    let inicio = 2 
    let fim = 1+tamanho
    let testes = []

    while (testes.length != numTestes) {
        let output = []
       for (let i = 0; i < tamanho; i++) {

        output.push(entradaS[inicio+i])

       }
       output.push({chave,tamanho,inicio,fim})
       testes.push(output)
if(testes.length != numTestes){
    novachave=entradaS[fim+1].split(' ')[0]
    novotamanho=parseInt(entradaS[fim+1].split(' ')[1])
    novoinicio=fim+2
    novofim=novoinicio+novotamanho-1
    
    chave=parseInt(novachave)
    tamanho=parseInt(novotamanho)
    inicio=parseInt(novoinicio)
    fim=parseInt(novofim)
}       
}

    return testes
}
function getResult() {
    let newTestes = []
    const testes = processInfo()
    let i = 1
    testes.forEach(teste => {
        let info = teste[teste.length - 1]
        teste.pop()
        let maior = '-222 1'
        let diretorAchado = false
//console.log(teste)
        teste.forEach(diretor => {
            chaves = info.chave

            // diretorS = diretor.split(' ')
            if (parseInt(diretor.split(' ')[0]) > maior.split(' ')[0]) {
                maior = diretor
            }
            if (parseInt(diretor.split(' ')[0]) >= parseInt(chaves) && diretorAchado == false) {
                console.log(`1`)
                //console.log(chaves)
                diretorAchado = true
            }

        })
        if (diretorAchado == true) {
            return
        }
        maiorS = maior.split(' ')
        maiorS.shift()
        let repetidas = []
        maiorS.forEach(chave => {
            teste = removeFirst(teste, maior)
            teste.forEach(diretores => {
                diretores = diretores.split(' ')
                diretores.shift()
                diretores.forEach(chaveTeste => {
                    if (parseInt(chave) == parseInt(chaveTeste)) {
                        repetidas.push(chave)

                    }
                })

            });
        })
        repetidas = [...new Set(repetidas)];
        //console.log(repetidas)
        teste.forEach(pequeno=>{

            pequeno = pequeno.split(' ')
            pequeno.shift()
    repetidas.forEach(repetida=>{
        // console.log(repetida)
        // console.log(pequeno)
        // console.log(`--------------------------`)
        removeAll(pequeno,repetida)

    })
    newTestes.push(pequeno)
})

maior = maior.split(' ')
maior.shift()
newTestes.push(maior)
        
i++
let chavesDistintas=[]
newTestes.forEach(diretor=>{
chavesDistintas.push(diretor.length)
})

// console.log(newTestes)
// console.log(chavesDistintas);
// console.log(repetidas)
// console.log(`--------------------------------`)

chavesDistintas = chavesDistintas.sort()
let maiorChave = chavesDistintas[chavesDistintas.length-1]
chavesDistintas.pop()
let ultimaschaves=[]
let passou=false
chavesDistintas=removeAll(chavesDistintas,0)
chavesDistintas.forEach(chave=>{
    ultimaschaves.push(chave)
if(maiorChave+eval(ultimaschaves.join('+')) >= chaves){
console.log(ultimaschaves.length + 1)
passou=true
}

})
if(!passou){
console.log('Desastre')
}

newTestes=[]
chavesDistintas=[]
repetidas=[]

})


}
getResult()