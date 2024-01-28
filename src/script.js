console.log('Jay SiyaRam')

const sImage1 = document.querySelectorAll('#sImage1')
const sImage2 = document.querySelectorAll('#sImage2')
const sImage3 = document.querySelectorAll('#sImage3')

const shopItem = document.querySelector('.shop-item')
const bestBrand = document.querySelector('.best-brand') 

const genrateItem = ()=>{
    return shopItem.innerHTML = itemData.map((x)=>{
        let {id,price,img} = x
        return `
            <div class="item-box" id="${id}">
                <img src="${img}" alt="">
                <h1 class="price">$ ${price}</h1>
                <button class="add-cart">Add Cart</button>
            </div>`
    }).join("")
}


const genrateBrand = ()=>{
    return bestBrand.innerHTML = brandData.map((x)=>{
        let {img} = x
        return `
            <li>
                <img src="${img}" alt="">
            </li>`
    }).join("")
}

genrateItem()

genrateBrand()
