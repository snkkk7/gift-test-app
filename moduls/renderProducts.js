                    import { data } from "./data.js";

                    import { containerProductsCatalog,boxfilterBtns,boxChoco,boxSweet,boxDrink,price,catalogWorkshop,catalogWorkList} from "./index.js";

                    import { order } from "./order.js";

                    const uniqueTypesOfProduct = new Set()

                    data.catalog.forEach(el => uniqueTypesOfProduct.add(el.type))

                    let htmlContainerGifts = ' '

                    const renderProducts = function(){
                        htmlContainerGifts = ' '

                        containerProductsCatalog.innerHTML = ' '
                        
                        data.catalog.forEach((el,id) => {
    
                            htmlContainerGifts = htmlContainerGifts + `
                                            <div class="catalog__item">
                                                <h4 class="catalog__item-title">${el.name}</h4>
                                                <img class="catalog__item-img" src="" alt="">
                                                <p class="catalog__item-descr">${el.descr}</p>
                                                <p class="catalog__item-price">${el.price}</p>
                                                <button class="catalog__item-link" id="${id}" href="#">Добавить товар в подарок</button>
                                            </div>
                                                        `
                        })
        
                        containerProductsCatalog.insertAdjacentHTML('afterbegin',htmlContainerGifts)
                
                    }

                    renderProducts()

                    boxfilterBtns.addEventListener('click',function(e){
                        console.log(e.target)
                        if(e.target.id === 'return-all-product'){
                            renderProducts()
                        }
                        if(e.target.id === "generation-random-box"){
                            for(let i = 0;i < 1;i++){
                                uniqueTypesOfProduct.forEach(type => {
                                    const filteredArray = data.catalog.filter(el => el.type === type)                                                                     
                                    const randomIdOfProduct = Math.trunc(Math.random() * filteredArray.length)                            
                                    const randomProduct = filteredArray[randomIdOfProduct]                             
                                    order.customBox.push(randomProduct)   
                                    order.uniqueCustomBox.add(randomProduct)  
                                    order.priceCustomBox = order.priceCustomBox + randomProduct.price
                                    price.textContent = order.priceCustomBox 
                                    const renderProduct = function(htmlLabel,type,columnProduct) {
                                        if(randomProduct.type === type){
                                            columnProduct.innerHTML = ' '
                                            htmlLabel = ' '
                                            let uniqueElementsArr = [...order.uniqueCustomBox]
                                            uniqueElementsArr.filter(el => el.type === randomProduct.type).forEach((el,id) => {
                                                const countProducts = order.customBox.reduce((acc, curr) => curr === el ? acc + 1 : acc, 0);
                                                htmlLabel = htmlLabel +  `
                                                <div class="catalog__workshop-item"> 
                                                    <p id="catalogText" class="catalog__workshop-name">
                                                     ${el.name}
                                                    </p> 
                                                    <p class="catalog__item-price">${el.price}</p>
                                                    <p class="catalog__item-quantity">${countProducts}</p>
                                                    <button id="${el.id}" class="catalog__workshop-delete">-</button>
                                                    <button id="${el.id}" class="catalog__workshop-add">+</button>
                                                </div>
                                                `
                                             })
                    
                                       columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                                       }
                                    }                
                                    renderProduct(labelProductDrink,'drink',boxDrink)
                                    renderProduct(labelProductSweet,'sweets',boxSweet)
                                    renderProduct(labelProductChoco,'сhocolate',boxChoco)
                                }
                             )
                            }
                           
                        }
                        if(e.target.classList.contains('catalog__btn-sort--drink')){
                                containerProductsCatalog.innerHTML = ' '
                                htmlContainerGifts = ' '
                                let sortCatalogDrinks = []
                                sortCatalogDrinks.push(data.catalog.filter(obj => obj.type === 'drink'))
                                sortCatalogDrinks[0].forEach((el) => {
                                             htmlContainerGifts = htmlContainerGifts + `
                                             <div class="catalog__item">
                                                 <h4 class="catalog__item-title">${el.name}</h4>
                                                 <img class="catalog__item-img" src="" alt="">
                                                 <p class="catalog__item-descr">${el.descr}</p>
                                                 <p class="catalog__item-price">${el.price}</p>
                                                 <button class="catalog__item-link" id="${el.id}" href="#">Добавить товар в подарок</button>
                                             </div>
                                                         `
                                })
                            
                                containerProductsCatalog.insertAdjacentHTML('afterbegin',htmlContainerGifts)
                            }
                            if(e.target.classList.contains('catalog__btn-sort--choco')){
                                                htmlContainerGifts = ' '
                                                containerProductsCatalog.innerHTML = ''
                                                let sortCatalogChoco = []
                                                sortCatalogChoco.push(data.catalog.filter(obj => obj.type === 'сhocolate'))
                                                console.log(sortCatalogChoco[0])
                                                sortCatalogChoco[0].forEach((el) => {
                                                
                                                 htmlContainerGifts = htmlContainerGifts + `
                                                 <div class="catalog__item">
                                                     <h4 class="catalog__item-title">${el.name}</h4>
                                                     <img class="catalog__item-img" src="" alt="">
                                                     <p class="catalog__item-descr">${el.descr}</p>
                                                     <p class="catalog__item-price">${el.price}</p>
                                                     <button class="catalog__item-link" id="${el.id}" href="#">Добавить товар в подарок</button>
                                                 </div>
                                                             `
                                    })
                                    
                                    containerProductsCatalog.insertAdjacentHTML('afterbegin',htmlContainerGifts)
                                }
                                if(e.target.classList.contains('catalog__btn-sort--sweet')){
                                                htmlContainerGifts = ' '
                                                containerProductsCatalog.innerHTML = ''
                                                console.log(containerProductsCatalog)
                                                let sortCatalogSweets = []
                                                sortCatalogSweets.push(data.catalog.filter(obj => obj.type === 'sweets'))
                                                sortCatalogSweets[0].forEach((el) => {
                                                
                                                 htmlContainerGifts = htmlContainerGifts + `
                                                 <div class="catalog__item">
                                                     <h4 class="catalog__item-title">${el.name}</h4>
                                                     <img class="catalog__item-img" src="" alt="">
                                                     <p class="catalog__item-descr">${el.descr}</p>
                                                     <p class="catalog__item-price">${el.price}</p>
                                                     <button class="catalog__item-link" id="${el.id}" href="#">Добавить товар в подарок</button>
                                                 </div>
                                                             `
                                    })
                                   
                                    containerProductsCatalog.insertAdjacentHTML('afterbegin',htmlContainerGifts)
                                }
                            
                    })

                    let labelProductDrink = ' ';
                    let labelProductChoco = ' ';
                    let labelProductSweet = ' ';
                    let priceDrinks = 0;
                    let priceChoco = 0;
                    let priceSweets = 0;


                    containerProductsCatalog.addEventListener('click',function(e){
                        if(e.target.classList.contains('catalog__item-link')){  
                            let currentProduct = data.catalog.find(el => el.id == e.target.id)
                            order.customBox.push(currentProduct)   
                            order.uniqueCustomBox.add(currentProduct)      
                            order.priceCustomBox = order.priceCustomBox + currentProduct.price
                            price.textContent = order.priceCustomBox
                            const renderProduct = function(htmlLabel,type,columnProduct) {
                                if(currentProduct.type === type){
                                    columnProduct.innerHTML = ' '
                                    htmlLabel = ' '
                                    let uniqueElementsArr = [...order.uniqueCustomBox]
                                    uniqueElementsArr.filter(el => el.type === currentProduct.type).forEach((el,id) => {
                                        const countProducts = order.customBox.reduce((acc, curr) => curr === el ? acc + 1 : acc, 0);
                                        htmlLabel = htmlLabel +  `
                                        <div class="catalog__workshop-item"> 
                                            <p id="catalogText" class="catalog__workshop-name">
                                             ${el.name}
                                            </p> 
                                            <p class="catalog__item-price">${el.price}</p>
                                            <p class="catalog__item-quantity">${countProducts}</p>
                                            <button id="${el.id}" class="catalog__workshop-delete">-</button>
                                            <button id="${el.id}" class="catalog__workshop-add">+</button>
                                        </div>
                                        `
                                     })
            
                               columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                               }
                            }                
                            renderProduct(labelProductDrink,'drink',boxDrink)
                            renderProduct(labelProductSweet,'sweets',boxSweet)
                            renderProduct(labelProductChoco,'сhocolate',boxChoco)
                        }
                    }) 
                    function clearCort(column,type){
                        column.innerHTML = ' '
                        let uniqueElementsArray = [...order.uniqueCustomBox]
                        uniqueElementsArray = uniqueElementsArray.filter(el => el.type !== type)
                        order.uniqueCustomBox = new Set(uniqueElementsArray)
                        order.customBox = order.customBox.filter(el => el.type !== type)
                        let priceCurrent = order.customBox.reduce((acc,el) => acc = acc + el.price ,0)  
                        order.priceCustomBox = priceCurrent
                        price.textContent = priceCurrent
                    }
                    catalogWorkshop.addEventListener('click',function(e){               
                        if(e.target.id === 'clear-cort'){
                                order.uniqueCustomBox = new Set()
                                order.customBox = []
                                console.log(order.uniqueCustomBox,order.customBox)
                                boxChoco.innerHTML = ' '
                                boxSweet.innerHTML = ' '
                                boxDrink.innerHTML = ' '
                                order.priceCustomBox = 0 
                                price.textContent = 0
                                console.log('Box cleared')
                        }
                        if(e.target.id === 'clear-cort-drink'){
                            clearCort(boxDrink,'drink')
                        }
                        if(e.target.id === 'clear-cort-sweets'){
                            clearCort(boxSweet,'sweets')
                        }
                        if(e.target.id === 'clear-cort-choco'){
                            clearCort(boxChoco,'сhocolate')
                        }
                       
                        if(e.target.classList.contains('catalog__workshop-add')){
                            let currentProduct = data.catalog.find(el => el.id == e.target.id)
                            order.customBox.push(currentProduct)
                            console.log(order.customBox)
                            const renderProduct = function(htmlLabel,type,columnProduct) {
                                if(currentProduct.type === type){
                                    order.priceCustomBox = order.priceCustomBox + currentProduct.price
                                    price.textContent = order.priceCustomBox
                                    columnProduct.innerHTML = ' '
                                    htmlLabel = ' '
                                    let uniqueElementsArr = [...order.uniqueCustomBox]
                                    console.log(uniqueElementsArr)
                                    uniqueElementsArr.filter(el => el.type === currentProduct.type).forEach((el,id) => {
                                        const countProducts = order.customBox.reduce((acc, curr) => curr === el ? acc + 1 : acc, 0);
                                        htmlLabel = htmlLabel +  `
                                        <div class="catalog__workshop-item"> 
                                            <p id="catalogText" class="catalog__workshop-name">
                                             ${el.name}
                                            </p> 
                                            <p class="catalog__item-price">${el.price}</p>
                                            <p class="catalog__item-quantity">${countProducts}</p>
                                            <button id="${el.id}" class="catalog__workshop-delete">-</button>
                                            <button id="${el.id}" class="catalog__workshop-add">+</button>
                                        </div>
                                        `
                                     })
            
                               columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                               }
                            }                
                            renderProduct(labelProductDrink,'drink',boxDrink)
                            renderProduct(labelProductSweet,'sweets',boxSweet)
                            renderProduct(labelProductChoco,'сhocolate',boxChoco)
                        }
          
                     
                        if(e.target.classList.contains('catalog__workshop-delete')){
                            const currentProduct = data.catalog.find(el => el.id == e.target.id)
                            const idCurrentProduct = order.customBox.indexOf(currentProduct)
                            order.customBox.splice(idCurrentProduct,1) 
                            console.log(order.customBox)   
                            let uniqueElementsArray = [...order.uniqueCustomBox]
                            const countCurrentProduct = order.customBox.reduce((acc, curr) => curr === currentProduct ? acc + 1 : acc, 0);
                            console.log(countCurrentProduct)
                            const idCurrentProductFromUniqueArray = uniqueElementsArray.indexOf(currentProduct)                         
                            order.uniqueCustomBox = new Set(uniqueElementsArray)
                            if(countCurrentProduct === 0){
                                console.log('Элемент вырезан')
                                function renderProduct(htmlLabel,type,columnProduct) {
                                    if(currentProduct.type === type){
                                        order.priceCustomBox = order.priceCustomBox - currentProduct.price
                                        price.textContent = order.priceCustomBox
                                        columnProduct.innerHTML = ' '
                                        htmlLabel = ' '
                                        uniqueElementsArray = [...order.uniqueCustomBox]
                                        uniqueElementsArray.splice(idCurrentProductFromUniqueArray,1)
                                        uniqueElementsArray.filter(el => el.type === currentProduct.type).forEach((el,id) => {
                                            const countCurrentProduct = order.customBox.reduce((acc, curr) => curr === el ? acc + 1 : acc, 0);
                                            console.log(countCurrentProduct)
                                            htmlLabel = htmlLabel +  `
                                            <div class="catalog__workshop-item"> 
                                                <p id="catalogText" class="catalog__workshop-name">
                                                 ${el.name}
                                                </p> 
                                                <p class="catalog__item-price">${el.price}</p>
                                                <p class="catalog__item-quantity">${countCurrentProduct}</p>
                                                <button id="${el.id}" class="catalog__workshop-delete">-</button>
                                                <button id="${el.id}" class="catalog__workshop-add">+</button>
                                            </div>
                                            `
                                         })
                                        
                                   columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                                   order.uniqueCustomBox = new Set(uniqueElementsArray)
                                   }
                                }     
                                uniqueElementsArray.splice(idCurrentProductFromUniqueArray,1)
                                console.log(uniqueElementsArray)
                                renderProduct(labelProductDrink,'drink',boxDrink)
                                renderProduct(labelProductSweet,'sweets',boxSweet)
                                renderProduct(labelProductChoco,'сhocolate',boxChoco)     
                            }
                            if(countCurrentProduct >= 1){
                                function renderProduct(htmlLabel,type,columnProduct) {
                                    if(currentProduct.type === type){
                                        order.priceCustomBox = order.priceCustomBox - currentProduct.price
                                        price.textContent = order.priceCustomBox
                                        columnProduct.innerHTML = ' '
                                        htmlLabel = ' '                                   
                                        uniqueElementsArray = [...order.uniqueCustomBox]                     
                                        uniqueElementsArray.filter(el => el.type === currentProduct.type).forEach((el,id) => {
                                        const countCurrentProduct = order.customBox.reduce((acc, curr) => curr === el ? acc + 1 : acc, 0);
                                            htmlLabel = htmlLabel +  `
                                            <div class="catalog__workshop-item"> 
                                                <p id="catalogText" class="catalog__workshop-name">
                                                 ${el.name}
                                                </p> 
                                                <p class="catalog__item-price">${el.price}</p>
                                                <p class="catalog__item-quantity">${countCurrentProduct}</p>
                                                <button id="${el.id}" class="catalog__workshop-delete">-</button>
                                                <button id="${el.id}" class="catalog__workshop-add">+</button>
                                            </div>
                                            `
                                         })
                                        
                                   columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                                   }
                                }                              
                                renderProduct(labelProductDrink,'drink',boxDrink)
                                renderProduct(labelProductSweet,'sweets',boxSweet)
                                renderProduct(labelProductChoco,'сhocolate',boxChoco)     
                            }
                            // function renderProduct(htmlLabel,type,columnProduct) {
                            //     if(currentProduct.type === type){
                            //         order.priceCustomBox = order.priceCustomBox - currentProduct.price
                            //         price.textContent = order.priceCustomBox
                            //         columnProduct.innerHTML = ' '
                            //         htmlLabel = ' '
                            //         uniqueElementsArray = [...order.uniqueCustomBox]
                                    
                            //         uniqueElementsArray.filter(el => el.type === currentProduct.type).forEach((el,id) => {
                            //             const countProducts = order.customBox.reduce((acc, curr) => curr === currentProduct ? acc + 1 : acc, 0);
                            //             console.log(countProducts)
                            //             htmlLabel = htmlLabel +  `
                            //             <div class="catalog__workshop-item"> 
                            //                 <p id="catalogText" class="catalog__workshop-name">
                            //                  ${el.name}
                            //                 </p> 
                            //                 <p class="catalog__item-price">${el.price}</p>
                            //                 <p class="catalog__item-quantity">${countProducts}</p>
                            //                 <button id="${el.id}" class="catalog__workshop-delete">-</button>
                            //                 <button id="${el.id}" class="catalog__workshop-add">+</button>
                            //             </div>
                            //             `
                            //          })
                                    
                            //    columnProduct.insertAdjacentHTML('afterbegin',htmlLabel)
                            //    }
                            // }     
                            
                                              
                      
                        }                 
                    });

               