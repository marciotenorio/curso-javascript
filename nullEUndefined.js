// Quando são objetos é feito copia por referencia e com tipos primitivos é copia por valor
const a = {name: 'Márcio'}
const b = a
b.name = 'Tony'
console.log(a)

const c = 3
let d = c
d++
console.log(c)

// quando nao se inicializa ele tem undefined
let valor
console.log(valor)

valor = null
// console.log(valor.toString()) Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
// Só da merda se você for fazer algo que esta com undefined como abaixo
//entao se a referencia anterior for valida so da undefined, se ela for também undefined vai da erro
// console.log(produto.preco.a)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)