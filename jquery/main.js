
window.onload = function () {
    var postAPI = 'https://jsonplaceholder.typicode.com/posts';

    fetch(postAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            var allPosts = posts.map(function (post) {
                return `
            <div class="posts-frame">
            <p><span class="properties">UserID: </span> ${post.userId}</p>
            <p><span class="properties">ID: </span>${post.id}</p>
            <p><span class="properties">Title: </span> ${post.title}</p>
            <p><span class="properties">Body: </span> ${post.body}</p>
            <a class = "readmore" href="detail.html?id=${post.id}">Read more</a>    
            </div>
            <br>

                    `
            });
            var postsBlock = allPosts.join('');
            document.getElementById('posts-block').innerHTML = postsBlock;

        })

}


