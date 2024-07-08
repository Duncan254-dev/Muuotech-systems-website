document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        text-align: center; 
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product').getAttribute('data-product');
            const whatsappNumber = '0705035612';
            const whatsappUrl = `https://wa.me/254${whatsappNumber}?text=I'd%20like%20to%20order%20${encodeURIComponent(product)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
});

document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', function() {
        alert('You clicked on ' + this.alt);
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting me.');
});
        // script.js
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const orderDetails = `
        Product: ${product}\n
        Quantity: ${quantity}\n
        Name: ${name}\n
        Email: ${email}\n
        Address: ${address}
    `;

    if (confirm(`Please confirm your order details:\n\n${orderDetails}`)) {
        alert("Thank you for your order! You will be redirected to the payment page.");
        
