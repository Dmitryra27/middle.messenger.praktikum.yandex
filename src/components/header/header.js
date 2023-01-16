import './style.scss'

//import image from '../../pages/proba/images/avatar13.jpg';

function Header(user) {

    return (
        `<div class="header-user-profile">
            <div class="user-avatar" ></div>
            <div class="user-profile-image"></div>
            <span class="user-name">${user.first_name}</span>
            <div class="user-menu" >
                <div class="points"  onclick="window.location.href = '/profile'" >
                    
                </div>
                
            </div>
        </div>`
    );
}

export default Header;


