document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector("#name");
  const usernameElement = document.querySelector("#username");
  const avatarElement = document.querySelector("#avatar");
  const reposElement = document.querySelector("#repos");
  const followersElement = document.querySelector("#followers");
  const followingElement = document.querySelector("#following");
  const linkElement = document.querySelector("#link");
  const searchBtn = document.querySelector("#searchBtn");
  const userInput = document.querySelector("#user");

  searchBtn.addEventListener("click", function () {
    const user = userInput.value.trim();
    if (!user) {
      alert("Digite o nome de um usuário");
      return;
    }

    fetch(`https://api.github.com/users/${user}`)
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Usuário não encontrado");
        }

        return res.json();
      })
      .then(function (json) {
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
      })
      .catch(function (err) {
        alert(err.message);
      });
  });
});
