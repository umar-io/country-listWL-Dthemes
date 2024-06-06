const api_url = "data.json";

const filter_btn = document.querySelector(".dropDownBtn");
const dropDown = document.querySelector(".dropDown");
const arrow = document.querySelector(".arrow");
const themeToggleBtn = document.querySelector(".darkModeToggle");

function showDropDown() {
  dropDown.classList.toggle("show");
  arrow.classList.toggle("arrow-rotate");
}

filter_btn.addEventListener("click", showDropDown);

const country_display = document.querySelector(".cList");

fetch(api_url)
  .then((Response) => Response.json())
  .then((data) => {
    const limit = data.slice(0, 8);
    limit.forEach(function (country) {
      let country_card = `<div class="card">
      <div class="img">
      <img src=${country.flag} class="country-flag" alt="countryflag"/>
      </div>
        <div class="details">
          <h4>${country.name}</h4>
          <article>
            <p>Population: ${country.population}</p>
            <p>Region: ${country.region}</p>
            <p>Capital: ${country.capital}</p>
          </article>
        </div>
     </div>
    </div>`;
      country_display.innerHTML += country_card;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function switchThemes() {
  let isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  document.querySelector(".themeIcon").classList.toggle("filterImage");
  document.querySelector(".searchimage").classList.toggle("filterImage");
  document.querySelector(".arrow").classList.toggle("filterImage");
}

document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.toggle("dark-mode");
  }
});

themeToggleBtn.addEventListener("click", switchThemes);
