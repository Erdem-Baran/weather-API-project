const btn = document.querySelector("#search_btn").addEventListener("click", () => {
    let text = document.querySelector("#search_text").value;
    country(text)
    weather(text)
    render()
})


function render(){
    html = `
    <div id="card" class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="contry image">
        <div class="card-body">
            <h5 class="card-title"></h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item item1"></li>
            <li class="list-group-item item2"></li>
        </ul>
    </div>
    `
    document.querySelector(".input").innerHTML = html;
}

function showCountry(data){
    const img = data.flags.png;
    const name = data.name.common;

    document.querySelector("#card img").src = img;
    document.querySelector(".card-body .card-title").innerHTML = name;
}

function showWeather(data){
    const temperature = data.temperature;
    const wind = data.wind;


    document.querySelector(".list-group .item1").innerHTML = `<span class="fas fa-temperature-half temperature"></span> Sıcaklık : ${data.temperature}`;
    document.querySelector(".list-group .item2").innerHTML =  `<span class="fas fa-wind wind"></span> Rüzgar :  ${data.wind}`;

}

function err_fn(message){
    const html = `
        <div class="alert alert-danger">
                ${message}
            </div>
        `
        document.querySelector("#body").insertAdjacentHTML("afterbegin", html);

        setTimeout(() => {
            const alert = document.querySelector(".alert-danger");
            const card = document.querySelector(".card");
            if (alert) {
                alert.remove();
                card.remove();
            }   
        }, 3000);
}

