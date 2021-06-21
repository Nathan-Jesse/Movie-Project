let movies = [];



let domMovieBuilder = movieArr => {
    let main = $("#main");
    main.empty();
    movieArr.forEach(movie => {
        main.append(`
        <div class="card" data-attribute="${movie.id}">
          <img class="card-img-top" src="${movie.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.plot}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Director: ${movie.director}</li>
            <li class="list-group-item">Actors: ${movie.actors}</li>
            <li class="list-group-item">Genre: ${movie.genre}</li>
            <li class="list-group-item">Year: ${movie.year}</li>
          </ul>
          <button class="btn btn-primary" onclick="deleteMovies(${movie.id})">Delete</button>
        </div>
    `)
        // movies = [];
        movies.push({
            id: movie.id,
            image: movie.image,
            title: movie.title,
            rating: movie.rating,
            plot: movie.plot,
            director: movie.director,
            actors: movie.actors,
            genre: movie.genre,
            year: movie.year
        });
    })

}
$(".edit-movie").click(function () {
    let currentMovie = $(this).parent().attr("data-attribute");
    console.log(movies[currentMovie - 1]);
    $(".remove-after-submit").remove();
    formBuilder(movies[currentMovie - 1], currentMovie);
});

function deleteMovies (id) {
    console.log("deleteMovies")
    console.log(id)

        fetch(`https://fanatical-fluorescent-silica.glitch.me/movies/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },

        }).then(res => res.json()).then(data => {
            console.log(data);
            initMovies = [];

            setTimeout(function (){
                movieAPICall();
            }, 500);


        })



}
