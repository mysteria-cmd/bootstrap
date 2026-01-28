document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login_form");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const togglePassword = document.getElementById("toggle_password");
  const icon = togglePassword.querySelector("i");

  const emailError = document.getElementById("email_error");
  const passwordError = document.getElementById("password_error");

  // Toggle password visibility
  togglePassword.addEventListener("click", function() {
    const isPassword = password.getAttribute("type") === "password";
    password.setAttribute("type", isPassword ? "text" : "password");
    
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  });

  // Form validation
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = ""; 

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Invalid email format.";
      isValid = false;
    }
    
    if (password.value.trim() === "") {
      passwordError.textContent = "Password is required.";
      isValid = false;
    } else if (password.value.trim().length < 6) {
      passwordError.textContent = "Minimum 6 characters required.";
      isValid = false;
    }

    if (isValid) {
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        confirmButtonColor: "#0d6efd"
      }).then(() => {
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("login_form")
        );
        modal.hide();

        form.reset();
        password.setAttribute("type", "password");
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      });
    }
  });
})

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter(); 
});
