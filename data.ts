import { Items } from './model.js';

export const items: Items[] = [
  {
    name: 'Clean the house',
    start: { day: 1, hour: '8', minutes: '15' },
    role: 'task',
    isDone: false,
  },
  {
    name: 'Buy groceries',
    start: { day: 1, hour: '12', minutes: '45' },
    role: 'task',
    isDone: true,
  },
  {
    name: 'Submit report',
    start: { day: 3, hour: '9', minutes: '00' },
    role: 'task',
    isDone: false,
  },
  {
    name: 'Study for exam',
    start: { day: 4, hour: '13', minutes: '00' },
    role: 'task',
    isDone: false,
  },
  {
    name: 'Pay bills',
    start: { day: 5, hour: '10', minutes: '00' },
    role: 'task',
    isDone: true,
  },
  {
    name: 'Workout',
    start: { day: 7, hour: '9', minutes: '00' },
    role: 'task',
    isDone: true,
  },
  {
    name: 'Dentist',
    start: { day: 1, hour: '10', minutes: '30' },
    role: 'event',
    duration: 60,
  },
  {
    name: 'Meeting',
    start: { day: 2, hour: '14', minutes: '20' },
    role: 'event',
    duration: 50,
  },
  {
    name: 'Team Building Activity',
    start: { day: 6, hour: '11', minutes: '00' },
    role: 'event',
    duration: 180,
  },
];
