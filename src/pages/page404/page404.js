import Handlerbars from 'handlebars';
import './style.css'
import tpl from './tpl';

export default (props = {}) => {
    return Handlerbars.compile(tpl)(props);
}
