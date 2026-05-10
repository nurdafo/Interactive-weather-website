export function getFeeling(temp) {
  if (temp <= 0) return "Freezing ❄️";
  if (temp <= 10) return "Cold 🥶";
  if (temp <= 20) return "Cool 🙂";
  if (temp <= 30) return "Warm 🌤️";
  return "Hot 🔥";
}

export function getAdvice(temp) {
  if (temp <= 0) return "Wear very warm clothes, gloves, hat";
  if (temp <= 10) return "Wear a jacket or hoodie";
  if (temp <= 20) return "Light jacket is enough";
  if (temp <= 30) return "T-shirt is fine";
  return "Light clothes, stay hydrated";
}

export function getScaleLevel(temp) {
  if (temp <= 0) return "cold";
  if (temp <= 10) return "cool";
  if (temp <= 20) return "mild";
  if (temp <= 30) return "warm";
  return "hot";
}
