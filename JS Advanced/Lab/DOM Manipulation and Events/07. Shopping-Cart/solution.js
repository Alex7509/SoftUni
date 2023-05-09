function solve() {

   let shopingCard = document.getElementsByClassName('shopping-cart')[0];
   let textArea = document.getElementsByTagName('textarea')[0];

   let totalPrice = 0;
   let list = [];

   shopingCard.addEventListener('click', (event) => {

      let productInfo = event.target.parentElement.parentElement;
      let name = productInfo.querySelectorAll('.product-title')[0].textContent;
      let price = Number(productInfo.querySelectorAll('.product-line-price')[0].textContent);

      if (event.target.tagName === 'BUTTON' && event.target.className === 'add-product') {
         textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         totalPrice += price;
      }

      if (!list.includes(name)) {
         list.push(name);
      }

      if (event.target.tagName === 'BUTTON' && event.target.className === 'checkout') {
         textArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;

         let buttons = document.getElementsByTagName('button');
         for (const btn of buttons) {
            btn.disabled = true;
         }
      }
   })
}