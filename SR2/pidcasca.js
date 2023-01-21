let imena = [
    'Софія Грець',
    'Вадим Стельмах',
    'Іван Дмитрич',
    'Влад Бойчук',
    'Марія Федорів',
    'Андрій Семчишин',
    'Ігор Семенюк',
    'Валерій Порошенко',
    'Віталій Кузьма',
    'Владислав Колодій'
]
let mishok = document.getElementById('mishok')
let vidro = '';
let chek = '';
let imya = prompt('Імя?')
for(i=0;i<imena.length;i++){
    if(imena[i].includes(imya)){
        chek = 'checked'
    }else{
        chek = ''
    }
vidro += `
<div class="odin">
<p  align="center">
    ${i+1}<br>
    ${imena[i]}<br>
    <input type="checkbox" ${chek}>
</p>
</div>
`
}

mishok.innerHTML = vidro;

