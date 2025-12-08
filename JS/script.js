document.querySelector("header button.login").addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  document.querySelector(".content").style.display = "flex";
  document.querySelector(".overlay").style.display = "block";
})

document.querySelector(".content .close").addEventListener("click", () => {
  window.location.reload();
})

document.querySelector(".content .sign-in .welcome button").addEventListener("click", () => {
  document.querySelector(".content .sign-in").style.zIndex = "150"
  document.querySelector(".content .sign-up").style.zIndex = "151"
  document.querySelector(".content .sign-up .welcome").style.transform = "translateY(0)";
  document.querySelector(".content .sign-up .data").style.transform = "translateY(0)";
  document.querySelector(".content .sign-in .welcome").style.transform = "translateY(100%)";
  document.querySelector(".content .sign-in .data").style.transform = "translateY(-100%)";
})

document.querySelector(".content .sign-up .welcome button").addEventListener("click", () => {
  document.querySelector(".content .sign-up").style.zIndex = "150"
  document.querySelector(".content .sign-in").style.zIndex = "151"
  document.querySelector(".content .sign-in .welcome").style.transform = "translateY(0)";
  document.querySelector(".content .sign-in .data").style.transform = "translateY(0)";
  document.querySelector(".content .sign-up .welcome").style.transform = "translateY(100%)";
  document.querySelector(".content .sign-up .data").style.transform = "translateY(-100%)";
})
