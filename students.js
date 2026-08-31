let section = document.getElementById("discussion-board");

function versionone (post){
    let containerHTML = "";

    for( let i = 0; i < post.categories.length; i++){
        containerHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
    }
    const authorpostHTML = `
    <article class="discussion-post version-one" id="post-${post.id}">
        <div class="post-author">
            <img src="${post.author.image}" alt="Profile Pic" class="profile-image">
            <div class="author-info">
                <p class="author-name">${post.author.name}</p>
                <p class="author-username">${post.author.username}</p>
            </div>
            <p class="post-date">${post.postedDate}</p>
        </div>
        <h2 class="post-title">${post.title}</h2>
        <img src="${post.articleImage}" alt="{post.title}" class="article-image">
        <p class="post-message">${post.message}</p>
        <div class="post-categories">
            ${containerHTML}
        </div>
        <div class = "post-engagment">
            <p>❤️ <strong>${post.likes}</strong> likes</p>
            <p>👁️ <strong>${post.views}</strong> views</p>
            <p>💬 <strong>${post.replies}</strong> replies</p>
        </div>
    </article>
    `;
    return authorpostHTML;
}


for (let i = 0; i < discussionPosts.length; i++){
    let post = discussionPosts[i];
    if( i % 3 === 0 ){
        section.innerHTML += versionone(post)
    }
}

function versiontwo (post){
    
}