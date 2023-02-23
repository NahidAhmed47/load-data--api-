function usersData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUserName(data))
}
function displayUserName(users){
    const ul = document.getElementById('ul');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
// Create post
function loadPostData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => createPost(data))
}
function createPost(posts){
    const postDiv = document.getElementById('post-div');
    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Id: ${post.id}</h3>
        <h5>Title: ${post.title}</h5>
        <p>${post.body}</p>
        `;
        postDiv.appendChild(div);
    }
}
// Create Comments
function loadCommentData(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => createComment(data))
}
function createComment(comments){
    const parentDiv = document.getElementById('comment-div');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Id: ${comment.id}</h3>
        <h5>Email: ${comment.email}</h5>
        <p>${comment.body}</p>
        `;
        parentDiv.appendChild(div);
    }
}
// Load photos data 
function loadPhotosData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => createPhoto(data))
}
function createPhoto(photos){
    const parentDiv = document.getElementById('photos-div');
    for(const photo of photos){
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Album Id: ${photo.id}</h3>
        <h5>Title: ${photo.title}</h5>
        <img src="${photo.thumbnailUrl}"></img>
        `;
        parentDiv.appendChild(div);
    }
}