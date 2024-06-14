document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', function() {
        alert('You clicked on ' + this.alt);
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting me.');
});
