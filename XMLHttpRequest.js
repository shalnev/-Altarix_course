function toFindLogin() {
    fetch("https://api.github.com/search/users?q=" + document.getElementById("inputFromUser").value)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            console.log(users.total_count);
            if (users.total_count === 0) {
                alert("Ничего не найдено, проверьте запрос.")
            }
            else if (users.total_count === 1) {
                document.getElementById("div").innerHTML = "<ul><li>" + users.items[0].login + "</li></ul>";
            }
            else if (users.total_count === 2) {
                document.getElementById("div").innerHTML = "<ul><li>" + users.items[0].login + "</li><li>" + users.items[1].login + "</li></ul>";
            }
            else if (users.total_count === 3) {
                document.getElementById("div").innerHTML = "<ul><li>" + users.items[0].login + "</li><li>" + users.items[1].login + "</li><li>" + users.items[2].login + "</li></ul>";
            }
            else if (users.total_count === 4) {
                document.getElementById("div").innerHTML = "<ul><li>" + users.items[0].login + "</li><li>" + users.items[1].login + "</li><li>" + users.items[2].login + "</li><li>" + users.items[3].login + "</li></ul>";
            }
            else {
                document.getElementById("div").innerHTML = "<ul><li>" + users.items[0].login + "</li><li>" + users.items[1].login + "</li><li>" + users.items[2].login + "</li><li>" + users.items[3].login + "</li><li>" + users.items[4].login + "</li></ul>";
            }
        });
}