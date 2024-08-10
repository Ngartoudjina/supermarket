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
        } else {
            product.quantity = 1;
            this.basket.push(product);
        }
        this.save();
    }

    remove(product) {
        this.basket = this.basket.filter(p => p.id != product.id);
        this.save();
        // basket.remplir();
    }
    changeQuantity(product, quantity) {
        let foundProduct = this.basket.find(p => p.id == product.id);
        if (foundProduct != undefined) {
            foundProduct.quantity += quantity;
            this.save();
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
                this.save();
            }
        } else {
            this.save();
        }
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

    vider() {
        this.basket = [];
        this.save();
    }

    removeElement(container) {
        // let b = container.removeChild(product);
        while (container.firstChild) {
            let b = container.removeChild(container.firstChild);
        }
    }

    remplir() {

        for (let p of this.basket) {

            let b = document.querySelector("#milieu-add");

            let div1 = document.createElement("div");

            let div2 = document.createElement("div");
            div2.classList.add("suppression");

            let a = document.createElement("a");

            let h6 = document.createElement("h6");

            // h5.style.color = "white";

            let div3 = document.createElement("div");
            div3.classList.add("texto");

            let div4 = document.createElement("div");
            div4.classList.add("bresh");

            let div5 = document.createElement("div");
            div5.classList.add("img-card");

            let div6 = document.createElement("div");
            div6.classList.add("info-img");

            let div7 = document.createElement("div");
            div7.classList.add("Add");

            let div8 = document.createElement("div");
            div8.classList.add("add-subs");

            let div9 = document.createElement("div");
            div9.classList.add("i");

            let div12 = document.createElement("div");
            div12.classList.add("i");

            let span = document.createElement("span");
            span.classList.add("quantity");

            let div10 = document.createElement("div");
            div10.classList.add("total");
            let div11 = document.createElement("div");

            let span2 = document.createElement("span");

            b.append(div1);

            div1.append(div2);
            div2.append(a);
            div2.append(h6);
            div1.append(div3);
            div1.append(div4);
            div4.append(div5);
            div4.append(div6);
            div1.append(div7);
            div7.append(div8);
            div8.append(div9);
            div8.append(span);
            div8.append(div12);
            div7.append(div10);
            div10.append(div11);
            div10.append(span2);

            if (p.id == 1) {
                h6.innerHTML = "panier entier";
                h6.style.color = "white";
                a.href = "#";
                a.innerHTML = "SUPPRIMER";
                a.style.color = "#199dad";
                div3.innerHTML = "Expédition des produits depuis le SuperMarché";
                div5.innerHTML = p.img;
                div6.innerHTML = '<p>' + p.name + '</p>';

                div9.innerHTML = '<i class="fa-solid fa-plus" onclick="plus1()"></i>';
                span.innerHTML = p.quantity;
                div12.innerHTML = '<i class="fa-solid fa-minus" onclick="moins1()"></i>'

                div11.innerHTML = "Total";
                span2.innerHTML = this.totalProduct(p);


            } else if (p.id == 2) {
                h6.innerHTML = "panier entier";
                h6.style.color = "white";
                a.href = "#";
                a.innerHTML = "SUPPRIMER";
                a.style.color = "#199dad";
                div3.innerHTML = "Expédition des produits depuis le SuperMarché";
                div5.innerHTML = p.img;
                div6.innerHTML = '<p>' + p.name + '</p>';

                div9.innerHTML = '<i class="fa-solid fa-plus" onclick="plus2()"></i>';
                span.innerHTML = p.quantity;
                div12.innerHTML = '<i class="fa-solid fa-minus" onclick="moins2()"></i>'

                div11.innerHTML = "Total";
                span2.innerHTML = this.totalProduct(p);

            } else if (p.id == 3) {
                h6.innerHTML = "panier entier";
                h6.style.color = "white";
                a.href = "#";
                a.innerHTML = "SUPPRIMER";
                a.style.color = "#199dad";
                div3.innerHTML = "Expédition des produits depuis le SuperMarché";
                div5.innerHTML = p.img;
                div6.innerHTML = '<p>' + p.name + '</p>';

                div9.innerHTML = '<i class="fa-solid fa-plus" onclick="plus3()"></i>';
                span.innerHTML = p.quantity;
                div12.innerHTML = '<i class="fa-solid fa-minus" onclick="moins3()"></i>'

                div11.innerHTML = "Total";
                span2.innerHTML = this.totalProduct(p);

            } else if (p.id == 4) {
                h6.innerHTML = "panier entier";
                h6.style.color = "white";
                a.href = "#";
                a.innerHTML = "SUPPRIMER";
                a.style.color = "#199dad";
                div3.innerHTML = "Expédition des produits depuis le SuperMarché";
                div5.innerHTML = p.img;
                div6.innerHTML = '<p>' + p.name + '</p>';

                div9.innerHTML = '<i class="fa-solid fa-plus" onclick="plus4()"></i>';
                span.innerHTML = p.quantity;
                div12.innerHTML = '<i class="fa-solid fa-minus" onclick="moins4()"></i>'

                div11.innerHTML = "Total";
                span2.innerHTML = this.totalProduct(p);

            } else if (p.id == 5) {
                h6.innerHTML = "panier entier";
                h6.style.color = "white";
                a.href = "#";
                a.innerHTML = "SUPPRIMER";
                a.style.color = "#199dad";
                div3.innerHTML = "Expédition des produits depuis le SuperMarché";
                div5.innerHTML = p.img;
                div6.innerHTML = '<p>' + p.name + '</p>';

                div9.innerHTML = '<i class="fa-solid fa-plus" onclick="plus5()"></i>';
                span.innerHTML = p.quantity;
                div12.innerHTML = '<i class="fa-solid fa-minus" onclick="moins5()"></i>'

                div11.innerHTML = "Total";
                span2.innerHTML = this.totalProduct(p);

            }


        }
    }

}

