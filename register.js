function register() {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
//   if (document.getElementById('email').value == '') { alert('email is required'); return }
//   if (document.getElementById('username').value == '') { alert(' username is required'); return }
//   if (document.getElementById('password').value == '') { alert(' password is required'); return }
  if (email == '') { alert('email is required'); return }
  if (username == '') { alert(' username is required'); return }
  if (password == '') { alert(' password is required'); return }
  const store = localStorage.getItem("store");
  const parsedStore = JSON.parse(store);
  if (parsedStore && parsedStore.length > 0) {
    for (let i = 0; i < parsedStore.length; i++) {
      if (parsedStore[i].emailId == email) {
        alert("USER ALREADY EXISTS");
        window.location.href='/login.html';
        break;
      } 
      if(parsedStore[i].emailId != email){
        const data = {
          emailId: email,
          loginUsername: username,
          loginPassword: password,
        };
        const newParsedStore = [data, ...parsedStore];
        const strigifiedJSON = JSON.stringify(newParsedStore);
        localStorage.setItem("store", strigifiedJSON);
        window.location.href = "/login.html";
      }
    }
  } else {
    const data = {
      emailId: email,
      loginUsername: username,
      loginPassword: password,
    };
    const strigifiedJSON = JSON.stringify([data]);
    localStorage.setItem("store", strigifiedJSON);
    window.location.href = "/login.html";
  }

  //   localStorage.setItem("email", email);
  //   localStorage.setItem("username", username);
  //   localStorage.setItem("password", password);
}
