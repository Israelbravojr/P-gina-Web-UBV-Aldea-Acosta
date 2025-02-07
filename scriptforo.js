function addPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === '') {
        alert('Escribe algo antes de publicar.');
        return;
    }

    const postsContainer = document.getElementById('posts-container');
    const newPost = document.createElement('div');
    newPost.classList.add('post');

    const postText = document.createElement('p');
    postText.textContent = postContent;

    const postDate = document.createElement('small');
    const currentDate = new Date();
    postDate.textContent = `Publicado el ${currentDate.toLocaleDateString()} a las ${currentDate.toLocaleTimeString()}`;

    newPost.appendChild(postText);
    newPost.appendChild(postDate);
    postsContainer.insertBefore(newPost, postsContainer.firstChild);

    document.getElementById('post-content').value = '';
}


