const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

export const getFormattedDate = (dateString: string) =>
  new Date(dateString).toLocaleString("en-US", options);
