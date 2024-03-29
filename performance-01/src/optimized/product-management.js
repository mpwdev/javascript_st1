// import { renderProducts, updateProducts } from './rendering';
import { updateProducts } from './rendering';
// import { products as prods } from './products';
import { products } from './products';

// let products = prods;
// const titleEl = document.querySelector('#new-product #title');
const titleEl = document.getElementById('title');
// const priceEl = document.querySelector('#new-product #price');
const priceEl = document.getElementById('price');

export function deleteProduct(prodId) {
  // const updatedProducts = [];
  // let deletedProduct;
  // for (const prod of products) {
  //   if (prod.id !== prodId) {
  //     updatedProducts.push(prod);
  //   } else {
  //     deletedProduct = prod;
  //   }
  // }
  // products = updatedProducts;
  const deletedProductIndex = products.findIndex((prod) => prod.id === prodId);
  const deletedProduct = products[deletedProductIndex];
  products.splice(deletedProductIndex, 1);
  // renderProducts(products, deleteProduct);
  updateProducts(deletedProduct, prodId, deleteProduct, false);
}

export function addProduct(event) {
  // event.preventDefault();

  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  products.unshift(newProduct);
  // renderProducts(products, deleteProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
