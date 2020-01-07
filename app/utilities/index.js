// Format date day month year.
export const formatDate = (date) => {
  date = new Date(date);
  // Month names.
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // return day month name based on index and year.
  return `${day} ${monthNames[monthIndex]} ${year}`;
}
