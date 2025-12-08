let code = "123456";
document
  .querySelector("input[value='Get Code']")
  .addEventListener("click", (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(document.querySelector("input[type='email']").value)) {
      return;
    }
    // هنا هنضيف الكود اللى هيجبلي رقم التحقق
    document
      .querySelector("input[type='email']")
      .setAttribute("disabled", true);
    document
      .querySelector(".confirm-code").style.display = "block";
      e.preventDefault();
  });

document
  .querySelector("input[value='Confirm']")
  .addEventListener("click", (e) => {
    // e.preventDefault();
    let temp = document.querySelector(
      ".confirm-code input:first-child"
    ).value;
    if (!temp) {
      // e.preventDefault();
      return;
    }
    if (true) {
      e.preventDefault();
      document.location.href = "resetpass.html";
    }
});