import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CalendarView from './components/CalendarView';
import { scheduleNotifications } from './services/notificationService';
import { convertToHijri } from './utils/dateUtils';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Schedule initial notifications
    scheduleNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dual Calendar App</Text>
      <CalendarView 
        date={selectedDate}
        onDateChange={setSelectedDate}
        events={events}
      />
      <Text style={styles.hijriDate}>
        {convertToHijri(selectedDate).format('iD iMMMM iYYYY')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  hijriDate: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
