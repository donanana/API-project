const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movie = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    // console.log(movieList);
    if(movie.length === 0){
        movieList.classList.remove('visible');
    }else{
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filterMovies = !filter 
    ? movie 
    : movie.filter((movie) => movieinfo.title.includes(filter));

    filterMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + '-';
        for(const key in movie.info){
            if(key !== 'title'){
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
    console.log('movies',movie); 
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;
   
    if(
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
    ){
        console.log('Data Invalid');
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]:extraValue
        },
        id: Math.random(),
    };

    movie.push(newMovie);
    renderMovies();
    // console.log('newMovie',newMovie);
    // console.log('movie',movie);
};

const searchMovieHandler = () => {
const filterTerm = document.getElementById('filter-title').value;
renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click',addMovieHandler);
searchBtn,addEventListener('click',searchMovieHandler);