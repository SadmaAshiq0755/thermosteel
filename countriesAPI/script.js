let countries = [];
const root = document.getElementById("container");
const dropdown = document.getElementById("drop");


function fetchData(){
    fetch("https://restcountries.com/v3.1/all")
    .then(response=>response.json())
    .then(reply=>{
        countries = reply.sort(function(a, b){
            if (a.name.common > b.name.common) {
                return 1;
            }
            if (b.name.common > a.name.common) {
                return -1;
            }
            return 0;
        });
    })
    .then(()=>{
        let lookup = {};
        var items = countries;
        let result = [];

        for (var item, i = 0; item = items[i++];) {
            var name = item.continents;

            if (!(name in lookup)) {
                lookup[name] = 1;
                result.push(name);
            }
        }
        result.forEach(el=>{
            const navDiv =`<button class="continent-content" onClick="handleContinent(this)">${el}</button>`
            dropdown.innerHTML += navDiv;
        })
        displayContent(countries);
    })
    .then(()=>{
        setTimeout(() => {
            const load = document.getElementById("load");
            load.style.display="none";
        }, 1000);
    })
}

fetchData();

function handleContinent(e){
    const cont = countries.filter(el=>el.continents == e.innerText);
    displayContent(cont);
}


function displayContent(countries){
    const div = document.createElement("div");
    div.classList.add("contain");
    countries.forEach(el=>{
        const card = `<div class="box">
        <div class="image">
            <img src="${el.flags.png}" alt="" class="img">
        </div>
        <div class="info">
            <p class="name"><strong>${el.name.common}</strong></p>
            <p class="population"><strong>Population:</strong>${el.population}</p>
            <p class="region"><strong>Region:</strong>${el.continents}</p>
            <p class="capital"><strong>Capital: </strong>${el.capital?el.capital:el.name.common}</p>
        </div>
        </div>`
        div.innerHTML += card;
    });
    root.innerHTML = div.innerHTML;
}


function handleInput(e){
    const arr = countries.filter(el=>el.name.common.includes(e));
    displayContent(arr);
}
