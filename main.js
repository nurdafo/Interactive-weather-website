import { getWeatherData } from "./api.js";
import { getFeeling, getAdvice, getScaleLevel } from "./logic.js";
import { updateUI } from "./ui.js";

const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

// шкала
const levels = {
  cold: document.getElementById("lvl-cold"),
  cool: document.getElementById("lvl-cool"),
  mild: document.getElementById("lvl-mild"),
  warm: document.getElementById("lvl-warm"),
  hot: document.getElementById("lvl-hot")
};

// кнопка
button.addEventListener("click", () => search());

// enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search();
  }
});

async function search() {
  const city = input.value.trim();
  if (!city) return alert("Enter city!");

  let data;

  try {
    data = await getWeatherData(city);
  } catch (error) {
    alert("Could not load weather data. Check your internet connection.");
    return;
  }

  // ❗ сначала проверка
  if (data.cod !== 200) {
    alert(data.message);
    return;
  }

  const temp = data.main.temp;

  const logic = {
    feeling: getFeeling(temp),
    advice: getAdvice(temp)
  };

  updateUI(data, logic);
  updateScale(temp);
}

// шкала
function updateScale(temp) {
  Object.values(levels).forEach(el => {
    if (el) el.classList.remove("active");
  });

  const level = getScaleLevel(temp);

  if (levels[level]) {
    levels[level].classList.add("active");
  }
}