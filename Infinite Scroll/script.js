const imgContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


const count=10;
const apiKey = 'GdSAB6h5Dxk3XKMbIsKZsMjL9ivTOBdnar144jD2Rd8';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
let photosArray =[];


function displayPhtoto(){
    photosArray.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href' ,photo.links.html);
        item.setAttribute('target', '_blank' );

        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);       
        img.setAttribute('title',photo.alt_description); 
        
        item.appendChild(img);
        imgContainer.appendChild(item);
       
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhtoto();
    } catch (error) {
        //Error
    }
}

getPhotos();