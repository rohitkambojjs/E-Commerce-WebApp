console.log("Jay Shri Ram")
const itemData = [
    {
        id: "dkfjn",
        price: 200,
        img: "https://i.pinimg.com/236x/ac/69/f7/ac69f78d6aec755f27afa28ff4a59124.jpg",
    },
    {
        id: "sthjg",
        price: 350,
        img: `https://i.pinimg.com/236x/8e/d1/c8/8ed1c8450e121ee8c92274c0c2bdc3ec.jpg`,
    },
    {
        id: "drhhj",
        price: 500,
        img: `https://i.pinimg.com/236x/32/c8/9e/32c89e42bc8210d8318fed9ea580001a.jpg`,
    },
    {
        id: "drhhj",
        price: 599,
        img: `https://i.pinimg.com/236x/3a/11/80/3a11808a664b401415712b57248e09d5.jpg`,
    },
    {
        id: "drhhj",
        price: 699,
        img: `https://i.pinimg.com/236x/c1/ce/60/c1ce60cff744e5542c88ad015842d90a.jpg`
    },
]

const brandData = []

const setItemData = (id, price, img)=>{
    itemData.push({
        id: id,
        price: price,
        img: img
    })
}

const setBrandData = (img)=>{
    brandData.push({
        img: img,
    })
}

setItemData("dfjnd", 450, "https://i.pinimg.com/236x/c9/4e/3c/c94e3c54638010cef490c472fb15dfc3.jpg")
setItemData("dfjnd", 950, "https://i.pinimg.com/236x/65/86/df/6586df3b21332c0b55d4224ad96d9d98.jpg")
setItemData("sdfhn", 300, "https://i.pinimg.com/236x/93/2f/c3/932fc307c2656f00ed9a29f3c28d956c.jpg")
setItemData("mrtlk", 700, "https://i.pinimg.com/236x/96/b4/54/96b45481bc1c53f6efa6c5bcb6e26720.jpg")
setItemData("aerwh", 550, "https://i.pinimg.com/236x/6a/4c/cd/6a4ccde50f190d5e8d688aa97bd1c230.jpg")
setItemData("mrtlk", 700, "https://i.pinimg.com/236x/de/e6/6e/dee66e8185236a23231e78db574c6bd3.jpg")
setItemData("mkhnd", 999, "https://i.pinimg.com/236x/43/80/28/43802822856a0536e5cd9e9d5df3ce68.jpg")


/*
! set Brand
*/

setBrandData("https://i.pinimg.com/236x/85/55/ba/8555baba1580d63cb3a52a1033ea4ef9.jpg")
setBrandData("https://i.pinimg.com/236x/15/9b/43/159b43938b9c77ced9b1a33e75fe50a9.jpg")
setBrandData("https://i.pinimg.com/564x/19/b8/e4/19b8e4082fa83f1616c2a11df8ff421a.jpg")
setBrandData("https://i.pinimg.com/736x/4f/2f/97/4f2f9790bc2d20eabbf50ec30df861fc.jpg")
setBrandData("https://i.pinimg.com/236x/34/c3/57/34c357ee31431b6cd13fe1ebe1d47980.jpg")
setBrandData("https://i.pinimg.com/736x/62/76/32/6276327ee9ee965cfe426561a9b14ff7.jpg")
setBrandData("https://i.pinimg.com/564x/66/f1/ed/66f1edd300d1f37b10f6922261313014.jpg")