import Handlerbars from 'handlebars';
import '../../components/profile/profile.css'
import tpl from './tpl';


export default function Profile(user) {
    return Handlerbars.compile(tpl)(user);
}



