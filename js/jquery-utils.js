function addMovies(data){

    for(let i = 0; i < data.length; i++){

        let actors = data[i].actors;
        console.log("here is our actors: " + actors);
        let director = data[i].director;
        console.log("here is our director: " + director);
        let moviePoster = data[i].poster;
        let movieTitle = data[i].title;
        let genre = data[i].genre;
        let year = data[i].year;
        let plot = data[i].plot;
        let rating = data[i].rating;



        $('#movie-container').append(`<div class="card" style="width: 18rem;">
  <img src=${moviePoster} class="card-img-top" alt="...">
  <div class="row">
  <div class="card-body">
    <h5 class="card-title">${movieTitle} (${year})</h5>
    <p class="card-text">${genre}</p>
    <p class="card-text">${plot}</p>
    <p class="card-text">Rating: ${rating} / 5</p>
    <a href="#" class="btn btn-primary">Delete</a>
  </div>
  </div>
</div>`)

    }
}