// stringify permet de convertir un array en chaine de caractere vu que le localstorage ne stock pas les tableaux

// parse permet de convertir une chaine en un array vu que le localStorage ne stock pas les tableaux

// filter permet de conserver les produits dont les id sont renseignés


let basket = new Basket();

let b = document.querySelector(".milieu-add");

let price = document.querySelector(".price");

// b.innerHTML = '';

basket.remplir();

let shirt = ({ id: "1", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 125, "img": '<img src="a.jpg" alt ="">' });
let plimsolls = ({ id: "2", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 260, "img": '<img src="b.jpg" alt ="">' });
let handbag = ({ id: "3", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 85, "img": '<img src="c.jpg" alt ="">' });
let nightcap = ({ id: "4", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 300, "img": '<img src="d.jpg" alt ="">' });
let jersey = ({ id: "5", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 400, "img": '<img src="e.jpg" alt ="">' });


function plus1() {
    basket.changeQuantity(shirt, 1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function moins1() {
    basket.changeQuantity(shirt, -1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function plus2() {
    basket.changeQuantity(plimsolls, 1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function moins2() {
    basket.changeQuantity(plimsolls, -1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function plus3() {
    basket.changeQuantity(handbag, 1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function moins3() {
    basket.changeQuantity(handbag, -1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function plus4() {
    basket.changeQuantity(nightcap, 1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function moins4() {
    basket.changeQuantity(nightcap, -1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function plus5() {
    basket.changeQuantity(jersey, 1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
        p = p;
    }
    basket.remplir();
    location.reload();
}

function moins5() {
    basket.changeQuantity(jersey, -1);
    let b = document.querySelector(".milieu-add");
    let i;
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
    }
    basket.remplir();
    location.reload();
}

price.innerHTML = basket.getTotalPrice();

a = document.querySelector("delete");

a.addEventListener("click", () => {
    for (i = 0; i < basket.length; i++) {
        b.removeChild("div");
    }
    basket.vider();
    b.innerHTML = "";
    location.reload();
})

let com = document.querySelector(".com");

let numb = basket.getNumberProduct();

com.innerHTML = numb;