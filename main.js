
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

const lenovoIdeapadFlex5 = new Computadora("Ideapad flex 5","1165G7","LENOVO","Gris",16,"intel core i7","INTEL IRIS",15.6,512,195000);

const hpPavilion = new Computadora("Hp Pavilion","13BB9X","Hp","Blanco",8,"intel core i7","INTEL IRIS",13.3,512,190000);

const msiThin = new Computadora("Msi Thin","GF65THIN","MSI","Negro",16,"intel i7 10TH GEN","GEFORCE GTX 6GB 1660",15.6,512,270000);

const hpEnvy = new Computadora("Hp Envy","15-EP1065","HP","Blanco",32,"intel core i7","GEFORCE RTX 3060",15.6,1,380000);

const lenovoLegionY7 = new Computadora(" LEGIÓN Y740","Y740","LENOVO","Negro",32,"intel core i7 9th Gen","GEFORCE RTX 8GB 2070 ",15.6,256,395000);

const mainDiv = document.querySelector(".container");

let computers = [lenovoIdeapadFlex5,hpPavilion,msiThin,hpEnvy,lenovoLegionY7];
const fragmen = document.createDocumentFragment();
let carrito = [];

function createContainer(notebook){
    let container = document.createElement("DIV");
    container.classList.add("container__div")
    let img = document.createElement("IMG");
    img.setAttribute("src",`../img/notebook/${notebook.modelo}.png`);
    img.classList.add(`container__img`);
    createList(container,notebook);
    let button = document.createElement("BUTTON");
    button.innerHTML="agregar a carrito";
    button.classList.add("container__button")
    button.addEventListener("click",()=>{addCart(notebook);})
    let price = document.createElement("P");
    price.innerHTML = `${notebook.precio} $`
    price.classList.add("container__p");
    container.appendChild(price);
    container.appendChild(img);
    container.appendChild(button);
    fragmen.appendChild(container);
}

function createList(computer,note){
        let list = document.createElement("UL");
        list.classList.add("container__ul");
        for(let i=0;i<6;i++){
            let items = document.createElement("LI");
            items.classList.add("container__li");
            list.appendChild(items);
        }
        list.children[0].innerHTML = `<h2>${note.name}</h2>`;
        list.children[1].innerHTML = `${imagen('ssd','png')}<span class="container__span">${note.disc} GB</span>`;
        list.children[2].innerHTML = `${imagen('ram','png')}<span class="container__span">${note.ram} GB</span>`;
        list.children[3].innerHTML = `${imagen('widescreen','png')}<span class="container__span">${note.screen}</span>`;
        list.children[4].innerHTML = `${imagen(`${note.processor}`,'jpg')}<span class="container__span">${note.processor}</span>`;
        list.children[5].innerHTML = `${imagen(note.graphics.substring(0,11),'jpg')}<span class="container__span">${note.graphics}</span>`
        computer.appendChild(list);
}

function addCart(item){
    carrito.push(item);
    console.log(carrito);
}

const imagen = (item1,item2) =>{ return `<img src ="./img/logos/${item1}.${item2}" class="container__logo">`}

for(let laptop of computers){
    createContainer(laptop);
}

mainDiv.appendChild(fragmen);

const navbar = document.querySelector(".nav__menu");
const menu = document.querySelector(".nav__ul")

navbar.addEventListener("click",() => {menu.classList.toggle("nav__active")});

console.log(carrito.length)


let number = document.querySelector(".nav__number");
number.innerHTML = carrito.length;


