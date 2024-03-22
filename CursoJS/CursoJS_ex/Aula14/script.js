function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia !!
        img.scr = "fotomanha.png"
        document.body.style.background = "#939DB4"
    } else if (hora >= 12 && hora < 18 ) {
        //boa tarde!
        img.scr = "fototarde.png"
        document.body.style.background = "#FCB44E"
    } else {
        //boa noite!
        img.scr = "fotonoite.png"
        document.body.style.background = "#141E24"
    }
}