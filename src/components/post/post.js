import './post.css';

function Post(post) {

    const {text, time, myPost} = post;

    if (myPost === false) {
        return (`
    <div class="post-box left">
         <p class="post-box__text ">${text}</p>
         <p class="post-box__time right">${time}</p>
         
    </div>`
        );
    } else {
        return (`
    <div class="post__box right">
         <p class="post-box__text">${text}</p>
            <p class="post-box__time right">${time}</p>
    </div>`
        );
    }

}

export default Post
