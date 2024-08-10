class Basket {
    constructor() {
        let basket = localStorage.getItem("basket");
        if (basket == null) {
            this.basket = [];
        } else {
            this.basket = JSON.parse(basket);
        }
    }

    save() {
        localStorage.setItem("basket", JSON.stringify(this.basket));
    }


    add(product) {
        let foundProduct = this.basket.find(p => p.id == product.id);
        if (foundProduct != undefined) {
            foundProduct.quantity++;
            product = foundProduct;
        } else {
            product.quantity = 1;
            this.basket.push(product);
        }
        this.save();
        return product;
    }

    remove(product) {
        this.basket = this.basket.filter(p => p.id != product.id);
        this.save();
        basket.remplir();
    }
    changeQuantity(product, quantity) {
        let foundProduct = this.basket.find(p => p.id == product.id);
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;
            product = foundProduct;
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
            }
            this.save();
        } else {
            this.save();
        }
        return foundProduct;
    }
    getNumberProduct() {
        let number = 0;
        for (let product of this.basket) {
            number += product.quantity;
        }
        return number;
    }

    totalProduct(produit) {
        let totalproduct = 0;
        totalproduct = produit.quantity * produit.price;
        return totalproduct;
    }

    getTotalPrice() {
        let total = 0;
        for (let product of this.basket) {
            total += product.quantity * product.price;
        }
        return total;
    }

    shirt(p) {
        let span = document.querySelector('.quantity');
        span.innerHTML = p.quantity;
    }

    vider() {
        this.basket = [];
        this.save();
    }
    remplir() {

        for (let p of this.basket) {

            let b = document.querySelector(".tbody");

            let tr = document.createElement("tr");

            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");

            b.append(tr);

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);

            let prix = this.totalProduct(p);
            td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt"> </i></a >';
            td2.innerHTML = p.img;
            td3.innerHTML = '<h5>' + p.name + '</h5>';
            td4.innerHTML = '<h5>$' + p.price + '</h5>';
            td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
            td6.innerHTML = '<h5>$' + prix + '</h5>';

        }
    }

}

function plus1() {
    shirt = basket.changeQuantity(shirt, 1);

    let span = document.querySelector('.quantity');
    span.innerHTML = shirt.quantity;

}

function moins1() {
    shirt = basket.changeQuantity(shirt, -1);

    let span = document.querySelector('.quantity');
    span.innerHTML = shirt.quantity;
}

function plus2() {
    plimsolls = basket.changeQuantity(plimsolls, 1);

    let span = document.querySelector('.quantity');
    span.innerHTML = plimsolls.quantity;

}

function moins2() {
    plimsolls = basket.changeQuantity(plimsolls, -1);

    let span = document.querySelector('.quantity');
    span.innerHTML = plimsolls.quantity;
}

function plus3() {
    handbag = basket.changeQuantity(handbag, 1);

    let span = document.querySelector('.quantity');
    span.innerHTML = handbag.quantity;

}

function moins3() {
    handbag = basket.changeQuantity(handbag, -1);

    let span = document.querySelector('.quantity');
    span.innerHTML = handbag.quantity;
}

function plus4() {
    nightcap = basket.changeQuantity(nightcap, 1);

    let span = document.querySelector('.quantity');
    span.innerHTML = nightcap.quantity;

}

function moins4() {
    nightcap = basket.changeQuantity(nightcap, -1);

    let span = document.querySelector('.quantity');
    span.innerHTML = nightcap.quantity;
}

function plus5() {
    jersey = basket.changeQuantity(jersey, 1);

    let span = document.querySelector('.quantity');
    span.innerHTML = jersey.quantity;

}

function moins5() {
    jersey = basket.changeQuantity(jersey, -1);

    let span = document.querySelector('.quantity');
    span.innerHTML = jersey.quantity;
}

// stringify permet de convertir un array en chaine de caractere vu que le localstorage ne stock pas les tableaux

// parse permet de convertir une chaine en un array vu que le localStorage ne stock pas les tableaux

// filter permet de conserver les produits dont les id sont renseignés

let shirt = ({ id: "1", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 125, "img": '<img src="a.jpg" alt ="">' });
let plimsolls = ({ id: "2", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 260, "img": '<img src="b.jpg" alt ="">' });
let handbag = ({ id: "3", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 85, "img": '<img src="c.jpg" alt ="">' });
let nightcap = ({ id: "4", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 300, "img": '<img src="d.jpg" alt ="">' });
let jersey = ({ id: "5", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 400, "img": '<img src="e.jpg" alt ="">' });

let basket = new Basket();

// basket.vider();

