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

let basket = new Basket();

// basket.vider();

let shirt = ({ id: "1", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 125, "img": '<img src="a.jpg" alt ="">' });
let plimsolls = ({ id: "2", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 260, "img": '<img src="b.jpg" alt ="">' });
let handbag = ({ id: "3", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 85, "img": '<img src="c.jpg" alt ="">' });
let nightcap = ({ id: "4", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 300, "img": '<img src="d.jpg" alt ="">' });
let jersey = ({ id: "5", "quantity": 0, "name": "Bonnet unisexe en acrylique, disponible en plusieurs couleurs. Doublure intérieure en polaire pour un confort optimal. Taille unique.<br>Bonnet en laine mérinos biologique, certifié Oeko-Tex. Pompon amovible. Lavable en machine", "price": 400, "img": '<img src="e.jpg" alt ="">' });


let shirti1 = document.querySelector('#shirti1');
let shirti2 = document.querySelector('#shirti2');
let shirti3 = document.querySelector('#shirti3');
let shirti4 = document.querySelector('#shirti4');

shirti1.addEventListener('click', () => {
    alert("i1");
    shirt = basket.add(shirt);
});
shirti2.addEventListener('click', () => {
    alert("i2");
    plimsolls = basket.add(plimsolls);
});
shirti3.addEventListener('click', () => {
    alert("i3");
    handbag = basket.add(handbag);
});
shirti4.addEventListener('click', () => {
    alert("i4");
    jersey = basket.add(jersey);
});