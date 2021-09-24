window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    var postAPI = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(postAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            document.getElementById('posts-block-from-id').innerHTML = `
            <div class="posts-frame">
            <p><span class="properties">UserID: </span> ${posts.userId}</p> 
            <p><span class="properties">ID: </span>${posts.id}</p>  
            <p><span class="properties">Title: </span> ${posts.title}</p> 
            <p><span class="properties">Body: </span> ${posts.body}</p> <br>
            </div>
            <br>
            `;
        })

    var postAPI = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(postAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            for (i = 0; i < posts.length; i++) {

                var comments = document.getElementById('all-comments').innerHTML = `
                                <div class="posts-frame">
                                <p><span class="properties">PostID: </span> ${posts[i].postId}</p> 
                                <p><span class="properties">ID: </span>${posts[i].id}</p>  
                                <p><span class="properties">Name: </span> ${posts[i].name}</p> 
                                <p><span class="properties">Email: </span> ${posts[i].email}</p>
                                <p><span class="properties">Body: </span> ${posts[i].body}</p> 
                                <br>  
                                </div>
                                <br>
                                `; 
                document.getElementById('comment-from-id').innerHTML += comments[i];
            }
        })
}









