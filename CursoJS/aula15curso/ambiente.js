let num = [5, 8, 2, 9, 3]
num.push(2)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor voter é ${num[3]}`)
let pos = num.indexOf(7)
if (pos == -1){
    console.log(`O valor ñ foi encontrado`)
} else {
    console.log(`O valor está no ${pos}`)
}