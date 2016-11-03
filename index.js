var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
var string = "In your cart, you have "
    if (cart.length === 0){
      console.log("Your shopping cart is empty.")
    } else {
      for (var i = 0; i < cart.length; i++){
        var name = Object.keys(cart[i])[0]
        var price = cart[i][Object.keys(cart[i])[0]]
        string += `${name} at $${price}, `
        console.log(string.slice(0, -2) + ".")
    }
  }
}

function removeFromCart(item) {
  var something = false
  for (var i = 0; i< cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      something = true
      cart.splice(i, 1)
    }
  }
    if (something === false){
      console.log("That item is not in your cart.")
    }
  return cart
}

function placeOrder(creditcard){
  var total = 0
  if (creditcard === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    for (var i = 0; i < cart.length; i++){
      var name = Object.keys(cart[i])[0]
      var price = cart[i][Object.keys(cart[i])[0]]
      total = total + price
      cart.shift()
  }
  console.log(`Your total cost is $${total}, which will be charged to the card ${creditcard}.`)
}
}
