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

  //This is the main Parent Node <tbody>
  let parentNode = document.querySelector(".product").parentNode;
  console.log(parentNode);

  //This is the parent of the parent node where the event happens and 
  //that needs to be deleted the <tr> => "product" class

  let parentParentNodeTarget = (target.parentNode).parentNode;

  removeItem = parentNode.removeChild(parentParentNodeTarget);

  //Calling again the calculateAll() in order to update the total price if we remove an item
  calculateAll();

  return removeItem
}
// ITERATION 5
function createProduct() {

  //Selecting the DOM elements
  let newProductNodeList = document.querySelectorAll(".create-product input");
  
  let newProductName = newProductNodeList[0].value;

  let newProductPrice = newProductNodeList[1].value;

  //Creating the new row with the HTML elements

  let createNewRow = document.createElement('TR');
  createNewRow.setAttribute("class", "product");

  createNewRow.innerHTML = `
  <td class="name"> <span>${newProductName}</span></td>
  <td class="price">$<span>${newProductPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `
  
  //Append the new created element
  const tbodyElement = document.getElementsByTagName("tbody")[0];
  tbodyElement.appendChild(createNewRow);

  //Clearing the input fields in the creation form
  newProductName = newProductNodeList[0].value = "";

  newProductPrice = newProductNodeList[1].value = 0;

  removeElementsEvent();

}

function removeElementsEvent() {
  let removeElementsBtn = document.querySelectorAll(".btn.btn-remove");
  removeElementsBtn.forEach(button => button.addEventListener("click", removeProduct));
}


window.addEventListener('load', () => {
  let calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  removeElementsEvent();

  let createElementBtn = document.getElementById("create");
  createElementBtn.addEventListener("click", createProduct);
});