let emailIn = document.querySelector("#emailIn");
let passwordIn = document.querySelector("#passwordIn");
let logIn = document.querySelector("#logIn");
let name = document.querySelector("#nameInput");
let signUpEmail = document.querySelector("#signUpEmail");
let passUp = document.querySelector("#passUp");
let signUpBtn = document.querySelector("#signUpBtn");
let logOut = document.querySelector("#logOut");
let wrapper = document.querySelector(".wrapper");
let my = document.querySelector(".my");
// let myCard = document.querySelector("#myCard");

let signUpArray = [];
if (localStorage.getItem("users") == null) {
  signUpArray = [];
} else {
  signUpArray = JSON.parse(localStorage.getItem("users"));
}

function inputsEmpty() {
  if (nameInput.value == "" || signUpEmail.value == "" || passUp.value == "") {
    return false;
  } else {
    return true;
  }
}
function emailExist() {
  for (let i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email === signUpEmail.value) {
      return true;
    }
  }
  return false;
}

function signUp() {
  if (inputsEmpty() == false) {
    document.querySelector(".not").innerHTML =
      '<span class="text-danger m-3">All inputs is required</span>';

    return false;
  } else if (emailExist() == true) {
    document.querySelector(".not").innerHTML =
      '<span class="text-danger m-3">Email already exist !</span>';
  }

  let user = {
    name: nameInput.value,
    email: signUpEmail.value,
    pass: passUp.value,
  };
  signUpArray.push(user);
  localStorage.setItem("users", JSON.stringify(signUpArray));
  document.querySelector(".not").innerHTML =
    '<span class="text-danger m-3">Success lets to login</span>';
  document.querySelector("#nameInput").value = "";
  document.querySelector("#signUpEmail").value = "";
  document.querySelector("#passUp").value = "";
  swal({
    title: "Success",
    text: " lets to login",
    icon: "success",
    button: "Lets Go",
    timer: 3000,
  });
}

function loginEmpty() {
  if (emailIn.value == "" || passwordIn.value == "") {
    return false;
  } else {
    true;
  }
}


function signIn() {
  if (loginEmpty() == false) {
    document.querySelector(".not2").innerHTML =
      '<span class="text-danger m-3">All inputs are required</span>';
    return;
  }

  let email = emailIn.value;
  let password = passwordIn.value;

  let foundUser = signUpArray.find((el) => el.email === email && el.pass === password);

  if (foundUser) {
    my.classList.remove("d-none");
    wrapper.classList.add("d-none");
    document.querySelector(".hello").innerHTML = `Welcome ${foundUser.name}`;
  } else {
    swal({
      title: "Incorrect Email or Password",
      text: "Please try again",
      type: "error",
      timer: 2000,
    });
  }
}

function logout() {
  my.classList.add("d-none");
    wrapper.classList.remove("d-none");
     document.querySelector("#emailIn").value =""
 document.querySelector("#passwordIn") .value = ""
}
