import { items } from './data.js';
var renderGrid = function () {
    var gridElement = document.querySelector('.grid');
    var count = 7 * 24;
    for (var i = 0; i < count; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.appendChild(cell);
    }
};
renderGrid();
var renderCalendar = function (items) {
    items.forEach(function (item) {
        var role = item.role, start = item.start, name = item.name;
        var dayElm = document.getElementById("day".concat(start.day));
        var itemStyle = "margin-top:".concat(Number(start.hour) * 60, "px;");
        var itemClass = "calendar-item item-".concat(role);
        if (role === 'task') {
            itemStyle += 'height: auto';
            if (item.isDone) {
                itemClass += ' task-done';
            }
        }
        else {
            itemStyle += "height:".concat(item.duration, "px;");
        }
        dayElm.innerHTML += "\n    <div class=\"".concat(itemClass, "\" style=\"").concat(itemStyle, "\">").concat(name, " ").concat(start.hour, ":").concat(start.minutes, "</div>\n    ");
    });
};
renderCalendar(items);
