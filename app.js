document.addEventListener("DOMContentLoaded", function () {
  const productInner = document.getElementById("product-inner");

  const productNumbers = Array.from({ length: 25 }, (_, i) => i + 1);

  displayProducts(productNumbers);

  function displayProducts(productNumbers) {
    productInner.innerHTML = "";

    productNumbers.forEach(productNumber => {
      const productDiv = document.createElement("div");
      productDiv.className = "item";
      productDiv.innerHTML = 
        <img src="images/${productNumber}.png" alt="Товар ${productNumber}" class="img">
        <div class="price-box">
          <p class="price">Цена: ${getProductPrice(productNumber)} руб.</p>
          <button class="btn" onclick="addToCart(${productNumber})">Добавить в корзину</button>
        </div>
      ;
      productInner.appendChild(productDiv);
    });
  }

  function getProductPrice(productNumber) {
    // Здесь можно добавить логику для получения цены товара по его номеру
    return (productNumber * 2).toFixed(2);
  }
});

function addToCart(productNumber) {
  console.log(Товар ${productNumber} добавлен в корзину);
}