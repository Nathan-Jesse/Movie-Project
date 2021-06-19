function addMovies(data){

    $('#movie-container').empty();

    renderMovies(data);
}

function renderMovies(data){
    for(let i = 0; i < data.length; i++){

        const actors = data[i].actors;
        const director = data[i].director;
        const moviePoster = data[i].poster;
        const movieTitle = data[i].title;
        const genre = data[i].genre;
        const year = data[i].year;
        const plot = data[i].plot;
        const rating = data[i].rating;



        $('#movie-container').append(`
<div class="card col-3" style="width: 18rem;">
  <div class="card-body movie-card">
    <img src=${moviePoster} class="card-img-top" alt="...">
    <form onsubmit="event.preventDefault(); sendUpdate(event, ${data[i].id})"id="card_form_${data[i].id}" style="display:none">
      <input class="card-title" value="${movieTitle}"/>
      <input class="card-title" value="${year}"/>
      <hr>
      <input class="card-text" value="${genre}"/>
      <hr>
      <input class="card-text" value="${plot}"/>
      <hr>
      <input class="card-text" value="${rating}"/>
      <button class="btn btn-primary" id="save_${data[i].id}" type="submit">Save</button>
    </form>


    <div id="card_${data[i].id}">
      <h5 class="card-title">${movieTitle} (${year})</h5>
      <hr>
      <p class="card-text">${genre}</p>
      <hr>
      <p class="card-text">${plot}</p>
      <hr>
      <p class="card-text">Rating: ${rating} / 5</p>
      <button class="btn btn-primary" id="delete_${data[i].id}" onclick="sendDelete(${data[i].id})">Delete</button>
      <button class="btn btn-primary" id="edit_${data[i].id}"  onclick="editMovie(${data[i].id})">Edit</button>
    </div>
  </div>
</div>`)
    }
}
