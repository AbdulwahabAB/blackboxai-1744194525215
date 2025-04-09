import * as Notifications from 'expo-notifications';
import { getCurrentHijriMonth, getCurrentHijriYear } from '../utils/dateUtils';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const scheduleNotifications = async () => {
  // Request permissions
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return;

  // Cancel any existing notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule prayer time notifications
  const prayerTimes = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const hijriMonth = getCurrentHijriMonth();
  const hijriYear = getCurrentHijriYear();

  prayerTimes.forEach(async (prayer) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Prayer Time: ${prayer}`,
        body: `It's time for ${prayer} prayer (${hijriMonth}/${hijriYear} Hijri)`,
        sound: 'default',
      },
      trigger: {
        hour: 12, // Example time - should be replaced with actual prayer times
        minute: 0,
        repeats: true,
      },
    });
  });
};

export const handleNotificationReceived = (notification) => {
  console.log('Notification received:', notification);
};
