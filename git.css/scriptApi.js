let postsElement = document.getElementById("api-output");
 
 
 fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json()).then(data => {
     console.log(data);
        data.forEach(post => {  
            let postDiv = document.createElement("div");
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p><hr>`;
            postsElement.appendChild(postDiv);
        });
     });    