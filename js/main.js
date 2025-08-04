  document.getElementById('registerForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Formni to'xtatamiz

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      if (username && email && password) {
        // Barcha maydonlar to'ldirilgan bo‘lsa
        window.location.href = "homepage.html"; // Bosh sahifaga yo‘naltirish
      } else {
        alert("Iltimos, barcha maydonlarni to'ldiring!");
      }
    });