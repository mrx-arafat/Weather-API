const API_KEY = `38f30d7e5e868ff6a8bc084515f5a5d3`;

const searchTemp = () => {
  const cityName = document.getElementById("city-name").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric
    `;

  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
};
//fn for setting innerText by ID
const setInnerText = (text, id) => {
  document.getElementById(id).innerText = text;
};

const display = (t) => {
  setInnerText(t.name, "city");
  setInnerText(t.main.temp, "temp");
  setInnerText(t.weather[0].main, "weather");

  //set weather icon

  const iconURL = `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`;
  console.log(t);
};
