function formatDate(date) {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("de-DE", options).format(new Date(date));
}

export default formatDate;
