function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
    if (hora >= 19 || hora < 6) {
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = '#515154'
    } else if (hora >= 6 && hora < 17) {
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = '#e2cd9f'
    } else {
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = '#b9846f'
    }
    
}