document.addEventListener('DOMContentLoaded', function() {
    const cartToggle = document.getElementById('cart-toggle');
    const cart = document.getElementById('cart');
    const cartClose = document.getElementById('cart-close');
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    
    cartToggle.addEventListener('click', function() {
      cart.style.display = 'block';
    });
    
    cartClose.addEventListener('click', function() {
      cart.style.display = 'none';
    });
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = parseFloat(this.getAttribute('data-price'));
        
        const cartItem = document.createElement('li');
        cartItem.textContent = `${title} - $${price.toFixed(2)}`;
        cartList.appendChild(cartItem);
        
        updateCartTotal();
      });
    });
  
    function updateCartTotal() {
      const items = cartList.getElementsByTagName('li');
      let total = 0;
      
      for (let item of items) {
        const price = parseFloat(item.textContent.split('- $')[1]);
        total += price;
      }
      
      cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
  });
  