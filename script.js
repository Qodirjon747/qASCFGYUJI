const ota=document.getElementById("ota");
const btn=document.getElementById("btn");
const input=document.getElementById("input");
const apiKey="0837213505e842f3a3b0490b885afd02";
const units = 'metric';

const date= new Date();

btn.addEventListener("click", async () => {
    if (input.value.trim().length < 1) {
        alert("Shaharni kiriting");
    } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=${units}&appid=${apiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        chizish(data);
    }
});




function chizish(malumot) {
    const icon = malumot.weather[0].icon;
    ota.innerHTML = `
        <img src=${`http://openweathermap.org/img/w/${icon}.png`} alt="iconka" />
        <h1>${malumot.main.temp}°</h1>
        <h2>${malumot.name}</h2>
        <span>Max: ${malumot.main.temp_max}°  Min: ${malumot.main.temp_min}°</span>
        <div class="date">
            <p>Today</p>
            <p>May, ${date.getDate()}</p>
        </div>
    `;
}


