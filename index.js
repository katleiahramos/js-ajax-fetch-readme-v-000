const app = "I don't do much.";

const token = 'e2e4ad683f366f71fede8ed741c9a26487fc451d'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
