document.addEventListener('DOMContentLoaded', () => {
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const orderButton = document.querySelector('.order-button');
    const notification = document.getElementById('notification');

    incrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            let value = parseInt(input.value);
            if (value < 100) {
                input.value = value + 1;
            }
        });
    });

    decrementButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
            }
        });
    });

    orderButton.addEventListener('click', () => {
        notification.classList.remove('hidden');
        notification.style.display = 'block'; // Ensures the notification is shown
        setTimeout(() => {
            notification.classList.add('hidden');
            notification.style.display = 'none'; // Hides the notification after 3 seconds
        }, 3000);
    });
});
