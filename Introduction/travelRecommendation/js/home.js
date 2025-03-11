let db;
let btn = document.getElementById("searchSendBtn");
let resetbtn = document.getElementById("searchResetBtn");
btn.addEventListener( "click", search)
resetbtn.addEventListener("click", reset)

function getData(key) { 
    return fetch('../assets/travel_recommendation.json')
    .then(response => response.json())
    .then(data => data[key])
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}



function search(event) {
    event.preventDefault();
    let keyword = document.getElementById('searchInput').value;
    let recommendationElem = document.getElementById('recommendations');
    switch (keyword.toLowerCase()) {
        case "beach":
        case "beaches":
            getData("beaches")
                .then( data => {
                    let innerHTML = data
                        .map(recommendation => createCart(recommendation))
                        .join(" ");
                    recommendationElem.innerHTML = innerHTML
                })

            break;
        case "temple":
        case "temples":
            getData("temples")
            .then( data => {
                let innerHTML = data
                    .map(recommendation => createCart(recommendation))
                    .join(" ");
                recommendationElem.innerHTML = innerHTML
            })
            break;
        case "country":
        case "contries":
            getData("countries")
            .then( data => {
                let innerHTML = data
                    .map(country => 
                        country.cities
                            .map(recommendation => createCart(recommendation, country.name))
                            .join(" ")
                        )
                    .join(" ");
                recommendationElem.innerHTML = innerHTML
            })
            break;
        default:
            recommendation = "Not found"
    }
}

function reset(event) {
    event.preventDefault();
    let keyword = document.getElementById('searchInput');
    let recommendationElem = document.getElementById('recommendations');

    keyword.value = "";
    recommendationElem.innerHTML = ""

}

function createCart(recommendation, country) {
    return `
    <div class="card my-2">
        <img src="${recommendation.imageUrl}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${recommendation.name} ${country ? "" : ", " + country} </h5>
            <p class="card-text">${recommendation.description}</p>
            <a href="#" class="btn btn-outline-success"> Visit</a>
        </div>
    </div>
    `
}
