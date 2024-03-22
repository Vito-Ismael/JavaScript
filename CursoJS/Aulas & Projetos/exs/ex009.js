var idade = 70
var sex = "F"
//homem
console.log (`Você tem ${idade} anos.`)
if (idade < 66 || sex == 'M') {
    console.log("Você Homem não tem aposentadoria")
 } else if (idade > 66 || sex == "M")
    console.log("Você homem tem aposentadoria")
//mulher
if (idade < 63 || sex == "F"){
    console.log("Você mulher não tem aposentadoria")
 } else if (idade > 63 || "F")
    console.log("Você mulher tem aposentadoria")