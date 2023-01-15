import './left-charts.css'
import Chart from '../chart/chart';

function LeftCharts(charts) {

    return (`<div class="left-charts-box">
            <button class="chart-profile" onclick="window.location.href = '/profile'" type="button">Профиль></button>
            <input name='search' value="Поиск">
            <div class="left-charts-box__child">${Chart(charts[0])}</div>
            <div class="left-charts-box__child">${Chart(charts[1])}</div>
            <div class="left-charts-box__child">${Chart(charts[2])}</div>
            <div class="left-charts-box__child">${Chart(charts[3])}</div>
        </div>`
    );
}

export default LeftCharts