const shirT1 = document.querySelector("#Shirt1");
const plimsollS1 = document.querySelector("#Plimsolls1");
const handbaG1 = document.querySelector("#Handbag1");
const nightcaP1 = document.querySelector("#Nightcap1");
const jerseY1 = document.querySelector("#Jersey1");
const shirT2 = document.querySelector("#Shirt2");
const plimsollS2 = document.querySelector("#Plimsolls2");
const jerseY2 = document.querySelector("#Jersey2");

let com = document.querySelector(".com");

let recto = document.querySelector(".pont-rect");

let pont111 = document.querySelector('.uno1');
let pont112 = document.querySelector('.uno2');
let pont121 = document.querySelector('.dos1');
let pont122 = document.querySelector('.dos2');
let pont131 = document.querySelector('.tres');
let pont141 = document.querySelector('.quartro');
let pont151 = document.querySelector('.cinco1');
let pont152 = document.querySelector('.cinco2');


let uno1 = document.querySelector('#Shirt1');
let uno2 = document.querySelector('#Shirt2');
let dos1 = document.querySelector('#Plimsolls1');
let dos2 = document.querySelector('#Plimsolls2');
let tres = document.querySelector('#Handbag1');
let quartro = document.querySelector('#Nightcap1');
let cinco1 = document.querySelector('#Jersey1');
let cinco2 = document.querySelector('#Jersey2');

shirT1.addEventListener("click", () => {
    shirt = basket.add(shirt);

    uno1.remove();

    pont111.removeAttribute('onmouseover');

    pont111.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");
    span.setAttribute("id", "augmente");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus1()">';
    span.innerHTML = shirt.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins1()"></i>';

    pont111.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

shirT2.addEventListener("click", () => {
    shirt = basket.add(shirt);

    uno2.remove();

    pont112.removeAttribute('onmouseover');

    pont112.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus1()">';
    span.innerHTML = shirt.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins1()"></i>'

    pont112.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

plimsollS1.addEventListener("click", () => {
    plimsolls = basket.add(plimsolls);

    dos1.remove();

    pont121.removeAttribute('onmouseover');

    pont121.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus2()">';
    span.innerHTML = plimsolls.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins2()"></i>'

    pont121.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

plimsollS2.addEventListener("click", () => {
    plimsolls = basket.add(plimsolls);

    dos2.remove();

    pont122.removeAttribute('onmouseover');

    pont122.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus2()">';
    span.innerHTML = plimsolls.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins2()"></i>'

    pont122.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

handbaG1.addEventListener("click", () => {
    handbag = basket.add(handbag);

    tres.remove();

    pont131.removeAttribute('onmouseover');

    pont131.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus3()">';
    span.innerHTML = handbag.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins3()"></i>'

    pont131.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

nightcaP1.addEventListener("click", () => {
    nightcap = basket.add(nightcap);

    quartro.remove();

    pont141.removeAttribute('onmouseover');

    pont141.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus4()">';
    span.innerHTML = nightcap.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins4()"></i>'

    pont141.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

jerseY1.addEventListener("click", () => {
    jersey = basket.add(jersey);

    cinco1.remove();

    pont151.removeAttribute('onmouseover');

    pont151.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus5()">';
    span.innerHTML = jersey.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins5()"></i>'

    pont151.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

jerseY2.addEventListener("click", () => {
    jersey = basket.add(jersey);

    cinco2.remove();

    pont152.removeAttribute('onmouseover');

    pont152.removeAttribute('onmouseout');

    let div1 = document.createElement('div');
    div1.classList.add("add-subs");
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    div2.classList.add("i1");
    div3.classList.add("i2");
    let span = document.createElement('span');
    span.classList.add("quantity");

    div1.append(div2);
    div1.append(span);
    div1.append(div3);

    div2.innerHTML = '<i class="fa-solid fa-plus" onclick="plus5()">';
    span.innerHTML = jersey.quantity;
    div3.innerHTML = '<i class="fa-solid fa-minus" onclick="moins5()"></i>'

    pont152.append(div1);
    div2.style.color = "black";
    div3.style.color = "black";
    span.style.color = "black";

});

basket.add(shirt);
basket.add(plimsolls);
basket.add(jersey);
basket.add(nightcap);
basket.add(handbag);

let a = basket.getNumberProduct();

com.innerHTML = a;

let shoesa = document.querySelector('#shoesa');
let shoesb = document.querySelector('#shoesb');
let shirta = document.querySelector('#shirta');
let shirtb = document.querySelector('#shirtb');

shoesa.addEventListener('click', () => {
    plimsolls = basket.add(plimsolls);
});
shoesb.addEventListener('click', () => {
    plimsolls = basket.add(plimsolls);
});
shirta.addEventListener('click', () => {
    shirt = basket.add(shirt);
});
shirtb.addEventListener('click', () => {
    shirt = basket.add(shirt);
});