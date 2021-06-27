// pizza object
function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.price = 0;
}


Pizza.prototype.totalCost = function () {
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

    // more coplex
    $("#submit-btn").click(function (event) {
        event.preventDefault();
        var size = $("input[name='pizzaSize']:checked").val();
        var crust = $("input[name='pizzaCrust']:checked").val();
        var topping = $("#topping").children("option:selected").val();

        //create pizza
        var pizza = new Pizza(size, crust, topping);
        pizza.totalCost();
        cartTotal += pizza.price;

        var order = `<div class="alert alert-secondary" role="alert">
        ${pizza.size} ${pizza.topping} with ${pizza.crust} crust
        <span class="float-right font-weight-bold">${pizza.price}/=</span>
      </div>`;

      var total = `Cart Total: <span class="float-right font-weight-bold">${cartTotal}</span>`;

        document.getElementById('orderList').innerHTML = order;
        document.getElementById('cartTotal').innerHTML = total;
        cartItems.push(order);

        document.getElementById('cartItems').innerHTML = " ";

        for (var i = 0; i < cartItems.length; i++) {
            orderLi = `<li class="list-group-item">${cartItems[i]}</li>`;
            document.getElementById('cartItems').innerHTML += orderLi;
        }

    });

    function resetForm() {
        cartItems = [];
        cartTotal = 0;

        document.getElementById('orderList').innerHTML = " ";
        document.getElementById('cartItems').innerHTML = " ";
        document.getElementById('cartTotal').innerHTML = " ";

    }


});