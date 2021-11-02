var chk1 = document.getElementById("chk1");
var txt1 = document.getElementById("txt1");

chk1.addEventListener("click", () => {
  if (chk1.classList.contains("fa-eye-slash")) {
    console.log("checked");
    txt1.type = "text";
    chk1.classList.remove("fa-eye-slash");
    chk1.classList.add("fa-eye");
  } else {
    console.log("not checked");
    txt1.type = "password";
    chk1.classList.remove("fa-eye");
    chk1.classList.add("fa-eye-slash");
  }
});
