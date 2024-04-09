// products 

let arr = [
    {
        name:'Apple iPhone 14 ; Дисплей: 6.1" OLED - 1170 x 2532 ; Чип: Apple A15 Bionic ; Камера: 2 (12 MP + 12 MP) ; Батарея: 3279 мАч ; OS: iOS 17.4 Вес 170г',
        imgSrc:"https://sun9-45.userapi.com/impg/mUpDYjjkYYOb3cM4UjoXdc9OUEWMEHdRjPmLkg/dYQxMQG43j0.jpg?size=2500x1875&quality=96&sign=4ebb837c26c608a2b68880e2dc61c17b&type=album",
        price: 1000,
        installment:"168 634сум/мес",
        color:"grey"
    },
    {
        name:'Samsung Galaxy S9 · Дисплей: 5.8" Super AMOLED - 1440 x 2960 · Камера: 1 (12 MP) · Батарея: 3000 мАч · OS: Android 10 · Вес: 163 г.',
        imgSrc:"https://images-na.ssl-images-amazon.com/images/I/61QLEFK6lEL._SL1280_.jpg",
        price: 400,
        installment:"168 634сум/мес",
        color:"black",
    },
    {
        name:'Дисплей: 6.67" AMOLED - 1080 x 2400 · Чип: MediaTek Dimensity 1080 · Камера: 3 (50 MP + 8 MP + 2 MP) · Батарея: 5000 мАч · OS: Android 14',
        imgSrc:"https://cdn1.ozone.ru/s3/multimedia-3/6581763399.jpg",
        price: 300,
        installment:"168 634сум/мес",
        color:"red",
    },
    {
        name:'Apple iPhone XS · Дисплей: 5.8" OLED - 1125 x 2436 · Чип: Apple A12 Bionic · Камера: 2 (12 MP + 12 MP) · Батарея: 2658 мАч · OS: iOS 17.4 Вес: 177 г.',
        imgSrc:"https://images-cdn.ubuy.ae/652952c569d2db4a46513806-restored-iphone-xs-max-64gb-gold.jpg",
        price: 400,
        installment:"168 634сум/мес",
        color:"gold",
    }
];


const productsList = document.getElementById('productsList');

arr.forEach(({installment,name,price,imgSrc,color})=>{
    productsList.innerHTML += `
    <li class="list-item" style="width:240px; height:350px;">
      <a href="#" style="display:flex; flex-direction:column; gap:10px;">
        <img src=${imgSrc} alt="product img" width = "200" height = "200">
        <p style="font-size:13px;">${name}</p>
        <mark><p style="font-size:13px;" >${installment}</p></mark>
        <p>${price}$</p>
        <span style="background-color:${color}; border-radius:25px;"class="color"></span>
      </a>
    <li>`
   
});

const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeImg =document.getElementById("darkModeImg")
 
darkModeBtn.addEventListener('click',()=>{

    if(document.body.classList.contains("light")){
        document.body.classList.remove("light");
        darkModeBtn.lastChild.textContent ="Light Mode";
        darkModeImg.setAttribute('src','images/day-mode.png')
    } else{
        document.body.classList.add('light');
        darkModeBtn.lastChild.textContent = "Dark Mode"
        darkModeImg.setAttribute('src','images/night-mode.png')
    }
  
});
