import './chart.css';

function Chart(chart) {
    const {avatar, display_name, time, text, counter} = chart;
    return (`<div class='chart-box'>
    <div class = 'chart-box__image' style="background-image: ${avatar}"></div>
    <div class='chart-box__box'>
        <div class="child1">${display_name}</div>
        <div class="child2">${time}</div>
        <div class="child3">${text}</div>
        <div class="child4">${counter}</div>
    
    </div>
    
    </div>`);
}

export default Chart;