import * as userDataHandling from './userDataHandling.js'
var currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
const userName = document.querySelector('.userName')
const friendList = document.querySelector('.friends')
const tagList = document.querySelector('#tags')
const postList = document.querySelector('.post')
const postTagList = document.querySelector('#post-Tag')
userName.innerText = currentUser.firstName + ' ' + currentUser.lastName

// function to fetch friend list and show it on DOM
!async function () {
    let response = await fetch('https://dummyapi.io/data/v1/user?limit=10', {
        headers: { 'app-id': '6379b53d84d948d558465a98' }
    }).then((response) => response.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('API for friend List is not working properly');
        });
    friendList.innerHTML = ''
    response.data.forEach((friend) => {
        const html = `<li class="chats"> 
        <div class="d-flex p-2" >
            <img
                src=${friend.picture}
                alt="pic of friend"
                class="img-icon me-3"
                />
            <p class="align-middle friend-name pt-2 mb-0">${friend.title[0].toUpperCase()}${friend.title.slice(1)} ${friend.firstName} ${friend.lastName}</p>
        </div>
        </li >`
        friendList.insertAdjacentHTML('beforebegin', html)
    })
    friendList.remove()
}();

// function to fetch tags and create DOM Element dynamically
!async function () {
    let response = await fetch('https://dummyapi.io/data/v1/tag?limit=10', {
        headers: { 'app-id': '6379b53d84d948d558465a98' }
    }).then((response) => response.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('API for tag List is not working properly');
        });
    tagList.innerHTML = ''
     response.data.slice(4, 10).forEach((tag) => {
        const html = ` <div class="tags mb-2 me-2">
        <a href=""><p class="tag-block mb-0">${tag}</p></a>
      </div>`
        tagList.insertAdjacentHTML('beforebegin', html)
    })
    tagList.remove()
}();

// function to fetch post data and create DOM Element dynamically
!async function () {
    let response = await fetch('https://dummyapi.io/data/v1/post?limit=10', {
        headers: { 'app-id': '6379b53d84d948d558465a98' }
    }).then((response) => response.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.error('API for post List is not working properly');
        });
        console.log(response)
        postList.innerHTML = ''
        response.data.forEach((post) => {
           const html = ` <div class="post mb-2 p-3">
           <div class="d-flex">
             <img
               src= ${post.owner.picture}
               class="img-icon"
               alt="img of post publisher "
             />
             <div class="ms-2">
               <h3 class="subheading mb-0">${post.owner.firstName} ${post.owner.lastName}</h3>
               <p class="lighter-text">${post.publishDate}</p>
             </div>
           </div>
           <img
             src= ${post.image}
             class="img-fluid post-img"
             alt="Post img"
           />
           <div class="d-flex justify-content-between">
             <div class="pt-2 ps-2">
               <p class="forget-text">${post.text}</p>
             </div>
             <div class="d-flex mt-2">
               <i class="fa-regular fa-thumbs-up pt-2 ms-3 me-1 likeBtn"  onClick="likedPost(event)"></i>
               <span>${post.likes}</span> <i class="fa-regular fa-comment pt-2 ms-3 me-1 commentBtn"></i>
               <span>5</span>
               <i class="fa-regular fa-share-from-square pt-2 ms-3 me-1 shareBtn"></i>
               <span class="me-3">3</span>
             </div>
           </div>

           <div class="d-flex">
             <h4 class="me-2 pt-2 subheading">Tags:</h4>
             <div class="d-flex flex-wrap justify-content-center">
               ${postTag(post)}
             </div>
           </div>
         </div>`
           postList.insertAdjacentHTML('beforebegin', html)
       })
       postList.remove()
}();

// function to create Post tags element
function postTag(post){
    let tagPostElement = ''
     post.tags.forEach((tag)=>{
        let html = `<div class="tags mb-2 me-2">
        <a href=""><p class="tag-block mb-0">${tag}</p></a>
        </div>` 
        tagPostElement = tagPostElement + html
       })
       return tagPostElement
}

// Post like
window.likedPost = likedPost
function likedPost(e){
  e.target.classList.toggle("fa-solid")

}

// function to fetch data for comments and display it on dom
!async function () {
  let response = await fetch('https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {
      headers: { 'app-id': '6379b53d84d948d558465a98' }
  }).then((response) => response.json())
      .then(response => {
          return response;
      })
      .catch(error => {
          console.error('API for tag List is not working properly');
      });
      console.log(response)
}();
