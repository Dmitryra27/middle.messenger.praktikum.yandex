import '../../components/profile/profile.scss'
import ChangeData from '../../components/profile/change-data';

function ProfileChangeDatas(user) {
    return (`${ChangeData(user)}`);
}

export default ProfileChangeDatas;
