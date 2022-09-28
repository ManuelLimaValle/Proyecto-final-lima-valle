//***************************************************************CURRUSEL********************************** */








// ************************************************* NOTEBOOK **************************************************
let cartShopping = [];

class Computadora{
    constructor(name,modelo,mark,color,ram,processor,graphics,screen,disc,precio){
        this.name = name;
        this.modelo = modelo;
        this.mark = mark;
        this.color = color;
        this.ram = ram;
        this.processor = processor;
        this.graphics = graphics;
        this.screen = screen;
        this.disc = disc;
        this.precio = precio;
    }
}

const lenovoIdeapadFlex5 = new Computadora("Ideapad flex 5","1165G7","LENOVO","Gris",16,"INTEL CORE I7","INTEL IRIS",15.6,"512 GB",195000);

const hpPavilion = new Computadora("Hp Pavilion","13BB9X","HP","Blanco",8,"INTEL CORE I7","INTEL IRIS",13.3,"512 GB",190000);

const msiThin = new Computadora("Msi Thin","GF65THIN","MSI","Negro",16,"INTEL CORE I7 10TH GEN","GEFORCE GTX 6GB 1660",15.6,"512 GB",270000);

const hpEnvy = new Computadora("Hp Envy","15-EP1065","HP","Blanco",32,"INTEL CORE I7","GEFORCE RTX 3060",15.6,"1 TB",380000);

const lenovoLegionY7 = new Computadora("LENOVO LEGIÓN Y740","Y740","LENOVO","Negro",32,"INTEL CORE I7 9TH GEN","GEFORCE RTX 8GB 2070",15.6,"256 GB",395000);

const asusVivobookX7 = new Computadora("ASUS VIVOBOOK","X712JA","ASUS","Blanco",20,"INTEL CORE I5 10TH GEN","INTEL IRIS",17.3,"256 GB",180000);

const lenovoIdeapad14 = new Computadora("LENOVO IDEAPAD","14IML05","LENOVO","Blanco",20,"INTEL CORE I5 10TH GEN","INTEL IRIS",14,"512 GB",155000);

const msiStealth15M = new Computadora("MSI STEALTH 15M A11UEKV","A11UEKV","MSI","Gris",32,"INTEL CORE I7","GEFORCE RTX 3060 6GB",15.6,"1 TB",415000);

const mainDiv = document.querySelector(".container__product");

let computers = [lenovoIdeapadFlex5,hpPavilion,msiThin,hpEnvy,lenovoLegionY7,asusVivobookX7,lenovoIdeapad14,msiStealth15M];

const fragmen = document.createDocumentFragment();

const imagen = (item1,item2) =>{ return `<img src ="./img/logos/${item1}.${item2}" class="container__logo">`}


/* const p = document.querySelectorAll(".conteiner__check");
let array = [];
let recorrido = [lenovoIdeapad14];
for(let compu of p ){
    compu.addEventListener("click",()=>{
        if(compu.checked == true){
            array.push(compu.value);
            array.forEach((element)=>{
                let f = computers.filter((e)=>element == e.mark);
                recorrido.concat(f);
                console.log(recorrido);
            })
        }else{
            let n = array.indexOf(compu.value);
            array.splice(n,2)
            console.log("borre");
        }
    })
} */

computers.forEach((produc)=>{
    const container = document.createElement("DIV");
    container.classList.add("container__div")
    container.innerHTML =`
    <ul class="container__ul">
        <li class="container__li">
            <h4 class="container__h2">${produc.name}</h4>
        </li>
        <li class="container__li">
            <img src="./img/logos/ssd.png" class="container__logo">
            <span class="container__span">${produc.disc} </span>
        </li>
        <li class="container__li">
            <img src="./img/logos/ram.png" class="container__logo">
            <span class="container__span">${produc.ram} GB </span>
        </li>
        <li class="container__li">
            <img src="./img/logos/widescreen.png" class="container__logo">
            <span class="container__span">${produc.screen}</span>
        </li>
        <li class="container__li">
            <img src="./img/logos/${produc.processor}.jpg" class="container__logo">
            <span class="container__span">${produc.processor} </span>
        </li>
        <li class="container__li">
            <img src="./img/logos/${produc.graphics.substring(0,11)}.jpg" class="container__logo">
            <span class="container__span">${produc.graphics} </span>
        </li>
    </ul>
    <p class="container__p">${produc.precio}$</p>
    <img src="../img/notebook/${produc.modelo}.png" class="container__img" alt="${produc.modelo}">
    <button class="container__button" id="${produc.modelo}">agregar a carrito</button>
    `;
    fragmen.appendChild(container);
    mainDiv.appendChild(fragmen);
    const botton = document.getElementById(produc.modelo);
    botton.addEventListener("click",()=>{
        addCard(produc.modelo);
    })
});

const addCard = (idType)=>{
    const item = computers.find((e) => e.modelo === idType)
    cartShopping.push(item);
    number.innerText = cartShopping.length;
}



const navbar = document.querySelector(".nav__menu");
const menu = document.querySelector(".nav__ul")

navbar.addEventListener("click",() => {menu.classList.toggle("nav__active")});

let number = document.querySelector(".nav__number");
number.innerHTML = cartShopping.length;


