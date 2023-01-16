import Header from "../header/header";
import Footer from "../footer/footer";
import LeftCharts from "../left-charts/left-charts";
import Posts from "../posts/posts";
import './main-component.scss'

function MainComponent(charts, user, posts) {


    return (`<div class="container__main">
            <div id='left-charts' class="container__left-charts">
                ${LeftCharts(charts)}
            </div>
            <div class="container__central-charts">
                <div id="header" class="container__central__header">
                    ${Header(user)}
                </div>
                <div id='central-charts' class="central-charts">
                    ${Posts(posts)}
                </div>
                <div  class="container__central__footer">
                    ${Footer()}
                </div>
            </div>
        </div>`);

}

export default MainComponent;
