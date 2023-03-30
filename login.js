// const storedUsername = localStorage.getItem("username");
// const storedPassword = localStorage.getItem("password");

function login() {
  const store = localStorage.getItem("store");
  const parsedStore = JSON.parse(store);

  const userName = document.getElementById("userName");
  const userPassword = document.getElementById("userPassword");
  if (document.getElementById('userName').value == '') { alert('username is required'); return }
  if (document.getElementById('userPassword').value == '') { alert(' password is required'); return }

  for (let i = 0; i < parsedStore.length; i++) {
    if (parsedStore[i].loginUsername == userName.value && parsedStore[i].loginPassword == userPassword.value) {
      alert("You are logged in");
      window.location.href = "/index.html";
    }
  }
}
