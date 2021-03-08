// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  //Price and Quantity are strings so we should transform them into numbers

  const priceValue = Number(price.innerHTML);
  const quantityValue = Number(quantity.value);


  const totalCount = priceValue * quantityValue;

  const subtotalValue = product.querySelector(".subtotal span").innerText = totalCount;

  return subtotalValue;


}
function calculateAll() {
  /* code in the following two lines is added just for testing purposes.
   it runs when only iteration 1 is completed. at later point, it can be removed.

    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);

  end of test */ 

  // ITERATION 2 - Calculate the subtotal of each product
  const products = document.querySelectorAll(".product");
  
  let sumTotal = 0;
  products.forEach(product => {
    var updateProduct = updateSubtotal(product);
    sumTotal += updateProduct;
  });

  // ITERATION 3 - Calculate & update the Total value of the Card

  const totalValue = document.querySelector("#total-value span");

  return totalValue.innerHTML = sumTotal;
}


// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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