import './style.module.scss';

function Button(value) {
    return (`
        <button class='button' type="submit" >
            ${value}
        </button>`
    );
}

export default Button;
