const menu = document.querySelector(".nav__menu");//<div class="nav__menu">
const toggle = document.querySelector(".nav__navbar")//menu nav
menu.addEventListener("click",()=>{
    toggle.classList.toggle("nav__active");
})// click de menu desplegable

const nav = document.querySelector(".nav");
window.addEventListener("scroll",()=>{
    let scrollear = window.scrollY; // scrollY posicion en el eje Y
    (scrollear > 50)? nav.style.backgroundColor = "black" : nav.style.backgroundColor = "transparent";
 // si el scrollear supera los 200px el color del fondo es negro
// de lo contrario trasparente

})


class Computer{
    constructor(name,ram,disc,graphis,modelo,processor){
        this.name = name;
        this.ram = ram;
        this.disc = disc;
        this.graphis = graphis;
        this.modelo = modelo;
        this.processor = processor;
    }
}

class Laptop extends Computer{
    constructor(name,ram,disc,graphis,modelo,processor,mark,screen,resolution,price){
        super(name,ram,disc,graphis,modelo,processor);
        this.mark  = mark;
        this.screen = screen;
        this.resolution = resolution;
        this.price = price;
    }
}
// name,ram,disc,graphis,modelo,processor,mark,screen,resolution,price
const  lenovo17ach6h = new Laptop("LENOVO LEGION 5","32 GB","1TB SSD","GEFORCE RTX3070","17ACH6H","RYZEN 7 5800H","LENOVO",17.3,"FULL HD","$480.000");
const lenovo15ach6 = new Laptop("LENOVO LEGION S7","32 GB","1TB SSD","GEFORCE RTX3060","15ACH6","RYZEN 9 5900HX","LENOVO",15.6,"FULL HD","$460.000");
const lenovoIdeapad15itl05 = new Laptop("LENOVO IDEAPAD 5","16 GB","512GB SSD","GEFORCE MX450","15ITL05","INTEL CORE I7","LENOVO",15.6,"FULL HD","$230.000");
const hp15zef2000 = new Laptop("HP","16 GB","512GB SSD","AMD RADEON","15Z-EF2000","RYZEN 7 5700U","HP",15.6,"FULL HD","$200.000");
const hpVictus15fb = new Laptop("HP VICTUS","16 GB","512GB SSD","GEFORCE RTX3050TI","15-FB0075CL","RYZEN 7 5800H","HP",15.6,"FULL HD","$290.000")
const hpOmenCk0xxx = new Laptop("HP OMEN","32 GB","1TB SSD","GEFORCE RTX3060","CK0XXX","INTEL CORE I7","HP",17.3,"144HZ","$450.000")
const msiLeopard10sdk = new Laptop("MSI LEOPARD","16 GB","512GB SSD","GEFORCE GTX166TI","10SDK","INTEL CORE I7 10TH","MSI",17.6,"144HZ","$300.000")
const msiCrosshairA11uck = new Laptop("MSI CROSSHAIR","32 GB","512GB SSD","GEFORCE RTX3050","A11UCK-646","INTEL CORE I7","MSI",17.3,"FULL HD","$365.000");
const msiSword15 = new Laptop("MSI SWORD","32 GB","512GB SSD","GEFORCE RTX3050TI","A11UD","INTEL CORE I7","MSI",17.3,"144HZ","$365.000");
const asusX512ja = new Laptop("ASUS VBGB","20 GB","256GB SSD","INTEL IRIS","X512JA","INTEL CORE I7 1065","ASUS",15.6,"FULL HD","$205.000");
const asusTufFx70 = new Laptop("ASUS TUF","16 GB","512GB SSD","GEFORCE RTX3050TI","FX706HE","INTEL CORE I5","ASUS",17.3,"144HZ","$270.000");
const asusZeQ4 = new Laptop("ASUS ZENBOOK","8 GB","256GB SSD","GEFORCE MX450","Q408UG","RYZEN 5 5500U","ASUS",14,"FULL HD","$200.000")
const dellLatitude73 = new Laptop("DELL LATITUDE","16 GB","512GB SSD","INTEL IRIS","7390","INTEL CORE I7 8TH","DELL",13.3,"FULL HD","$190.000")
const acerPredator300 = new Laptop("ACER PREDATOR","16 GB","512 GB SSD","GEFORCE RTX3060","HELIOS300","INTEL CORE I7 11800H","ACER",15.6,"FULL HD","$399.000")
const dellInspiron35 = new Laptop("DELL INSPIRON","16 GB","256GB SSD","INTEL IRIS","3511","INTEL CORE I5 10TH","DELL",15.6,"FULL HD","$180.000")

let computers = [lenovo15ach6,hp15zef2000,lenovoIdeapad15itl05,lenovo17ach6h,hpVictus15fb,hpOmenCk0xxx,msiLeopard10sdk,msiSword15,asusX512ja,asusTufFx70,asusZeQ4,dellLatitude73,msiCrosshairA11uck,acerPredator300,dellInspiron35];
let buys = [];
const containerPc = document.querySelector(".contenedor__pc");

