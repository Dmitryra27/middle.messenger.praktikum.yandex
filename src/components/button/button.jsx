import './style.module.css';

function Button(value) {
    return (`
        <button class='button' type="submit" >
            ${value}
        </button>`
    );
}

export default Button;
