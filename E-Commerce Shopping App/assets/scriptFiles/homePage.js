const userData = JSON.parse(localStorage.getItem('currentUser'));
const categorySection = document.querySelector('.category-section');
const categoriesBlock = document.querySelector('.categories-block');
const productsBlock = document.querySelector('.product-block');
const userName = document.querySelector('.user-name');
const userImg = document.querySelector('.img-icon');
const searchBtn = document.querySelector('.search-button');
const searchValue = document.querySelector('.search');
const productsSection = document.querySelector('.products-section')
const productDetail = document.querySelector('.individual-product')
const activeSlide = document.querySelector('.carousel-item')
const productDetailSection = document.querySelector('.productDetailSection')
const updatePopUp = document.querySelector('.modal-window')
const closePopUp = document.querySelector('.close-btn')
const backGround = document.querySelector('.main-container')
const form = document.forms.updateData
const brandElement = form.elements.brand
const categoryElement = form.elements.category
const discountPercentageElement = form.elements.discountPercentage
const priceElement = form.elements.price
const ratingElement = form.elements.rating
const stockElement = form.elements.stock
const titleElement = form.elements.title
const descriptionElement = form.elements.description
const thumbnailElement = form.elements.thumbnail
const imagesElement = form.elements.images
const baseURL = 'https://dummyjson.com/';
const categoriesEndPointURL = 'products/categories';
const productEndPOintURL = `products`;
let skipProducts = 0;


userName.innerHTML = userData.firstName + ' ' + userData.lastName
userImg.src = userData.image

// generic function to fetch data
async function fetchRequest(endPoint) {
    const response = await fetch(`${baseURL}${endPoint}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userData.token}`,
            'Content-Type': 'application/json'
        },
    })
        .then(errorHandling)
        .then(resposne => {
            return resposne
        });
    return response
};
// error handling for fetch requests
function errorHandling(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
};

// function to get products data
async function getProductsData(endPoint) {
    const data = await fetchRequest(endPoint)
    data.products.map(product => {
        let html = `<div class="card product border-0 rounded-3 my-2 mx-2" style="width: 225px" id="product${product.id}">
    <img
      src= ${product.thumbnail}
      class="product-img rounded-top-3"
      alt="not founds"
    />

    <div class="card-body py-0">
      <h5 class="card-title mt-3 text-center ">${product.title.toUpperCase()}</h5>
      <p class="card-text  my-2">
       ${product.description.slice(0, 65)}...
      </p>
      <p class="golden mb-1"
        >${ratingOfProduct(`${product.rating}`)} ${product.rating} stars</p
      >
      <p class="info-para text-end mb-0">Stock (${product.stock})</p>

      <p class="mt-0 mb-1">
        <b>$${product.price}</b>
        <span class="text-decoration-line-through ms-2 info-para">$${Number(product.price * product.discountPercentage / 100 + product.price).toFixed(2)}</span>
      </p>
    </div>
    <div class="further-info d-flex justify-content-between py-2">
      
        <h5 class="category-name">Category: <span class="product-category">${product.category}</span></h5>
      
      <button type="button" class="goto" onclick="getProductDetail(${product.id})" >
        <i class="fa-solid fa-arrow-up-right-from-square goto"></i>
      </button>
    </div>
    <div class="product-operation dropdown-toggle ms-2" data-bs-toggle="dropdown">
        <i class="fa-solid fa-ellipsis ms-2 mb-2"></i>
    </div>
        <ul class="dropdown-menu">
          <li onclick="updateProduct( event, 'product${product.id}')"><a class="dropdown-item">Update</a></li>
          <li onclick="deleteProduct(event, 'product${product.id}')"><a class="dropdown-item">Delete</a></li>
        </ul>
  </div>`
        productsBlock.insertAdjacentHTML("beforeend", html)
    })
}
getProductsData(productEndPOintURL)

// function to calculate stars for ratting
function ratingOfProduct(rating) {
    let stars = Math.trunc(rating)
    let template = ''
    for (let i = 0; i < stars; i++) {
        let html = `<i class="fa-solid fa-star"></i>`
        template = html + template
    }
    if (rating - stars > 0.5) {
        template = template + `<i class="fa-solid fa-star-half-stroke"></i>`
    } else {
        template = template + `<i class="fa-regular fa-star"></i>`
    }
    return template
}

// function to display categories
async function getCategories() {
    const category = await fetchRequest(categoriesEndPointURL)
    category.map(category => {
        let html = `<div class="categories text-center mt-3 me-2 " onclick="getProductsByCategory('${category}')"> 
            <button class="btn category-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"">
            ${category[0].toUpperCase()}${category.slice(1, category.length)}
            </button>
            <ul class="dropdown-menu ${category} py-0 listByProduct">

            </ul>
        </div>`
        categoriesBlock.insertAdjacentHTML('beforeend', html)

    })
}
getCategories()

