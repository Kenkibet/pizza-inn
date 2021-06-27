// pizza object
function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}


pizza.prototype.totalCost = function () {
    switch (this.size) {
        case "small":
            this.price = 800;
            break;
        case "medium":
            this.price = 1000;
            break;
        case "large":
            this.price = 1200;
            break;
        default:
            break;
    }
    switch (this.crust) {
        case "crust-crispy":
            this.price += 80;
            break;
        case "crust-stuffed":
            this.price += 80;
            break;
        case "sugar-free":
            this.price += 80;
            break;
        default:
            break;
    }
};

var cartItems = [];
var cartTotal = 0;

$(document).ready((e) => {
    $("#print").click(function (event) {
        event.preventDefault();
        alert("Thank you for choosing Ken's Pizza . Your order will be delivered shortly");
    });

    $("#inhouse").click(function (event) {
        event.preventDefault();
        alert("Thank you for choosing Ken's Pizza . Your order will be delivered shortly");
        resetForm();
    });

    $("#homeDelivery").click(function (event) {
        event.preventDefault();
        document.getElementById("delivery-form").style.display = "block";
        resetForm();

    });

    function resetForm() {
        cartItems = [];
        cartTotal = 0;

        document.getElementById('orderList').innerHTML = " ";
        document.getElementById('cartTotal').innerHTML = " ";
        document.getElementById('cartTotal').innerHTML = " ";

    }


});