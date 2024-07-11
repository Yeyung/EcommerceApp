window.onscroll = () =>{
    // Add Sticky class to header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
}


var container = document.querySelector('.body_container');

const Items = [
    {id:4,path:'nikeaf1.jpg',title:'Nike AF1 Triple White',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop2.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'laptop3.jpg',title:'HP Laptop',snippet:'GH₵ 300.00'},
    {id:4,path:'foamcleaner.jpg',title:'Foam Cleaner',snippet:'GH₵ 300.00'},
    {id:4,path:'iphone14promax.jpg',title:'Iphone 14 Pro Max',snippet:'GH₵ 15,000.00'},
    {id:1,path:'bottle-5689969_1280.png',title:'Bottle',snippet:'GH₵ 300.00'},
    {id:2,path:'monitor-2004457_1280.png',title:'Apple Monitor',snippet:'GH₵ 300.00'},
    {id:3,path:'running-clock-1329309_640.png',title:'Watch',snippet:'GH₵ 300.00'},
    {id:3,path:'ps4.jpg',title:'Ps4 Gaming Console'},
    {id:3,path:'PS5.jpg',title:'Ps5 Gaming Console',snippet:'GH₵ 300.00'},
    {id:4,path:'nikeaf1.jpg',title:'Nike AF1 Triple White',snippet:'GH₵ 300.00'},
]


// Items.forEach(element => {
//     var itemHTML = `
//      <div class="image">
//          <img src="/images/${element.path}" alt="">
//          <div class="tag">
//          <p>Top</p>
//          </div>
//      </div>
//      <div class="main">
//          <p class="snippet">${element.title}</p>
//          <p class="price">${element.snippet}</p>
//          <div class="bookmark">
//              <img src="/images/icons/bookmark.svg" alt="">
//          </div>
//      </div>
//      `;

//  var newItem = document.createElement('div');
//  newItem.className='item'
//  newItem.innerHTML = itemHTML;
//  container.appendChild(newItem);
// });




window.onscroll = () =>{
    if (window.innerWidth < 1280) return;

    // // Add Sticky class to header
    let header = document.querySelector('.navs');
    let body = document.querySelector('.body');
    if(window.scrollY<308){
        header.classList.remove('sticky');
        body.classList.remove('stickys');
    }else{
        header.classList.add('sticky');
        body.classList.add('stickys');
    }
    if(window.scrollY>800){
        header.classList.remove('sticky');
        body.classList.remove('stickys');
    }
}




// ===================================
var currentSlide = 0;
var carousel = document.getElementById('carousel');
var slides = document.querySelectorAll('.carousel-item');
var totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  var offset = -index * 100 + '%';
  carousel.querySelector('.carousel-inner').style.transform = 'translateX(' + offset + ')';
  currentSlide = index;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
setInterval(nextSlide, 3000); 


// =====================================
const navs = [
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
    {img:'/images/vehicles.png',title:'Vehicles'},
]

// ======================================================

// const selectCat = document.getElementById('select-cat');
//         const selectRegion = document.getElementById('select-region');
//         const selectPrice = document.getElementById('select-price');
//         const applyFiltersButton = document.getElementById('apply-filters');
//         const items = document.querySelectorAll('.item');

//         applyFiltersButton.addEventListener('click', () => {
//             const selectedCategory = selectCat.value;
//             const selectedRegion = selectRegion.value;
//             const selectedPrice = selectPrice.value;

//             items.forEach(item => {
//                 const itemCategory = item.getAttribute('data-category');
//                 const itemRegion = item.getAttribute('data-region');
//                 const itemPrice = parseFloat(item.getAttribute('data-price'));
                
//                 let categoryMatch = (selectedCategory === 'all' || selectedCategory === itemCategory);
//                 let regionMatch = (selectedRegion === 'all' || selectedRegion === itemRegion);
//                 let priceMatch = false;

//                 if (selectedPrice === 'all') {
//                     priceMatch = true;
//                 } else {
//                     const [minPrice, maxPrice] = selectedPrice.split('-').map(parseFloat);
//                     priceMatch = (itemPrice >= minPrice && itemPrice <= maxPrice);
//                 }

//                 if (categoryMatch && regionMatch && priceMatch) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         });

//         // Initial display of items: show all items
//         document.addEventListener('DOMContentLoaded', () => {
//             items.forEach(item => {
//                 item.style.display = 'block';
//             });
//         });












const selectCat = document.getElementById('select-cat');
const selectRegion = document.getElementById('select-region');
const selectPrice = document.getElementById('select-price');
const applyFiltersButton = document.getElementById('apply-filters');
const classifiedsContainer = document.getElementById('classifieds-container');

applyFiltersButton.addEventListener('click', () => {
    const selectedCategory = selectCat.value;
    const selectedRegion = selectRegion.value;
    const selectedPrice = selectPrice.value;

    console.log(selectedCategory,selectedRegion,selectedPrice)
    console.log('====================================');
    console.log(JSON.stringify({ region:selectedRegion,category:selectedCategory,price:selectedPrice }));
    console.log('====================================');

    fetch('http://localhost:3000/filter', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ region:selectedRegion,category:selectedCategory,price:selectedPrice })
    })
    .then(response => response.json())
    .then(data => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        // classifieds= data
        displayClassifieds(data);
    })
    .catch(error => console.error('Error fetching classifieds:', error.message));
});

function displayClassifieds(classifieds) {
    classifiedsContainer.innerHTML = '';
    classifieds.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'b-listing-cards__item';
        itemElement.dataset.category = item.category_id;
        itemElement.dataset.region = item.region;
        itemElement.dataset.price = item.price;

        itemElement.innerHTML = `
            <div class="fw-card qa-fw-card b-trending-card h-height-100p">
<a href="products/${item._id}">
<div class="fw-card-media qa-fw-card-media" style="background-color:#FFFFFF;background-image:url('${item.image}')">
    <!---->
    <div class="b-trending-card__counter">1
</div>
</div>
<div class="fw-card-content qa-fw-card-content">
    <div class="b-trending-card__title"> ${item.name}
</div>
    <div class="b-trending-card__price">${item.price}
</div>
    <div class="fw-card-content-icon">
        <button type="button" aria-label="Favorite" class="fw-button qa-fw-button fw-button--type-success fw-button--size-little fw-button--circle fw-button--has-icon">
            <span class="fw-button__content">
                <svg width="35" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>

                <!---->
            </span>
        </button>
    </div>
</div>
</a>
</div>
        `;
        classifiedsContainer.appendChild(itemElement);
    });
}