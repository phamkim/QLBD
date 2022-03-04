export const convertDMY = (date) => {
  var newDate = new Date(date);
  var formatDate =
    newDate.getDate() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getFullYear();
  return date ? formatDate : null;
};

export const convertYMD = (date) => {
  var newDate = new Date(date);
  var formatDate =
    newDate.getFullYear() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getDate();
  return date ? formatDate : null;
};

export const getDateToday = () => {
  var today = new Date();
  var formatDate =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  return formatDate;
};

export const toVND = (str) => {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
};
