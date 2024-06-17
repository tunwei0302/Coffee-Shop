let cartItems = [];
let isManageMode = false;

function addToCart(itemName, itemPrice, imageUrl) {
    var newItem = {
        name: itemName,
        price: itemPrice,
        quantity: 1,
        selected: false,
        imageUrl: imageUrl
    };
    cartItems.push(newItem);
    updateCartDisplay();
}

function updateCartDisplay() {
    var cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let total = 0; // Initialize total

    cartItems.forEach((item, index) => {
        var li = document.createElement('li');
        li.classList.add('cart-item');

        var cartItemContainer = document.createElement('div');
        cartItemContainer.classList.add('cart-item-container');

        var itemImage = document.createElement('img');
        itemImage.src = item.imageUrl;
        itemImage.alt = item.name;

        var itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        var itemName = document.createElement('span');
        itemName.classList.add('item-name');
        itemName.textContent = item.name;

        var itemPrice = document.createElement('span');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `Price: ${item.price}`;

        var quantityLabel = document.createElement('span');
        quantityLabel.textContent = 'Quantity:';
        quantityLabel.style.color = 'blue'; 

        var subtotal = item.quantity * item.price; // Calculate subtotal for this item
        total += subtotal; // Add subtotal to total

        // Add a span to display subtotal for this item
        li.appendChild(cartItemContainer);
        cartItemsElement.appendChild(li);
        var itemSubtotal = document.createElement('span');
        itemSubtotal.classList.add('item-subtotal');
        itemSubtotal.textContent = `Subtotal: RM${subtotal.toFixed(2)}`;
        itemDetails.appendChild(itemSubtotal);

        cartItemContainer.appendChild(itemImage);
        cartItemContainer.appendChild(itemDetails);


        // Inside the forEach loop in updateCartDisplay function
        var itemQuantityInput = document.createElement('input');
        itemQuantityInput.type = 'number';
        itemQuantityInput.value = item.quantity;  // Set the initial value to the item's quantity
        itemQuantityInput.addEventListener('change', (event) => updateItemQuantity(index, event.target.value));
        itemDetails.appendChild(itemQuantityInput);


        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(quantityLabel);
        itemDetails.appendChild(itemQuantityInput);

        cartItemContainer.appendChild(itemImage);
        cartItemContainer.appendChild(itemDetails);

        if (isManageMode) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.selected;

            checkbox.classList.add('checkbox');

            checkbox.addEventListener('change', () => toggleItemSelection(index));
            cartItemContainer.appendChild(checkbox);
        }
    });
    // Update the notification count based on the number of items in the cart
    var cartItemCount = cartItems.length;
    updateNotificationCount(cartItemCount); 

    var totalElement = document.getElementById('total');
    totalElement.textContent = `Total: RM${total.toFixed(2)}`;
}


function updateItemQuantity(index, quantity) {
    // Update the quantity of the item at the given index
    cartItems[index].quantity = parseInt(quantity);
    updateCartDisplay();
}


function toggleCart() {
    var cart = document.getElementById('cart');
    cart.classList.toggle('open');
    cart.classList.toggle('closed');
}

function toggleManageMode() {
    isManageMode = !isManageMode;
    var manageButton = document.getElementById('manage-button');
    var submitButton = document.getElementById('submit-button'); 
    var cancelButton = document.getElementById('cancel-button');
    var removeButton = document.getElementById('remove-selected-button');

    if (isManageMode) {
        manageButton.style.display = 'none';
        submitButton.style.display = 'none';
        cancelButton.style.display = 'inline-block';
        removeButton.style.display = 'inline-block';
    } else {
        manageButton.style.display = 'inline-block';
        submitButton.style.display = 'inline-block'
        cancelButton.style.display = 'none';
        removeButton.style.display = 'none';
    }

    updateCartDisplay();
}

function toggleItemSelection(index) {
    cartItems[index].selected = !cartItems[index].selected;
}

function removeSelectedItems() {
    cartItems = cartItems.filter(item => !item.selected);
    updateCartDisplay();
}

function toAnotherWebpages() {
    window.location.href = '../Order/mp_order.html';
}

function updateNotificationCount(count) {
    var notification = document.getElementById('notification');
    var notificationMessage = document.getElementById('notification-message');
    notificationMessage.innerText = count;
    notification.style.display = count > 0 ? 'block' : 'none';
}

