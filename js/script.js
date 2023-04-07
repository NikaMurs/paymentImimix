const paymentContentCard = document.querySelectorAll('.paymentContentCard');
const paymentTitle = document.querySelector('.paymentTitle h2')
const paymentQR = document.querySelector('.paymentQR')
const paymentIP = document.querySelector('.paymentIP')


for (let card of paymentContentCard){
    card.addEventListener('click', ()=>{
        paymentContentCard.forEach(item => {
            item.classList.add('hide')
            paymentTitle.classList.add('hide')
        })
    })
}

paymentContentCard[0].addEventListener('click', ()=>{
    paymentQR.classList.remove('hide')
})

paymentContentCard[1].addEventListener('click', ()=>{
    paymentIP.classList.remove('hide')
})