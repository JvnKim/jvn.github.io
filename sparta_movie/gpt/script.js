document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzRlYTY3NmQ4N2NlMDdlNThmZmMxYzk3YTA1YTJmYiIsInN1YiI6IjY2MjllNzRjOGQ3N2M0MDA5YTJkOTBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nly1A4A-vAAfwDBsU_T6039Q67jCPyRVkVA4Ky05e-I",
    },
  };

  const TMDB_URL = "https://api.themoviedb.org/3";
  const TOP_RATED_MOVIES_ENDPOINT = "/movie/top_rated";
  const SEARCH_MOVIES_ENDPOINT = "/search/movie";

  const recommendationsContainer = document.getElementById(
    "recommendations-container"
  );
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const modeSwitch = document.getElementById("mode-switch");
  const body = document.body;

  // Function to create movie element
  const createMovieElement = (movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <div class="movie-content">
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
    </div>
    <p class="movie-rating">Rating: ${movie.vote_average}</p> <!-- Rating element -->
  `;
    // Attach click event listener to each movie element
    movieElement.addEventListener("click", () => {
      // Alert movie name, id, and rating when the movie is clicked
      alert(
        `Movie Name: ${movie.title}\nMovie ID: ${movie.id}\nRating: ${movie.vote_average}`
      );
    });
    return movieElement;
  };

  // Function to fetch top rated movies
  const fetchTopRatedMovies = () => {
    fetch(
      `${TMDB_URL}${TOP_RATED_MOVIES_ENDPOINT}?language=en-US&page=1`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.vote_average > 8
        );
        const transformedMovies = filteredMovies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average, // Added property
        }));
        displayRecommendations(transformedMovies);
      })
      .catch((error) =>
        console.error("Error fetching top rated movies:", error)
      );
  };

  // Function to fetch movie recommendations based on query
  const fetchRecommendationsByQuery = (query) => {
    const endpoint = `${SEARCH_MOVIES_ENDPOINT}?query=${query}`;
    fetch(`${TMDB_URL}${endpoint}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredMovies = data.results.filter(
          (movie) => movie.vote_average > 8
        );
        const transformedMovies = filteredMovies.map((movie) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average, // Added property
        }));
        displayRecommendations(transformedMovies);
      })
      .catch((error) =>
        console.error("Error fetching movie recommendations:", error)
      );
  };

  // Function to display movie recommendations
  const displayRecommendations = (movies) => {
    recommendationsContainer.innerHTML = ""; // Clear previous recommendations

    // Check if data is undefined or null
    if (!movies || movies.length === 0) {
      console.error("No movies to display");
      return;
    }

    // Display movie recommendations
    movies.forEach((movie) => {
      const movieElement = createMovieElement(movie);
      recommendationsContainer.appendChild(movieElement);
    });
  };

  // Fetch and display top rated movie recommendations when the page loads
  fetchTopRatedMovies();

  // Event listener for the search button
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      fetchRecommendationsByQuery(query);
    }
  });

  // Event listener for the search input field for pressing enter key
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const query = searchInput.value.trim();
      if (query !== "") {
        fetchRecommendationsByQuery(query);
      }
    }
  });

  // Function to toggle between light and dark modes
  const toggleMode = () => {
    if (modeSwitch.checked) {
      // Switch to dark mode
      body.classList.add("dark-mode");
    } else {
      // Switch to light mode
      body.classList.remove("dark-mode");
    }
  };

  // Event listener for mode switch
  modeSwitch.addEventListener("change", toggleMode);
});
