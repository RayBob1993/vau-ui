import type { Plugin } from 'vue';
import VCalendar from './VCalendar.vue';

export const CalendarPlugin: Plugin = {
  install (app) {
    app.component('VCalendar', VCalendar);
  }
};
