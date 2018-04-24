// 1) Отправить запрос когда нажали на кнопку "Найти" : fetch  и https://api.github.com/search/users?q=”Текст для поиска”
// 2) После получения ответа добавить список из пяти первых найденных логинов
// 3) Если неправильно ввели адрес запроса: написать на странице "что-то пошло не так"

function loadNicknames(){
    fetch("https://api.github.com/search/users?q=%22+document.getElementById("targetName").value")
        .then(function(response){
            return response.json();
        })
        .then(function(users){
            if(users.total_count==0){
                alert("Ничего не найдено. Проверьте правильность ввода")
            }
            let divVar = document.getElementById("div__id");
            let list = "<ul><li>"+users.items[0].login +"</li><li>"+users.items[1].login +"</li><li>"+users.items[2].login +"</li><li>"+ users.items[3].login+"</li><li>"+ users.items[4].login+"</li></ul>";
            divVar.innerHTML = list;
        });}