//  function to display products by category 
async function getProductsByCategory(category) {
    const productByCategoryURL = `products/category/${category}`
    const data = await fetchRequest(productByCategoryURL)
    let template = ''
    data.products.map(((product) => {
        let html = `<li class=" product-list-item product-detail " onclick="getProductDetail(${product.id})"> <a class="py-2 dropdown-item" href="#">${product.title} </a></li>`
        template = html + template
    }))
    document.querySelector(`.${category}`).innerHTML = template
}

// function call to get products on search
searchBtn.addEventListener('click', searchProducts)
function searchProducts() {
    const searchEndPointURL = `products/search?q=${searchValue.value}`
    if (searchValue.value.length > 0) {
        categorySection.classList.add('hidden')
        getProductsData(searchEndPointURL)
        searchValue.value = ''
    } else {
        categorySection.classList.remove('hidden')
    }
}

// function for pagination
window.addEventListener('scroll', addMorePost)
function addMorePost() {
    if ((window.innerHeight + window.scrollY - 23) >= document.body.offsetHeight && !productsSection.classList.contains('hidden')) {
        skipProducts = + 30
        const paginationURL = `products?limit=30&skip=${skipProducts}`;
        getProductsData(paginationURL)
        console.log('kkn')
    }
}

// function to display product detail page 
async function getProductDetail(id) {
    const productDetailURL = `products/${id}`
    const detail = await fetchRequest(productDetailURL)
    productDetailSection.classList.remove('hidden')
    productsSection.classList.add('hidden')
    categorySection.classList.add('hidden')
    let html = ` <div class="d-flex  product-detail-card col-md-9 col-sm-8 col-8 px-0 ">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        ${imgsOfProduct(detail.images)}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="px-3 pt-3 ">
                        <h3 class="text-center">${detail.title}</h3>
                        <p>${detail.description}</p>
                        <p class="golden mb-1">${ratingOfProduct(`${detail.rating}`)} ${detail.rating} stars</p>
                        <p class="info-para me-2 text-end mb-0">Stock (${detail.stock})</p>
                        <div class="d-flex justify-content-between">
                        <p class="mt-0 mb-1">
                            <b>$${detail.price}</b>
                            <span class="text-decoration-line-through ms-2 info-para">$${Number(detail.price * detail.discountPercentage / 100 + detail.price).toFixed(2)}</span>
                        </p>
                        <div class="d-flex mt-2 me-2">
                            <i class="fa-solid fa-plus pt-1 me-2"></i>
                            <p>Qauntity </p>
                            <i class="fa-solid fa-minus pt-1 ms-2"></i>
                        </div>
                    </div>
   
                    <div class="further-info d-flex justify-content-between py-4 px-0">
                        <h5 class="category-name">Category: <span class="product-category">${detail.category}</span></h5>
                        <div class="d-flex product-detail-btn">
                        <button class="btn btn-success px-2 py-2 mb-2 text-white me-3"><i class="fa-solid fa-cart-plus me-2"></i> Add to cart</button>
                        <button class="btn btn-light px-3 py-2 mb-2 text-dark" onclick="goToMainPage()">Back to Main</button>
                    </div>
                </div>
            </div>
        </div>`
    productDetail.insertAdjacentHTML('beforeend', html)
}

// function to display carousel for product details
function imgsOfProduct(imgs) {
    let template = ''
    imgs.map((img, i) => {
        let html = `<div class="carousel-item ${i == 0 ? 'active' : ''}">
        <img src=${img} class="d-block w-100 slide-img" alt="not found">
    </div>`
        template = html + template
    })
    return template
}

// function will set the main page
function goToMainPage() {
    productDetailSection.classList.add('hidden')
    productsSection.classList.remove('hidden')
    categorySection.classList.remove('hidden')
}

// function to delete the product
function deleteProduct(e, id) {
    document.querySelector(`#${id}`).remove()
}
// function to close pop up window and remove blur from background
const closeModal = function () {
    updatePopUp.classList.add("hidden")
    backGround.classList.remove("blur")
}
// function to close pop up window and remove blur from background on escape key press
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !updatePopUp.classList.contains('hidden')) {
        closeModal()
    }
})
closePopUp.addEventListener('click', closeModal) 

// function to update product data 
function updateProduct() {
    updatePopUp.classList.remove("hidden")
    backGround.classList.add("blur")
}

