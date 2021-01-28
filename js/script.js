const cart = document.querySelector('.cart');
cart.addEventListener('click', updateQuantity);

function updateQuantity(e) {
    if (e.target.classList.contains('fa-plus') || e.target.classList.contains('increaseQuantity')) {

    } else if (e.target.classList.contains('fa-minus') || e.target.classList.contains('decreaseQuantity')) {

    } else if (e.target.classList.contains('remove-item')) {

    } else if (e.target.classList.contains('check-out')) {

    } else {
        return
    }
}