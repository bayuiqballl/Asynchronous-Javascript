$.ajax({
    url: 'https://api.themoviedb.org/3/movie/550?api_key=572e9f2c533885e3d1f8d9c7071eb429',
    succes: results => {
        console.log(results);
    },
    error: (e) => {
        console.log(e.responseText)
    }
});