let processors = ["RYZEN 9","RYZEN 7","RYZEN 5","RIZEN 3","INTEL CORE I7","INTEL CORE I5","INTEL CORE I7 10TH","INTEL CORE I7 8TH","INTEL CORE I5 10TH"];
let graphi = ["GEFORCE RTX","GEFORCE GTX","INTEL IRIS","AMD RADEON","GEFORCE MX"];
//necesito una funcion que me corte los nombres
function listImg(name,list){ //la funcion recibe un nombre y busca en su lista si uno coincide
    let choose;
    for(let one of list){
        if(name.includes(one)){
            choose = one;
        }
    }
    return choose;
}

function action(list){
    list.forEach((e)=>{
        const newContainer = document.createElement("DIV");//crear contenedor div que contendra las notebooks
        newContainer.classList.add("contenedor__laptop")
        newContainer.classList.add(`contenedor__laptop--${e.mark}`);
        newContainer.innerHTML= `
            <img class="contenedor__img" src="./img/laptop/${e.mark}/${e.modelo}.png" alt="${e.modelo}">
            <div class="contenedor__list">
                <div class="contenedor__items">
                    <h4 class="contenedor__h4">${e.name} ${e.modelo}</h4>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo" src="./img/logos/ram.png" alt="memoria ram">
                    <p class="contenedor__p">${e.ram}</p>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo" src="./img/logos/ssd.png" alt="disco">
                    <p class="contenedor__p">${e.disc}</p>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo" src="./img/logos/widescreen.png" alt="pantalla">
                    <p class="contenedor__p">${e.screen}</p>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo" src="./img/logos/${listImg(e.processor,processors)}.jpg" alt="procesador">
                    <p class="contenedor__p">${e.processor}</p>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo" src="./img/logos/${listImg(e.graphis,graphi)}.jpg" alt="graficos">
                    <p class="contenedor__p">${e.graphis}</p>
                </div>
                <div class="contenedor__items">
                    <img class="contenedor__logo contenedor__logo--expancion" src="./img/logos/${e.resolution}.png" alt="resolucion">
                </div>
            </div>
            <div class="contenedor__page">
                <p class="contenedor__price">${e.price} pesos</p>
            </div>
            <button class="contenedor__button" id="${e.modelo}">agregar a carrito</button>
        `;
        containerPc.appendChild(newContainer);//se agrega cada una de las notebooks
        const section = document.getElementById(`${e.modelo}`);
        section.addEventListener("click",()=>{
            buys.push(e);//agrega elemento al carrito
            cart.innerHTML = buys.length;//cambia el contenido del contador carrito cada ves que se produce un evento en el boton
            let save = JSON.stringify(buys);
            localStorage.setItem("mis compras",save);
        });
    });
}




const check = document.querySelector(".form__check");
check.innerHTML =`
<div class="form__select">
    <label class="form__label" for="LENOVO">LENOVO (${seachCant("LENOVO")})</label>
    <input type="checkbox" class="form__ckecked" name="LENOVO" value="LENOVO" id="LENOVO">
</div>
<div class="form__select">
    <label class="form__label" for="HP">HP (${seachCant("HP")})</label>
    <input type="checkbox" class="form__ckecked" name="HP" value="HP" id="HP">
</div>
<div class="form__select">
    <label class="form__label" for="MSI">MSI (${seachCant("MSI")})</label>
    <input type="checkbox" class="form__ckecked" name="MSI" value="MSI" id="MSI">
</div>
<div class="form__select">
    <label class="form__label" for="ACER">ACER (${seachCant("ACER")})</label>
    <input type="checkbox" class="form__ckecked" name="ACER" value="ACER" id="ACER">
</div>
<div class="form__select">
    <label class="form__label" for="DELL">DELL (${seachCant("DELL")})</label>
    <input type="checkbox" class="form__ckecked" name="DELL" value="DELL" id="DELL">
</div>
`
function seachCant(names){
    let cant = computers.filter((e)=> e.mark === names);
    return cant.length;
}

action(computers);

let cart = document.querySelector(".nav__p")//selecciona la etiqueta contador de carrito
let number = localStorage.getItem("mis compras");
cart.innerHTML = JSON.parse(number).length;

let  option = document.querySelectorAll(".form__ckecked");
let  stop = true;
let hijos = true;
for(let caption of option){
    caption.addEventListener("click",()=>{
        if(caption.checked == true){
            let arrayBuy = computers.filter((e)=> e.mark == caption.value);
            if(stop){
                let borrar = document.querySelectorAll(".contenedor__laptop");
                for(let y of borrar){
                    containerPc.removeChild(y);
                } 
            }
            stop = false;
            action(arrayBuy);
        }else{
            const reload = document.querySelectorAll(`.contenedor__laptop--${caption.value}`)
            for(let o of reload){
                containerPc.removeChild(o);
            }
         
        }
    })
}

