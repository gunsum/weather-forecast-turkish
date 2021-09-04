const url = "https://api.openweathermap.org/data/2.5/"
const key = "b3f5be3ad67a95c7d5378378dcf9e9a6"

const search = document.querySelector(".searchbar");
search.addEventListener("keypress",setItems);

function setItems(e){
    if(e.keyCode===13){
        getCity(search.value)
        console.log("aaa")

    }
}
function getCity(city){
    let mark = `${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(mark)
    .then(weather =>{
        return weather.json()
    })
    .then(displayEnter)
}
function displayEnter(r){
    console.log(r)
    document.querySelector(".city").textContent = `${r.name} / ${r.sys.country}`
    document.querySelector(".temp").textContent = `${r.main.temp} °C`
    document.querySelector(".desc").textContent = `${r.weather[0].description}`
    document.querySelector(".minmax").textContent = `${r.main.temp_min}°C / ${r.main.temp_max}°C `

}