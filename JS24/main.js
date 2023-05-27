function findDevelopers(){
    let developers = [];
    phones.map(function(phone,index){
        if(developers.indexOf(phone.developer) === -1){
            developers.push(phone.developer)
        }
})
let datalistOptions= document.getElementById('datalistOptions')
let options = ``;
developers.map(function(dev){
options +=`<option value=${dev}>`
datalistOptions.innerHTML = options;
})
}
findDevelopers()
function saveFilter(){
    let filter = {
        name:     document.getElementById('name'),
        developer:document.getElementById('developer'),
        min_price:document.getElementById('min_price'),
        max_price:document.getElementById('max_price'),
        order:    document.getElementById('order')
    }
    localStorage.setItem(filter, JSON.stringify(filter))
    
}
function DrawCards(cards){
let cards_block = document.getElementById('cards_block')
let card_html = ``;
cards.map(function(card, index){
    let action = ``;
    if(card.action){action = <div>Акція</div>}
card_html += `
<div class="card">
${action}
<img src="" class="card-img-top">
<div class="card-body">
    <h6 class="card-title">${card.name}</h6>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Виробник:</b> <span>${card.developer}</span></li>
        <li class="list-group-item"><b>Відгуків:</b> <span>${card.reviews}</span></li>
        <li class="list-group-item"><b>Ціна:</b> <span>${card.price}₴</span></li>
    </ul>
</div>
<div class="card-body price">
    <a href="#" class="card-link">В корзину</a>
    <a href="#" class="card-link">Придбати</a>
  </div>
</div>

`
cards_block.innerHTML = card_html
})
}
DrawCards(phones)