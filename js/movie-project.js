// $.ajax({
//     url: "https://codeup-json-server.glitch.me/movies",
//     type: 'GET',
//     data: 'title'
// })
fetch('https://codeup-json-server.glitch.me/movies') // make a request - GET
    .then(response => response.json())
    .then(data =>{
        // console.log(data); //
        return data.title;
    })
    .then(dataTitle => {
        fetch(`https://codeup-json-server.glitch.me/movies?posttitle=${dataTitle}`)
            .then(response => response.json())
            .then( data => {
                console.log(data);
                data.forEach(comment => {
                    $("div").append(`<h4>${comment.title}</h4><hr><pr>${comment.body}</pr>`)
                })
            })
    })
    // we have the data in json format, now we can manipulate it
    .catch(error => {
        console.log(error);
        console.error(error);
    });




// let $loading = $('#loadingDiv').hide();
// $(document)
//     .ajaxStart(function () {
//         $loading.show();
//     })
//     .ajaxStop(function () {
//         $loading.hide();
//     });