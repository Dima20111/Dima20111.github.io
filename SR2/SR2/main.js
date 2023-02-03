let ymny = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let ima = prompt('Ведіть імя користувача якому потрібно віправити лист');
let misshok =document.getElementById(`tyble`)
let massage =document.getElementById(`massage`)
let  widro ='';
let  chhek = '';
let user_num = 0;

for(i=0 ; i < ymny.length ; i++ ){
if(ymny[i].includes(ima)){
    chhek = 'checked';
	user_num++
    }else{
        chhek = ''
}
 if(i % 2 > 0){
  widro +=

`<tr class="gray">
                <td>${i+1}</td>
                <td class="num">${ymny[i]}</td>
                <td align="center"><input type="checkbox" ${chhek}></td>
            </tr>`;}else{
				widro +=
				`<tr class="">
								<td>${i+1}</td>
								<td class="num">${ymny[i]}</td>
								<td align="center"><input type="checkbox" ${chhek}></td>
							</tr>`
			
}}

massage.innerText = `Знайдено користувачів з імям ${ima} - ${user_num}`;
misshok.innerHTML = widro;