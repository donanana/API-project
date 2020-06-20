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

    // document.body.appendChild(p);
    const list = document.createElement('ul');
    list.className = 'movie-list';
    list.innerHTML = `
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
    return list;
  }
}

class ClassDemoList {
  demos = [
    new ClassDemo(
      1,
      'Unconventional Calculator',
      '../img/s1.png',
      '幫你算數學！',
      '../calculator/index.html'
    ),
    new ClassDemo(
      2,
      'Monster Killer',
      '../img/s2.png',
      '來打倒怪獸吧！',
      '../monster and player/index.html'
    ),
    new ClassDemo(
      3,
      'DOM Movie',
      '../img/s3.png',
      '來為喜歡的電影評分吧！',
      '../Favorite movie/index.html'
    ),
    new ClassDemo(
      4,
      'Music Player',
      '../img/s4.png',
      '聽個音樂放鬆心情～',
      '../music-player/index.html'
    ),
    new ClassDemo(
      5,
      'Video Player',
      '../img/s5.png',
      '看個影片放鬆心情～',
      '../Custumer video player/index.html'
    ),
    new ClassDemo(
      6,
      'Working with Objects',
      '../img/s6.png',
      '看個影片放鬆心情～',
      '../Working with Objects/index.html'
    ),
    new ClassDemo(
      7,
      'Mini Shop',
      '../img/s7.png',
      '看個影片放鬆心情～',
      '../minishop/index.html'
    ),
    new ClassDemo(
      8,
      'Meal Finder',
      '../img/s8.png',
      '看個影片放鬆心情～',
      '../w13/index.html'
    ),
  ];

  constructor(){}

  render(){
    const listList = document.createElement('main');
    for(const item of this.demos){
      const demoItem = new ClassDemoItem(item);
      const demoEl = demoItem.render();
      listList.append(demoEl);
    }
    demoList.append(listList);
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