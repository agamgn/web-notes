
fetch("//api.github.com/users")
    .then(res=>res.json())
    .then(json=>console.log(json));

