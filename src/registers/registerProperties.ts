import formatTimeDate from '@/utils/dateFormat';
import { App } from 'vue';

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatTimeDate(value);
    }
  };
}
