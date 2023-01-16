import Handlerbars from 'handlebars';
import './main.scss'
import tpl from './tpl';


export default (props = {charts, user, post}) => {
    return Handlerbars.compile(tpl)(props);
}
