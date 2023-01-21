import Handlerbars from 'handlebars';
import './style.scss'
import tpl from './tpl';

export default (props = {}) => {
    return Handlerbars.compile(tpl)(props);
}

