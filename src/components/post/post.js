import './post.scss';

function Post(post) {

    const {text, time, myPost} = post;

    if (myPost === false) {
        return (`
    <div class="post-box left">
         <div class="post-box__text ">${text}</div>
         <div class="post-box__time text-center">${time}</div>
         
    </div>`
        );
    } else {
        return (`
    <div class="post-box row right margin-right30 text-center">
         <div class="post-box__text">${text}</div>
         <div class ="post-box__time right margin-top">${time}</div>
    </div>`
        );
    }

}

export default Post
