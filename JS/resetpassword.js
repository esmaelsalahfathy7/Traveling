document
        .querySelector(".parent form input[value='Confirm']")
        .addEventListener("click", (e) => {
          let pass = document.querySelectorAll(
            ".parent form input[type='password']"
          );
          if (!pass[0].value || !pass[1].value) return;
          if (pass[0].value === pass[1].value) {
            window.alert("New Password is " + pass[0].value);
            // هنا هنضيف الكود اللى هيعدل الباسوورد في البيانات
            document.location.href = "index.html";
          }
        });