const movies = [
    { id: "tt0110912", title: "Filme 1" },
    { id: "tt7944094", title: "Filme 2" },
    { id: "tt7533152", title: "Filme 3" },
    // Adicione o restante dos filmes aqui
];

function displayMovies(moviesToDisplay) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = ''; // Limpa a lista antes de exibir os filmes

    moviesToDisplay.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.onclick = () => alert(`Você selecionou: ${movie.title} (ID: ${movie.id})`);
        movieList.appendChild(li);
    });
}

function filterMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    displayMovies(filteredMovies);
}

// Exibe todos os filmes inicialmente
displayMovies(movies);
