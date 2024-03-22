var agora = new Date()
var hora = agora.getHours() // Pegar a hora atual do sistema
console.log(`Agora são exatamente ${hora} Horas.`)
if (hora < 12 ) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}