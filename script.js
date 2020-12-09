// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  product.querySelector('.subtotal span').innerText = Number(price) * Number(quantity);
  return Number(price) * Number(quantity)
}

