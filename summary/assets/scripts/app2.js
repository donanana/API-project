

const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById('backdrop');

const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// console.log('cancelAddMovieButton',cancelAddMovieButton);
// console.log('confirmAddMovieButton',confirmAddMovieButton);

const userInputs = addMovieModal.querySelectorAll('input');
// console.log('userInputs',userInputs);

const entryTextSection = document.getElementById('entry-text');

const movies=[];

const updateUI=()=>{
    if(movies.length===0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
};

const clearMovieInput=()=>{
    for(const usrInput of userInputs){
        usrInput.value='';
    }
};

const toggleBackdrop = () => {
backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler=()=>{
    toggleMovieModal();
};

const renderNewMovieElement=(title,imageUrl,description,url,id)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <image src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}<h2>
    <P>${description}</p>
    <br>
    <br>               
    <a href="${url}">View-></a>
    <i class='far fa-edit'></i>
    <i class='far fa-trash-alt' onclick="deleteDemo(${id})"></i>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
    updateUI();
};
const addMovieHandler=()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const descriptionValue = userInputs[2].value;
    const urlValue = userInputs[3].value;
    const id = 9;
    // console.log(titleValue,imageUrlValue,ratingValue);
    if(
        titleValue.trim()===''||
    imageUrlValue===''||
    descriptionValue===''||
    urlValue===''
    ){
    alert('Please enter the data!');
    return;
    }
    const newMovie={
        title:titleValue,
        image:imageUrlValue,
        description:descriptionValue,
        url:urlValue,
        id:id
    }

    movies.push(newMovie);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.description,newMovie.url,newMovie.id);
    // console.log(movies);
};

startAddMovieButton.addEventListener('click',toggleMovieModal);

backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);
