import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'expo-calendar';
import moment from 'moment-hijri';

const CalendarView = ({ date, onDateChange, events }) => {
  const gregorianDate = moment(date);
  const hijriDate = moment(date).iHijri();

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Gregorian Calendar</Text>
        <Calendar
          current={date}
          onDayPress={(day) => onDateChange(new Date(day.dateString))}
          markedDates={events.reduce((acc, event) => {
            acc[event.date] = { marked: true, dotColor: '#FF0000' };
            return acc;
          }, {})}
        />
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Hijri Calendar</Text>
        <Calendar
          current={date}
          onDayPress={(day) => onDateChange(new Date(day.dateString))}
          markedDates={events.reduce((acc, event) => {
            acc[event.date] = { marked: true, dotColor: '#FF0000' };
            return acc;
          }, {})}
          theme={{
            calendarBackground: '#F5F5F5',
            textSectionTitleColor: '#333',
            todayTextColor: '#00adf5',
            dayTextColor: '#333',
            textDisabledColor: '#d9e1e8',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CalendarView;
