function formatTime(time) {
  return time.substring(0, 5);
}

function formatDay(day) {
  const date = new Date(day);
  const index = date.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekday = weekdays[index];
  return weekday.substring(0, 3);
}

function isDateToday(date) {
  const today = new Date();
  // Formats the new date to be the same as the data's date
  const currentDate = today.toISOString().substring(0, 10);
  return date === currentDate;
}

export { formatTime, formatDay, isDateToday };
