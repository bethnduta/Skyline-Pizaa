//object constructor for pizza orders
class orderPizza {
    constructor(size, crust, toppings, numberOfPizza, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};
//prototypes to calculates prices
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
    if (this.crust === "stuffed") {
        return 150;
    } else if (this.crust === "crispy") {
        return 250;
    } else if (this.crust === "cracked") {
        return 100;
    }else{ return "Choose an option"
}};
orderPizza.prototype.getToppingsPrice = function () {
    if (this.toppings === "mushroom") {
        return 150;
    } else if (this.toppings === "onion") {
        return 100;
    } else if (this.toppings === "Sausage") {
        return 150;
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
// user values
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

        window.alert("Hi! You have ordered " + numberOfPizza + " " + size + " pizzas, with a " + crust + " crust and " + toppings + " toppings!" );
        
        window.alert("The total cost is  " + totalPrice + " /= " + " fill the form below to get your goods delivered");
    
    $("#submit").click(function (event) {
        event.preventDefault();
        var keyedName = $("#inputName").val();
        var keyedAddress = $("#inputAddress").val();
        window.alert("Hey" + " " + keyedName + " " + " we have received your order and you'll receive it" + " " + keyedAddress + " " + "in a few depending on your location")
        window.alert("Your total order will be " + (totalPrice + newOrderPizza.priceOfDelivery()));
    });});
});