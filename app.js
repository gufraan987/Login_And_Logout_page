const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
/*var state=false;
function toggle(){
  if(state){
    document.getElementById("password").setAttribute("type","password");
    state=false;
  }
  else{
    document.getElementById("password").setAttribute("type","text");
    state=true;
  }
}*/