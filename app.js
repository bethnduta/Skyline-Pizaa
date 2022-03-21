let searchbtn = document.querySelector('#search');
let searchform = document.querySelector('.head.search-bar');

searchbtn.onclick = () => {
    searchfrm.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.head .navbar');
menu.onclick = () => {
    menu.classList.toggle('active');
    searchfrm.classList.remove('active');

    // create object constructor for pizza orders
class orderPizza {
    constructor(size, crust, toppings, numberOfPizza, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};
// create prototypes that calculates prices
orderPizza.prototype.getSizePrice = function () {
    if (this.size === "small") {
        return 500;
    } else if (this.size === "medium") {
        return 900;
    } else if (this.size === "large") {
        return 1200;
    }else { return "choose an option"
}};
orderPizza.prototype.getCrustPrice = function () {
    if (this.crust === "Wheat") {
        return 150;
    } else if (this.crust === "Classic") {
        return 120;
    } else if (this.crust === "Cheese") {
        return 250;
    } else if (this.crust === "Thin") {
        return 100;
    }else{ return "Choose an option"
}};
orderPizza.prototype.getToppingsPrice = function () {
    if (this.toppings === "Pepperoni") {
        return 150;
    } else if (this.toppings === "Mushroom") {
        return 100;
    } else if (this.toppings === "Extra") {
        return 120;
    } else if (this.toppings === "Sausage") {
        return 150;
    } else if (this.toppings === "Onions") {
        return 50;
    } else if (this.toppings === "Olives") {
        return 80;
    } else if (this.toppings === "Green") {
        return 50;
    } else if (this.toppings === "Garlic") {
        return 50;
    }else{return "Choose an option"
}};
orderPizza.prototype.priceOfDelivery = function () {
    if (this.delivery === "Hand") {
        return 0;
    } else if (this.delivery === "Remote") {
        return Math.floor(Math.random()*200);
    }
};
// get user values
$(document).ready(function () {
    $(".custom").submit(function (event) {
        event.preventDefault();
        var size = $("#inputSize option:selected").val();
        var crust = $("#inputCrust option:selected").val();
        var toppings = $("#inputToppings option:selected").val();
        var numberOfPizza = parseInt($("#number").val());
        var delivery = $("#inputDelivery option:selected").val();

        var newOrderPizza = new orderPizza(size, crust, toppings, numberOfPizza, delivery);
        var totalPrice = (newOrderPizza.getSizePrice()+newOrderPizza.getCrustPrice()+newOrderPizza.getToppingsPrice())*numberOfPizza;

        window.alert("Hi! You have ordered "+numberOfPizza+ " " +size+ " pizzas, with a " + crust +" crust and "+toppings + " toppings!");
        window.alert("The total cost is  " + totalPrice + " /= " + " For Delivery services kindly fill the form below");
    
    $("#submit").click(function (event) {
        event.preventDefault();
        var keyedName = $("#inputName").val();
        var keyedAddress = $("#inputAddress").val();
        window.alert("Hey" + " " + keyedName + " " + " Your order will be ready in 25 mins and will be delivered to" + " " + keyedAddress + " " + "in the next 45 mins.")
        window.alert("Your total order will be " + (totalPrice + newOrderPizza.priceOfDelivery()));
    });
    });
});
