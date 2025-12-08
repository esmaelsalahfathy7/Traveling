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


//---------------------------------

let signBtn = document.querySelector(".sign-in form input[type='submit']");
let remmber = document.querySelector(".remmber input");

window.onload = () => {
  if(localStorage.getItem("user")) {
    document.querySelector("header .user").innerHTML = `${localStorage.getItem("user")}`;
      document.querySelector("header .login").style.display = "none";
  }
  if (localStorage.getItem("data")) {
    remmber.checked = true;
    let data = localStorage.getItem("data").split("#||#");
    document.querySelector("input.username").value = data[0];
    document.querySelector("input.password").value = data[1];
  }
};

signBtn.addEventListener("click", (e) => {
      e.preventDefault();
  if (!document.querySelectorAll(".content .data form > input")[0].value || !document.querySelectorAll(".content .data form > input")[1].value) {
    document.querySelector(".content .wrong-data").style.display = "block";
  }
  let xml = new XMLHttpRequest();
  xml.open("GET", "../data.json");
  xml.onload = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log("Hello From JSON");
    }
    let data = JSON.parse(xml.responseText);
    let result = checkCredintial(data);
    if (result) {
      // في حالة ان البيانات صح الكود دا هيتنفذ
    } else {
          document.querySelector(".content .wrong-data").style.display = "block";
    }
  };
  xml.send();

});

function checkCredintial(data) {
  let username = document.querySelector("input.username").value;
  let pass = document.querySelector("input.password").value;
  console.log(username, "", pass);
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === username && data[i].pass === pass) {
      if (remmber.checked) {
        localStorage.setItem("data", `${username}#||#${pass}`);
      } else {
        localStorage.removeItem("data");
      }
      return true;
    } else {
      continue;
    }
  }
  localStorage.removeItem("data");
  return false;
}
