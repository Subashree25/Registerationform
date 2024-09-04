document.getElementById('document').addEventListener('change', function() {
    const file = this.files[0];
    const previewContainer = document.getElementById('filePreview');

    // Clear any previous preview
    previewContainer.innerHTML = '';

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            if (file.type.startsWith('image/')) {
                // Display image preview
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = "Profile Picture";
                img.style.maxWidth = '100%';
                img.style.maxHeight = '150px';
                previewContainer.appendChild(img);
            } else {
                // Display link to open file
                const link = document.createElement('a');
                link.href = e.target.result;
                link.textContent = `Open ${file.name}`;
                link.target = '_blank';
                previewContainer.appendChild(link);
            }
        };

        reader.readAsDataURL(file);
    }
});

function togglePasswordVisibility(fieldId, toggleIcon) {
    const field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
        toggleIcon.textContent = "👁️‍🗨️";
    } else {
        field.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

function validateForm() {
    const firstName = document.getElementById('firstName').value;
    if (!/^[A-Za-z][A-Za-z ]*$/.test(firstName)) {
        alert("First name should start with an alphabet and only contain letters and spaces.");
        return false;
    }

    const lastName = document.getElementById('lastName').value;
    if (!/^[A-Za-z][A-Za-z ]*$/.test(lastName)) {
        alert("Last name should start with an alphabet and only contain letters and spaces.");
        return false;
    }

    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate >= today) {
        alert("Date of birth should be before today.");
        return false;
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    // Store the user's name (example logic)
    const userName = email.split('@')[0]; // Example of setting the user's name
    localStorage.setItem('userName', userName);

    alert("Login successful!");
    window.location.href = 'homepage.html';
    return false;
}
