const demoList = document.getElementById('demo-list');
const demo = document.getElementById('demo');

class ClassDemo {
  constructor(id,title, imageUrl, description, handlerCode) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.handlerCode = handlerCode;
  }
}

class ClassDemoItem{
  constructor(classDemo){
    this.classDemo = classDemo;
  }

  render(){
    const card = document.createElement('ul');
    card.className = 'movie-list';
    card.innerHTML = `
    <li class="movie-element" >
    <div class="movie-element__image">
    <image src="${this.classDemo.imageUrl}" alt="${this.classDemo.title}">
    </div>
    <div class="movie-element__info">
    <h2>${this.classDemo.title}<h2>
    <P>${this.classDemo.description}</p>
    <br>
    <br>               
    <a href="${this.classDemo.handlerCode}">View-></a>
    <i class='far fa-edit'></i>
    <i class='far fa-trash-alt' onclick="deleteDemo(${this.classDemo.id})"></i>
    </li>
    `;
    return card;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      1,
      'Calculator Pro',
      '../img/m1.png',
      '結合上學期期中考考過的計算機demo，及這學期學的javascript程式碼，製作更好看的計算機',
      '../calculator pro/index.html'
    ),
    new ClassDemo(
      2,
      'Paper Scissor Stone',
      '../img/m2.png',
      '將上課學過但這學期沒列入project的Paper Scissor Stone美化，使他更加完整',
      '../roma/index.html'
    ),
    new ClassDemo(
      3,
      'Tic Tac Toe',
      '../img/m3.png',
      '上學期學過的Tic Tac Toe，javascript版',
      '../TicTacToe/index.html'
    ),

  ];

  constructor(){}

  render(){
    const cardList = document.createElement('main');
    for(const item of this.demos){
      const demoItem = new ClassDemoItem(item);
      const demoEl = demoItem.render();
      cardList.append(demoEl);
    }
    demoList.append(cardList);
  }
}
const classDemoList = new ClassDemoList();
console.log(ClassDemoList);
classDemoList.render();


const showDemoList = (item) => {
  demoList.classList = 'visible';
  demo.classList = 'invisible';
};

const showDemo = (srcUrl) => {
  demoList.classList = 'invisible';
  demo.classList = 'visible';
  demo.style.marginTop = '100px';
  demo.innerHTML = `<iframe src="${srcUrl}" height="900px" width=100% ></iframe`;
};

const deleteDemo = id => {
  // console.log('delete 1',classDemoList);
  classDemoList.demos.forEach((item,i) => {
    if(item.id == id) classDemoList.demos.splice(i,1);
  })
  demoList.innerHTML = '';
  classDemoList.render();
};

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

const renderNewMovieElement=(title,imageUrl,description,url)=>{
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
    <i class='far fa-trash-alt'></i>
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
        url:urlValue
    }

    movies.push(newMovie);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.description,newMovie.url);
    // console.log(movies);
};

startAddMovieButton.addEventListener('click',toggleMovieModal);

backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);
