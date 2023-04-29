            import { data } from "./data.js";

            import { order } from "./order.js";

            const containerGifts = document.getElementById('innerGifts')

            let htmlGifts = ''

            data.readyBoxes.forEach((element, idx) => {
               htmlGifts = htmlGifts +  `
                <div class="gifts__item">
                    <h4 class="gifts__item-title">${element.name}</h4>
                    <div class="gifts__item-img"></div>
                    <p class="gifts__item-descr">${element.descr}</p>
                    <a class="gifts__item-link" id="${idx}" href="">Купить</a>
                </div>
                                `

            });
   
            containerGifts.insertAdjacentHTML('afterbegin',htmlGifts)

            containerGifts.addEventListener('click',function(e){
                e.preventDefault()
                if(e.target.classList.contains('gifts__item-link')){
                    console.log('ВЫ добавили товар')
                    const currentBox = data.readyBoxes.find(el => el.id === +e.target.id + 1)
                    order.readyBoxes.push(currentBox)
                    console.log(order.readyBoxes)
                }
            })