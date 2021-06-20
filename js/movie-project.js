

function getMovies() {
    $.ajax('https://fanatical-fluorescent-silica.glitch.me/movies')
        .then(response => {
            // console.log(response);
            // setTimeout(function () {
            $('.progress').hide();
            addMovies(response);
            state.data = response
            // }, 3500);
            // return response
        })
}

function postNewMovie() {
    let title = $('#add-title').val();
    let rating = $('#add-rating').val();
    console.log(title);
    console.log(rating);
    $.post('https://fanatical-fluorescent-silica.glitch.me/movies', {title, rating}, function (response) {
        console.log(response);
        getMovies();
    })
}

function sendDelete(id) {
    $.ajax(`https://fanatical-fluorescent-silica.glitch.me/movies/${id}`, {
        method: 'DELETE',
    }).done(response => {
        getMovies()
    }).then(response => console.log(response))
        .catch(error => {
            console.log('error: ' + error)
    })
}

function sendUpdate(event, id) {
    const title = event.target[0].value
    const year = event.target[1].value
    const genre = event.target[2].value
    const plot = event.target[3].value
    const rating = event.target[4].value

    const data = {
        title, year, genre, plot,rating
    }

    $.ajax(`https://fanatical-fluorescent-silica.glitch.me/movies/${id}`, {
        method: 'PATCH',
        data,
    }).done(response => {
        getMovies()
    }).then(response => console.log(response))
}


function editMovie(id){
    $(`#card_form_${id}`).show()
    $(`#card_${id}`).hide()
}


