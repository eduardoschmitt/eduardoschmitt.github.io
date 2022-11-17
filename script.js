let dia = document.getElementById('dia')
let saudacao = '';
   
let data = new Date();
let hora = data.getHours();

if (hora >= 6 && hora < 12) {
    saudacao = 'Bom dia';
} else if (hora >= 12 && hora < 18) {
    saudacao = 'Boa tarde';
} else if (hora >= 18 && hora <= 23) {
    saudacao = 'Boa noite';
}

dia.innerHTML = saudacao;