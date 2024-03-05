// variáveis
const luckyButton = document.querySelector('#luckyButton')
const resetButton = document.querySelector('#resetButton')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

//eventos
luckyButton.addEventListener('click', handleLuckyButton)
resetButton.addEventListener('click', handleResetButton)


//funções
function getPhrase(){
    let r_text = new Array ();
    r_text[0] = "A vida trará coisas boas se tiveres paciência."
    r_text[1] = "Não compense na ira o que lhe falta de razão."
    r_text[2] = "Defeitos e virtudes são apenas dois lados da mesma moeda."
    r_text[3] = "A maior de todas as torres começa no solo."
    r_text[4] = "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar."
    r_text[5] = "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
    r_text[6] = "Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca."
    r_text[7] = "Sorte é isto. Merecer e ter."
    r_text[8] = "Às vezes não conseguir o que você quer é uma tremenda sorte."
    r_text[9] = "A sorte bate em cada porta uma vez na vida, mas, em muitos casos, a pessoa está se divertindo por aí e não a ouve."
    r_text[10] = "Sorte é o que acontece quando a capacidade encontra a oportunidade."
    r_text[11] = "A sorte de quem trabalha é diretamente proporcional ao azar do preguiçoso."
    let i = Math.floor(Math.random() * 12)
    document.querySelector('.random-phrase').innerHTML = "<p>" + r_text[i] + "</p>";
}

function handleLuckyButton() {
    toggleScreens()
    getPhrase()
}

function handleResetButton() {
    toggleScreens()
}


function toggleScreens(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}