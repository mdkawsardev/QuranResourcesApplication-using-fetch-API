let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json";
let cardContainer = document.querySelector('#cardContainer');
const getData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data)
    details = "";
    for (item in data) {
        details += `
        <div class="card" style="width: 18rem;">
                    <img src="https://img.freepik.com/free-photo/concept-ramadan-tradition_23-2151929240.jpg?semt=ais_incoming&w=740&q=80"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data[item].name}</h5>
                        <p class="card-text">${data[item].author}</p>
                        <p class="card-text">Language is ${data[item].language}</p>
                        <p class="card-text">Direction is ${data[item].direction}</p>
                        <a href="${data[item].source}" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        `;

        console.log(data[item])
    }
    cardContainer.innerHTML = details;
    return data;
}
getData()