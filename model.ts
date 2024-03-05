interface TimeData {
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  hour: string;
  minutes: string;
}

interface BaseCalendar {
  name: string;
  start: TimeData;
}

export interface Task extends BaseCalendar {
  role: 'task';
  isDone: boolean;
}

export interface Event extends BaseCalendar {
  role: 'event';
  duration: number;
}

export type Items = Task | Event;
