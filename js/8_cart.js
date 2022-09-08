const getInputValue = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
};

const addProduct = () => {
    const product = getInputValue('product-name-field');
    const quantity = getInputValue('product-quantity-field');
    console.log(product, quantity);
    // display product on UI
    displayProducts(product, quantity);

    // set to Local Storage
    // simple way
    localStorage.setItem(product, quantity);
};

const displayProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
};