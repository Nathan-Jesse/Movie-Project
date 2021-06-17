$.ajax('https://codeup-json-server.glitch.me/movies')
    .then(response => {
        console.log(response);
        setTimeout(function (){
            $('.progress').hide();
            addMovies(response);
        }, 3500);
        return response
    })