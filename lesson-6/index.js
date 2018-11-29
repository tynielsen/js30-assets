
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

fetch(endpoint)
  .then(rawData => rawData.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return`
      <li>
        <span class="city">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

// function updateSearchValue() {
//   console.log(suggestionsItem);
//   const newVal = this.querySelector('.city').value;
//   suggestions.innerHTML = '';
//   return searchInput.value = newVal;
// }

const searchInput = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');
// const suggestionsItem = document.querySelector('.suggestions li');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
// suggestionsItem.addEventListener('click', updateSearchValue);




