// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerText
  let quantity = product.querySelector('.quantity input').value
  product.querySelector('.subtotal span').innerText = Number(price) * Number(quantity);
  return Number(price) * Number(quantity)
}

// ITERATION 2

function calculateAll() {

  const $products = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let $product of $products) {
    totalValue += updateSubtotal($product);
  }

// ITERATION 3


  document.querySelector('#total-value span').innerHTML = totalValue;
}
const $calculateTrigger = document.getElementById('calculate');
$calculateTrigger.addEventListener('click', calculateAll);

//ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
}

//ITERATION 5


et bodyEl = document.querySelector('.product');
function createProduct() {
  //... your code goes here
  let price = document.getElementById('create-price').value;
  let name = document.getElementById('create-name').value;
  let clonedEl = bodyEl.cloneNode(true);
  clonedEl.querySelector('.name span').innerText = name;
  clonedEl.querySelector('.price span').innerText = price;
  clonedEl.querySelector('.quantity input').value = 0;
  document.querySelector('tbody').appendChild(clonedEl);
  let removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', removeProduct);
  })
  // Remove the values from create input fields
  document.getElementById('create-price').value = 0;
  document.getElementById('create-name').value = "";
}
// 



