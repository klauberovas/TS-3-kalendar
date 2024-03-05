import { items } from './data.js';
import { Items } from './model.js';

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};

renderGrid();

const renderCalendar = (items: Items[]): void => {
  items.forEach((item) => {
    const { role, start, name } = item;
    const dayElm: HTMLElement = document.getElementById(`day${start.day}`)!;
    let itemStyle: string = `margin-top:${Number(start.hour) * 60}px;`;
    let itemClass: string = `calendar-item item-${role}`;

    if (role === 'task') {
      itemStyle += 'height: auto';
      if (item.isDone) {
        itemClass += ' task-done';
      }
    } else {
      itemStyle += `height:${item.duration}px;`;
    }

    dayElm.innerHTML += `
    <div class="${itemClass}" style="${itemStyle}">${name} ${start.hour}:${start.minutes}</div>
    `;
  });
};

renderCalendar(items);
