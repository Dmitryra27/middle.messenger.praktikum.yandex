import './posts.css'
import Post from "../post/post";

function Posts(posts) {

    return (`
    <div class="posts-box">
    
    <div class="data">${posts[0].data}</div>
    ${Post(posts[0])}
    ${Post(posts[1])}
    ${Post(posts[2])}
        
    </div>`);
}

export default Posts
