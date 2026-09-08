/* let section = document.getElementById("discussion-board");

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
        <img src="${post.articleImage}" alt="${post.title}" class="article-image">
        <p class="post-message">${post.message}</p>
        <div class="post-categories">
            ${containerHTML}
        </div>
        <div class = "post-engagement">
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
} */

/* let section = document.getElementById("discussion-board");

function versiontwo(post) {
  let containerHTML = "";

  for (let i = 0; i < post.categories.length; i++) {
    containerHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
  }
  const authorpostHTML = `
    <article class="discussion-post version-two" id="post-${post.id}">

        <img src="${post.articleImage}" alt="${post.title}" class = "article-image">

        <div class="version-two-overlay">

            <div class="post-top-row">

                <div class="post-categories">${containerHTML}</div>

            <div class="post-author">
                <img src="${post.author.image}" alt="Profile Pic" class="profile-image">

            <div class="author-info">
                <p class="author-name">${post.author.name}</p>
                <p class="author-username">${post.author.username}</p>
            </div>

            <p class="post-date">${post.postedDate}</p>
            </div>
        </div>

        <div class="post-glass-content">

            <h2 class="post-title">${post.title}</h2>

            <p class="post-message">${post.message}</p>

            <div class="post-bottom-row">
            
                <div class="post-engagement">
                    <p>❤️ <strong>${post.likes}</strong> likes</p>
                    <p>👁️ <strong>${post.views}</strong> views</p>
                    <p>💬 <strong>${post.replies}</strong> replies</p>
                </div>
            </div>
            </div>
        </div>
    </article>
    `;
  return authorpostHTML;
}

for (let i = 0; i < discussionPosts.length; i++) {
  let post = discussionPosts[i];
  if (i % 3 === 0) {
    section.innerHTML += versiontwo(post);
  }
} */

let section = document.getElementById("discussion-board");

function versionthree(post) {
  let containerHTML = "";

  for (let i = 0; i < post.categories.length; i++) {
    containerHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
  }
  const authorpostHTML = `
    <article class="discussion-post version-three" id="post-${post.id}">

        <img src="${post.articleImage}" alt="${post.title}" class = "article-image">

        <div class="post-content">
            <div class="post-author">
                <img src="${post.author.image}" alt="Profile Pic" class="profile-image">
                <div class="author-info">
                    <p class="author-name">${post.author.name}</p>
                    <p class="author-username">${post.author.username}</p>
                </div>
                <p class="post-date">${post.postedDate}</p>
            </div>
            <h2 class="post-title">${post.title}</h2>
            <p class="post-message">${post.message}</p>
            <div class="post-categories">${containerHTML}</div>
            <div class="post-engagement">
                <p>❤️ <strong>${post.likes}</strong> likes</p>
                <p>👁️ <strong>${post.views}</strong> views</p>
                <p>💬 <strong>${post.replies}</strong> replies</p>
            </div>
        </div>
    </article>
    `;
  return authorpostHTML;
}

for (let i = 0; i < discussionPosts.length; i++) {
  let post = discussionPosts[i];
  if (i % 3 === 0) {
    section.innerHTML += versionthree(post);
  }
}