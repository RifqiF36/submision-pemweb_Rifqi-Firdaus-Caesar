// Dropdown Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropbtn');
    dropdown.addEventListener('click', function () {
        var content = document.querySelector('.dropdown-content');
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Form Validation (Hanya di halaman kontak)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault(); // Stop form submission
                alert("Harap isi semua field sebelum mengirim pesan!");
            } else {
                alert("Pesan berhasil dikirim!");
            }
        });
    }
});
