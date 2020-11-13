const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgGallery = document.getElementById('gallery');

const createGallery = element => {
    // console.log(element.url);
    const galleryList = document.createElement('li');
    galleryList.setAttribute('class', 'item')

    const imglist = document.createElement('img');
    imglist.setAttribute('src', element.url);
    imglist.setAttribute('alt', element.alt);
    imglist.setAttribute('width', '100%');
    // imglist.setAttribute('height', '100%');
    


    
    // console.log(galleryList);
    // console.log(imglist);
    galleryList.insertAdjacentElement('afterbegin', imglist)
    // console.dir(galleryList.children);
    return galleryList
   
}

const elements = images.map(createGallery)
imgGallery.append(...elements)