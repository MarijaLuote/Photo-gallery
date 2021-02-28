class PhotoElement {
    constructor(url, description) {
        this.url = url;
        this.description = description;
    }
}

// USER INTERFACE
const UI = {
    arrowLeft: document.querySelector(".arrow.left"),
    arrowRight: document.querySelector(".arrow.right"),
    galleryItem: document.querySelector(".galleryItem"),
    index: document.querySelector(".index"),
    description: document.querySelector(".description"),
    slideGallery: document.querySelector(".slideGallery")
};

const context = {
    photos: photos = [],
    currentPhotoIndex: 0
};

function initGallery() {
    photos.push(new PhotoElement("https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/boracay-philippines/overview/boracay-phillippines-willys-rock-on-beach.jpg?$1024x700$", "Boracay,Philippines"));

    photos.push(new PhotoElement("https://www.travelingeast.com/wp-content/uploads/2012/11/Depositphotos_20018993_xl-2015-scaled-1920x1280.jpg", "La Digue Island, Seychelles"));

    photos.push(new PhotoElement("https://bb.trvcdn.net/uploads/galleries/56721788657429dc241303_bingin_beach_678.jpg", "Bingin Beach, Bali, Indonesia"));

    photos.push(new PhotoElement("https://images.squarespace-cdn.com/content/v1/54a86727e4b0e845493d92a0/1466736386021-E57FL4DIMCUKO9A0C734/ke17ZwdGBToddI8pDm48kF41kojsx_orvDWyNtD6Swx7gQa3H78H3Y0txjaiv_0fHWpUEmQZkX684UWF7bhg2mLknFqnyJsLGnByhN51CkVAttMx9z6hDQyulIRTWaxFZGjoBKy3azqku80C789l0p4XabXLlNWpcJMv7FrN_NKI7KDdhz3sFEZakH7vWP5IqJ40jujPdu8JZUsMqfn_Xg/NEW--McWay+Falls+Big+Sur+California.jpg?format=1500w", "McWay Falls, Big Sur, California"));

    photos.push(new PhotoElement("https://s3-eu-west-2.amazonaws.com/parikiaki-cdn-1/wp-content/uploads/20191107115337/fig-tree-bay-one.jpg", "Fig Tree Bay – Protaras, Cyprus"));

    photos.push(new PhotoElement("https://www.planetware.com/photos-large/GR/greece-zakynthos-navagio-beach.jpg", "Navagio beach, Zakynthos, Greece"));

    initThumbnails();

    showPhotoByIndex(context.currentPhotoIndex);

    
}


function showPhotoByIndex(photoIndex) {
    const photo = context.photos[photoIndex];

    UI.index.innerHTML = `${photoIndex + 1} / ${context.photos.length}`
    UI.description.innerHTML = photo.description;

    UI.galleryItem.src = photo.url;
}

UI.arrowRight.addEventListener("click", () => {
    context.currentPhotoIndex++;

    if (context.currentPhotoIndex > context.photos.length - 1)
        context.currentPhotoIndex = 0;

    showPhotoByIndex(context.currentPhotoIndex);
});

UI.arrowLeft.addEventListener("click", () => {
    context.currentPhotoIndex--;

    if (context.currentPhotoIndex < 0)
        context.currentPhotoIndex = context.photos.length - 1;

    showPhotoByIndex(context.currentPhotoIndex);
});

initGallery();

function initThumbnails() {
    for (let i = 0; i < context.photos.length;i++) {
        const photo = context.photos[i];
        UI.slideGallery.innerHTML += `<img onclick ="showPhotoByIndex(${i})"src="${photo.url}">`;
    }
}
