import config from 'src/config';

import { defineStore } from 'pinia';
import { formatTime, toTimeEnd } from 'src/utils/helpers/time';

export const useTimer = defineStore('timer', {
  state: () =>
    ({
      request: null,
      counter: null,

      callback: '',
      _percent: 1,
      _percentToCancel: 1,
      period: 0,
      timestamp: 0,
    } as Timer),
  getters: {
    format: (state): string =>
      formatTime(state._percent, config.time_to_cancel),
    isEnd: (state): boolean => state._percent >= 1,
    percent: (state): number => state._percent,
    cancel: (state): boolean => state._percentToCancel >= 1,
  },
  actions: {
    start(callback: any, timestamp: string, period: number) {
      this.timestamp = Number(timestamp);
      this.period = period;

      this.useCounter();

      this.request = setInterval(callback, config.request_interval);

      if (this.isEnd) return;

      this.counter = setInterval(this.useCounter.bind(this), 1000);
    },

    stop() {
      clearInterval(this.request);
      clearInterval(this.counter);
    },
    stopCounter() {
      clearInterval(this.counter);
    },

    useCounter() {
      this._percent = toTimeEnd(this.timestamp, this.period);
      this._percentToCancel = toTimeEnd(this.timestamp, config.time_over);

      if (this.isEnd) this.stopCounter();
    },
  },
});

interface Timer {
  request: any;
  counter: any;

  callback: (() => void) | string;
  period: number;
  _percent: number;
  _percentToCancel: number;
  timestamp: number;
}
