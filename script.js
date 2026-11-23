let days = [
    { date: "🗓️ Sunday 23 November",  temp: "31°C",emoji: "☀️",condition: "Sunny",humidity:"💧 Humidity ~40",feels:"🌡️ Feels like ~34°C",rise:"🌞Sun Rise 5:15am(ist)",set:"🌇SunSet 6:43pm(ist)" },
    { date: "🗓️ Monday 23 November",  temp: "30°C",emoji: "☀️",condition: "Sunny",humidity:"💧 Humidity ~55",feels:"🌡️ Feels like ~32°C",rise:"🌞Sun Rise 5:35am(ist)",set:"🌇SunSet 6:45pm(ist)" },
    { date: "🗓️ Tuesday 24 November", temp: "28°C", emoji: "🌧️", condition: "Rainy",humidity:"💧 Humidity ~80",feels:"🌡️ Feels like ~30°C",rise:"🌞Sun Rise 5:30am(ist)",set:"🌇SunSet 6:55pm(ist)"  },
    { date: "🗓️ Wednesday 25 November", temp: "32°C", emoji: "☁️", condition: "Cloudy",humidity:"💧 Humidity ~60",feels:"🌡️ Feels like ~35°C",rise:"🌞Sun Rise 6:00am(ist)",set:"🌇SunSet 6:45pm(ist)"  },
    { date: "🗓️ Thursday 26 November", temp: "29°C", emoji: "🌤️", condition: "Partly Cloudy" ,humidity:"💧Humidity ~65",feels:"🌡️ Feels like ~31°C",rise:"🌞Sun Rise 5:01am(ist)",set:"🌇SunSet 7:00pm(ist)" },
    { date: "🗓️ Friday 27 November", temp: "30°C", emoji: "☀️", condition: "Sunny" ,humidity:"💧 Humidity ~55",feels:"🌡️ Feels like ~32°C",rise:"🌞Sun Rise 5:28am(ist)",set:"🌇SunSet 7:09pm(ist)" },
    { date: "🗓️ Saturday 28 November", temp: "28°C", emoji: "🌧️", condition: "Rainy",humidity:"💧 Humidity ~85",feels:"🌡️ Feels like ~30°C",rise:"🌞Sun Rise 6:00am(ist)",set:"🌇SunSet 6:45pm(ist)"  },
    { date: "🗓️ Sunday 29 November", temp: "32°C", emoji: "☁️", condition: "Cloudy" ,humidity:"💧 Humidity ~60",feels:"🌡️ Feels like ~35°C",rise:"🌞Sun Rise 5:00am(ist)",set:"🌇SunSet 6:15pm(ist)" },
    { date: "🗓️ Monday 30 November", temp: "29°C", emoji: "🌤️", condition: "Partly Cloudy",humidity:"💧 Humidity ~65",feels:"🌡️ Feels like ~31°C",rise:"🌞Sun Rise 4:35am(ist)",set:"🌇SunSet 6:25pm(ist)"  }
];

let currentIndex = 0;

function nextDay() {
    if (currentIndex < days.length - 1) {
        currentIndex++;
        displayWeather();
    }
}

function previousDay() {
    if (currentIndex > 0) {
        currentIndex--;
        displayWeather();
    }
}

function displayWeather() {

document.getElementById("date").innerHTML = days[currentIndex].date;
    document.getElementById("temp").innerHTML = days[currentIndex].temp;
    document.getElementById("emoji").innerHTML = days[currentIndex].emoji;
    document.getElementById("condition").innerHTML = days[currentIndex].condition;
    document.getElementById("feels").innerHTML = days[currentIndex].feels;
    document.getElementById("humidity").innerHTML = days[currentIndex].humidity;
    document.getElementById("rise").innerHTML = days[currentIndex].rise;
    document.getElementById("set").innerHTML = days[currentIndex].set;

}
