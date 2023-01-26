// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input[type =number]').value;
  let subtotal = product.querySelector('.subtotal span')
  let newSubtotal = price * quantity;
   return subtotal.innerHTML = newSubtotal;
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //  const singleProduct = document.querySelector('product');
  //  updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  let total = 0;
  let products = [...document.querySelectorAll('.product')];
  products.forEach(product => { updateSubtotal(product);
 
  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);


  // ITERATION 3
  total += parseFloat(product.querySelector('.subtotal span').innerHTML);
  });
  return document.querySelector('#total-value span').innerHTML = total;

}
  


// ITERATION 4

function removeProduct(event) {
  let remove = document.querySelectorAll('.btn btn-remove');
  remove.forEach(remove => {remove.addEventListener('click', removeProduct);
  let target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
});
return document.querySelector('btn btn-remove').innerHTML = target;
}
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
