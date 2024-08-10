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
            if (foundProduct.quantity <= 0) {
                this.remove(foundProduct);
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

            if (p.id == 1) {
                let prix = this.totalProduct(p);
                td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt" onclick="shir()"> </i></a >';
                td2.innerHTML = p.img;
                td3.innerHTML = '<h5>' + p.name + '</h5>';
                td4.innerHTML = '<h5>$' + p.price + '</h5>';
                td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
                td6.innerHTML = '<h5>$' + prix + '</h5>';

            } else if (p.id == 2) {
                let prix = this.totalProduct(p);
                td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt" onclick="plims()"> </i></a >';
                td2.innerHTML = p.img;
                td3.innerHTML = '<h5>' + p.name + '</h5>';
                td4.innerHTML = '<h5>$' + p.price + '</h5>';
                td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
                td6.innerHTML = '<h5>$' + prix + '</h5>';
            } else if (p.id == 3) {
                let prix = this.totalProduct(p);
                td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt" onclick="hand()"> </i></a >';
                td2.innerHTML = p.img;
                td3.innerHTML = '<h5>' + p.name + '</h5>';
                td4.innerHTML = '<h5>$' + p.price + '</h5>';
                td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
                td6.innerHTML = '<h5>$' + prix + '</h5>';
            } else if (p.id == 4) {
                let prix = this.totalProduct(p);
                td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt" onclick="night()"> </i></a >';
                td2.innerHTML = p.img;
                td3.innerHTML = '<h5>' + p.name + '</h5>';
                td4.innerHTML = '<h5>$' + p.price + '</h5>';
                td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
                td6.innerHTML = '<h5>$' + prix + '</h5>';
            } else if (p.id == 5) {
                let prix = this.totalProduct(p);
                td1.innerHTML = '<a href="#"> <i class ="fa fa-trash-alt" onclick="jers()"> </i></a >';
                td2.innerHTML = p.img;
                td3.innerHTML = '<h5>' + p.name + '</h5>';
                td4.innerHTML = '<h5>$' + p.price + '</h5>';
                td5.innerHTML = '<input class="w-25 pl-1" type ="number" value="1">';
                td6.innerHTML = '<h5>$' + prix + '</h5>';
            }


        }
    }

}

// stringify permet de convertir un array en chaine de caractere vu que le localstorage ne stock pas les tableaux

// parse permet de convertir une chaine en un array vu que le localStorage ne stock pas les tableaux

// filter permet de conserver les produits dont les id sont renseignés


let basket = new Basket();

basket.remplir();

let b = document.querySelector(".tbody");

let shirt = ({ id: "1", "name": "shoes", "price": 125, "img": '<img src="a.jpg" alt ="">' });
let plimsolls = ({ id: "2", "name": "montre", "price": 260, "img": '<img src="b.jpg" alt ="">' });
let handbag = ({ id: "3", "name": "sac", "price": 85, "img": '<img src="c.jpg" alt ="">' });
let nightcap = ({ id: "4", "name": "habit", "price": 300, "img": '<img src="d.jpg" alt ="">' });
let jersey = ({ id: "5", "name": "bonnet", "price": 400, "img": '<img src="e.jpg" alt ="">' });

const commande = document.querySelector(".commande");

console.log(basket.getTotalPrice());



function night() {
    basket.remove(nightcap);
    alert('bonnet');
    basket.removeElement(b);
    basket.remplir();
    location.reload();
}

function plims() {
    basket.remove(plimsolls);
    alert('chaussures');
    basket.removeElement(b);
    basket.remplir();
    location.reload();
}

function hand() {
    basket.remove(handbag);
    alert('sac');
    basket.removeElement(b);
    basket.remplir();
    location.reload();
}

function jers() {
    basket.remove(jersey);
    alert('pullover');
    basket.removeElement(b);
    basket.remplir();
    location.reload();
}

function shir() {
    alert('shirt');
    basket.remove(shirt);
    basket.removeElement(b);
    basket.remplir();
    location.reload();
}

vide.addEventListener("click", () => {
    basket.vider();
});