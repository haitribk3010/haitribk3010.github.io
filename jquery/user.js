window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    var postAPI = `https://jsonplaceholder.typicode.com/users/${id}`;

    fetch(postAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (post) {
            document.getElementById('user-from-id').innerHTML = `
            <div class="posts-frame">
            <p><span class="properties">ID: </span> ${post.id}</p> 
            <p><span class="properties">Name: </span>${post.name}</p>  
            <p><span class="properties">Username: </span> ${post.username}</p> 
            <p><span class="properties">Email: </span> ${post.email}</p> 
            <p><span class="properties">Address: </span> <br>
            <span>Street: ${(post.address.street)} </span> <br>
            <span>Suite: ${(post.address.suite)} </span><br>
            <span>City: ${(post.address.city)} </span><br>
            <span>Zipcode: ${(post.address.zipcode)} </span><br>
            <span>Geo: </span> <br>
            <span>Lat: ${(post.address.geo.lat)} </span><br>
            <span>Lng: ${(post.address.geo.lng)} </span><br>
            ${(post.address.street)}</p> 
            <p><span class="properties">Phone: </span> ${post.phone}</p> 
            <p><span class="properties">Website: </span> ${post.website}</p> 
            <p><span class="properties">Company: </span><br>
            <span>Name: ${(post.company.name)} </span> <br>
            <span>Catch Phrase: ${(post.company.catchPhrase)} </span> <br>
            <span>BS: ${(post.company.bs)} </span> <br>
            <br>
            </div>
            `;
        })

    var postAPI = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    fetch(postAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (posts) {
            for (i = 0; i < posts.length; i++) {

            var comments = document.getElementById('all-posts').innerHTML = `
            <div class="posts-frame">
                                <p><span class="properties">UserID: </span> ${id}</p> 
                                <p><span class="properties">ID: </span>${posts[i].id}</p>  
                                <p><span class="properties">Title: </span> ${posts[i].title}</p> 
                                <p><span class="properties">Body: </span> ${posts[i].body}</p> 
                                <br>  
                                
                                </div>
                                `;
            document.getElementById('posts-from-id').innerHTML += comments[i];
            }
        })
}









