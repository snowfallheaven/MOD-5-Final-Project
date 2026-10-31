// https://www.omdbapi.com/?apikey=1a28beb4&s

const searchTerm = document.querySelector("#searchInput")
const movieListEl = document.querySelector(".movies-grid");


async function main() {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=1a28beb4&s=${searchTerm.value || "star wars"}`)
  const moviesData = await movies.json()
  console.log(moviesData)
  movieListEl.innerHTML = moviesData.Search
  .map((movie) => movieHTML(movie)).join('')
}
main()

const searchBtn = document.querySelector("#searchForm");
searchBtn.addEventListener("submit", (e) => {
  e.preventDefault()
  main();
});


function movieHTML(card) {
  return `
    <div class="movie-card">
      <img class="movie-card__img" src="${card.Poster}" alt="">
      <h2 class="movie-card__title">${card.Title}</h2>
      <p class="movie-card__year">${card.Year}</p>
    </div>
    `;
}
