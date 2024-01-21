const productListEl = document.getElementById('product-list');

function createElement(product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');
  // const prodTitleEl = document.createElement('h2');
  // const prodPriceEl = document.createElement('p');
  newListEl.innerHTML = `
	<h2>${product.title}</h2>
	<p>${product.price}</p>
	`;
  const prodDeleteButtonEl = document.createElement('button');

  // prodTitleEl.innerHTML = product.title;
  // prodPriceEl.innerHTML = product.price;

  // prodDeleteButtonEl.innerHTML = 'DELETE';
  prodDeleteButtonEl.textContent = 'DELETE';

  newListEl.id = prodId;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, product.id)
  );

  // newListEl.appendChild(prodTitleEl);
  // newListEl.appendChild(prodPriceEl);
  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  const startTime = performance.now();
  // products.forEach((product) => {
  //   const newListEl = createElement(product, product.id, deleteProductFn);
  //   productListEl.appendChild(newListEl);
  // });
  for (let i = 0; i < products.length; i++) {
    const newListEl = createElement(
      products[i],
      products[i].id,
      deleteProductFn
    );
    productListEl.appendChild(newListEl);
  }
  const endTime = performance.now();
  console.log(endTime - startTime);
}

export function updateProducts(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newProductEl = createElement(product, prodId, deleteProductFn);
    productListEl.insertAdjacentElement('afterbegin', newProductEl);
  } else {
    const productEl = document.getElementById(prodId);
    // productEl.parentElement.removeChild(productEl);   // better support for old browsers
    productEl.remove();
  }
}
