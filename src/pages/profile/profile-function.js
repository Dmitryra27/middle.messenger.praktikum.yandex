import '../../components/profile/profile.scss'

import {getProfileState} from "../../utils/profile-state";
import ChangePassword from '../../components/profile/changePassword';
import ChangeData from '../../components/profile/change-data';
import ProfileComponent from "../../components/profile/profile-component";

function Profile(user) {

    let state = getProfileState()

    if (state === 1) {//основной профиль
        return (`${ProfileComponent(user)}`);
    } else if (state === 2) {//изменить данные, в том числе аватар
        return (`${ChangeData()}`);
    } else if (state === 3) {//изменить пароль
        return (`${ChangePassword()}`);
    } else {
        return (`${ProfileComponent(user)}`);
    }


}

export default Profile;
