const ingredientsData = {
  1: ['Грибы эноки', 'Грибы обжаренные с маринованной говядиной в сладко-остром соусе'],
  2: ['Кимпаб Ли Минхо', 'Любимый Кимпаб Ли Ноу из Stray Kids, с начинкой из омлета вместо риса, копчёной курицей и майонезом'],
  3: ['Кимпаб', 'Лист нори, тонкий слой риса, шпинат, морковь, свежий огурец, острая капуста кимчи, омлет томого, охотничьи колбаски, подаётся с бульоном.'],
  4: ['Корн-дог дошик', 'Сосиска с сыром моцарелла в панировке из дошика'],
  5: ['Корн-дог фри', 'Сосиска с сыром моцарелла в панировке из картошки фри'],
  6: ['Корн-дог хлопья', 'Сосиска с сыром моцарелла в панировке из хлопьев'],
};

(function () {
  const cart = [];

  function showIngredients(productId) {
    const ingredientsContainer = document.getElementById('ingredients');
    const ingredientsList = document.getElementById('ingredients-list');

    ingredientsList.innerHTML = '';

    if (ingredientsData[productId]) {
      ingredientsData[productId].forEach((ingredient) => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement('li');
      listItem.textContent = 'Состав не указан';
      ingredientsList.appendChild(listItem);
    }

    ingredientsContainer.style.display = 'block';
  }

  function closeIngredients() {
    const ingredientsContainer = document.getElementById('ingredients');
    ingredientsContainer.style.display = 'none';
  }

  function addToCart(productName) {
    const cartItemsContainer = document.getElementById('cartItemsPanel');
    const cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart-item');
    cartItemElement.textContent = productName;
    cartItemsContainer.appendChild(cartItemElement);
    alert('ТОВАР ДОБАВЛЕН В КОРЗИНУ!');
  }

  function openPayment() {
    const phoneNumber = prompt('ВВЕДИТЕ ВАШ НОМЕР ТЕЛЕФОНА:');
    const userName = prompt('ВВЕДИТЕ ВАШЕ ИМЯ:');
    
    if (phoneNumber && userName) {
        alert(`${userName}, НА ВАШ НОМЕР ${phoneNumber} ОТПРАВЛЕН СЧЕТ НА ОПЛАТУ.`);
    } else {
        alert('Введите корректные данные.');
    }
  }

  function openHelp() {
    const userPhoneNumber = prompt('ОСТАВЬТЕ СВОЙ НОМЕР ТЕЛЕФОНА:');
    
    if (userPhoneNumber) {
      alert(`СПАСИБО! В ТЕЧЕНИЕ 5 МИНУТ С ВАМИ СВЯЖЕТСЯ НАШ АДМИНИСТРАТОР ПО НОМЕРУ: ${userPhoneNumber}`);
    } else {
      alert('ПОЖАЛУЙСТА,ОСТАВЬТЕ СВОЙ НОМЕР ТЕЛЕФОНА');
    }
  }

  // Это для обработки клика на кнопку "Добавить в корзину"
  window.addToCart = addToCart;

  // Это для обработки клика на кнопку "Состав"
  window.showIngredients = showIngredients;

  // Это для обработки клика на кнопку "Закрыть" в окне состава
  window.closeIngredients = closeIngredients;

  // Это для обработки клика на кнопку "Оплатить"
  window.openPayment = openPayment;

  // Это для обработки клика на кнопку "Помощь"
  window.openHelp = openHelp;
})();
