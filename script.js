// Contact Form Submission Logic
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent successfully!');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


function trackOrder() {
    const orderId = document.getElementById('order-id').value;
    
    if (orderId) {
        // Show modal with tracking details
        const modal = document.getElementById('tracking-modal');
        const orderStatus = document.getElementById('order-status');
        
        // Set dummy order details
        const trackingDetails = `
            <p><strong>Order ID:</strong> #123456789</p>
            <p><strong>Status:</strong> In Transit</p>
            <p><strong>Estimated Delivery:</strong> 20 minutes</p>
            <p><strong>Current Location:</strong> Delivery Hub</p>
            <p><strong>Delivery Address:</strong> 45, Quickbite Lane, City</p>
            <p><strong>Customer:</strong> John Doe</p>
        `;

        document.querySelector('.tracking-details').innerHTML = trackingDetails;

        modal.style.display = "block";
    } else {
        alert("Please enter a valid Order ID.");
    }
}

function closeModal() {
    const modal = document.getElementById('tracking-modal');
    modal.style.display = "none";
}


// Function to toggle navigation on small screens
function toggleNav() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('open');
}
